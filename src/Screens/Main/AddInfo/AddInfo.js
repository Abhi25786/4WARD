import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native';
import React from 'react';

import WrapperContainer from '../../../Components/WrapperContainer';
import HeadComponent from '../../../Components/HeadComponent';
import {styles} from './styles';
import imagePath from '../../../constants/imagePath';
import en from '../../../constants/lang/en';
import TextInputComponent from '../../../Components/TextInputComponent';
import colors from '../../../styles/colors';
import {
  moderateScale,
  moderateScaleVertical,
} from '../../../styles/responsiveSize';
import Buttoncustam from '../../../Components/Button';
import {ScrollView} from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-crop-picker';

export default function AddInfo({navigation, route}) {
  const allData = route?.params?.data;
  console.log(allData, 'mydatalist');
   const buttonClick = ()=>{
    ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      }).then(image => {
        console.log(image, 'my image>>>>>>');
        updateState({
          profileImage: image?.sourceURL || image?.path,
          imageType: image?.mime,
        });
      });
   }
  return (
    <WrapperContainer>
      <HeadComponent
        leftImage={true}
        leftimageIcon={imagePath.leftArrow}
        leftTexticon={true}
        lefttitle={en?.ADD_INFO}
        lefttextStyle={styles.textIcon}
        leftimagestyle={styles.backButton}
        onPress={() => navigation.goBack()}
      />
    
      <ScrollView>
        <View>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Image
                source={{uri: allData.item.node.image.uri}}
                style={styles?.imageStyle}
              />
            </View>
            <TouchableOpacity onPress={buttonClick}>

            <View style={styles?.imageStyle}>
              <Image source={imagePath?.plus} style={{height: 20, width: 20}} />
            </View>
            </TouchableOpacity>
          </View>
          <TextInputComponent
            multiline={true}
            viewstyle={styles?.textInputStyle}
            placeholder={'Write description here..'}
            placeholderTextColor={colors?.introtextColor}
            onchangetext={null}
            value={null}
          />
          <TextInputComponent
            viewstyle={{
              marginHorizontal: moderateScale(24),
              marginTop: moderateScaleVertical(16),
            }}
            placeholder={'Add location'}
            placeholderTextColor={colors?.introtextColor}
            onchangetext={null}
            value={null}
          />
        </View>
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'android' ? 'height' : 'padding'}>
        <View>
          <Buttoncustam
            title={en.NEXT}
            stylbtn={styles.button}
            onpress={null}
          />
        </View>
      </KeyboardAvoidingView>
    </WrapperContainer>
  );
}
