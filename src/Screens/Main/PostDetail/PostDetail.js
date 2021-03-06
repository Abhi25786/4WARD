import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import WrapperContainer from '../../../Components/WrapperContainer';
import {height, moderateScale, width} from '../../../styles/responsiveSize';
import {styles} from './styles';
import imagePath from '../../../constants/imagePath';
import TextComponent from '../../../Components/TextComponent';
import Buttoncustam from '../../../Components/Button';
import en from '../../../constants/lang/en';

export default function PostDetail({route, navigation}) {
  const allData = route?.params?.data;
  const imageData = route?.params?.image;
  console.log(imageData, 'mydata123');


  return (
    // <WrapperContainer>
<>
      {/*----------------------------- this is user post image & info  --------------------------------- */}
      <ImageBackground
        source={{uri:imageData}}
    
        style={{height: height, width: width,}}>
        <View style={{flexDirection: 'column', flex: 0.9}}>
          <View style={styles?.headContainer}>
            <View style={{flex: 0.2, alignItems: 'center'}}>
              <Image source={{uri : allData?.user.profile}} style={styles.userProfile} />
            </View>
            <View style={{flex: 0.6, justifyContent: 'center'}}>
              <TextComponent name={allData?.user.first_name} />
              <TextComponent name={allData.location_name} styling={styles.textStyle} />
            </View>
            <View style={styles?.crossStyle}>
              {/*----------------------------- this is back button  --------------------------------- */}

              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={imagePath?.cross} style={styles.dotsMenu} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/*----------------------------- this button is use for view map --------------------------------- */}
        <Buttoncustam
          stylbtn={styles?.buttonStyle}
          title={en?.VIEW_MAP}
          onpress={null}
        />
      </ImageBackground>
      </>
    // </WrapperContainer>
  );
}
