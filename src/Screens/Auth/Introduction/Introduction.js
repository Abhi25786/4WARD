import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import WrapperContainer from '../../../Components/WrapperContainer';
import imagePath from '../../../constants/imagePath';
import en from '../../../constants/lang/en';
import actions from '../../../redux/actions';
import { style } from './style';

function Introduction({navigation}) {
 //---------------------------------This is intro detail--------------------//

  const slides = [
    {
      key: '1',
      image: imagePath.into_Image,
      tittle: en.INTRO_TITLE,
      description: en.INTRO_DESCRIPTION,
    },
    {
      key: '2',
      image: imagePath.into_Image,
      tittle: en.INTRO_TITLE,
      description: en.INTRO_DESCRIPTION,
    },
    {
      key: '3',
      image: imagePath.into_Image,
      tittle: en.INTRO_TITLE,
      description: en.INTRO_DESCRIPTION,
    },
  ];
 //---------------------------------This is render section--------------------//
  const renederItem = ({item}) => {
    return (
      <View style={style.introView}>
        <View style={style.imageView}>
          <Image source={item.image} style={style.introImage} />
        </View>

        <View style={style.imageView}>
          <View>
            <Text style={style.textView}>{item.tittle}</Text>
          </View>
          <View>
            <Text style={style.introText}>{item.description}</Text>
          </View>
        </View>
      </View>
    );
  };
   //---------------------------------next button section--------------------//
  const renderNextButton = () => {
    return (
      <View>
        <Text style={style.introButton}>{en.NEXT}</Text>
      </View>
    );
  };
   //---------------------------------Get started button section--------------------//
  const renderDoneButton = () => {
    return (
      <TouchableOpacity
        onPress={()=>actions.intro(false)}>
        <Text style={style.introButton}>{en.GET_STARTED}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <WrapperContainer>
     
        <AppIntroSlider
          data={slides}
          renderItem={renederItem}
          renderDoneButton={renderDoneButton}
          renderNextButton={renderNextButton}
          activeDotStyle={style.activeDote}
          dotStyle={style.inactiveDote}
        />
     
    </WrapperContainer>
  );
}

export default Introduction;
