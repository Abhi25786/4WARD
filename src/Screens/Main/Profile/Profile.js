import {GoogleSignin} from '@react-native-google-signin/google-signin';
import React from 'react';
import {Text, View, Image} from 'react-native';
import {useSelector} from 'react-redux';
import HeadComponent from '../../../Components/HeadComponent';
import TextComponent from '../../../Components/TextComponent';
import WrapperContainer from '../../../Components/WrapperContainer';
import imagePath from '../../../constants/imagePath';
import en from '../../../constants/lang/en';
import navigationStrings from '../../../navigation/navigationStrings';
import actions from '../../../redux/actions';
import {height, moderateScale} from '../../../styles/responsiveSize';
import {commonStyles} from '../../../styles/styles';
import {style} from './style';

export default function Profile({navigation}) {
    //--------------------------------------user Data section ----------------------------------------//
  const userData = useSelector(state => state?.auth?.userData);
  console.log(userData?.socialId, 'my social data>>>>');

  //--------------------------------------LogOut Section ----------------------------------------//
  const logout = async () => {
    try {
      await GoogleSignin.signOut();
      actions.logout();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <WrapperContainer>
      <HeadComponent
        leftTexticon={true}
        lefttitle={en.PROFILE}
        lefttextStyle={{...commonStyles.commonText, ...style.textStyle}}
      />
      <View style={{marginHorizontal: moderateScale(24)}}>
      
          <View>
            <View style={style.buttonView}>
              <View style={{flex: 0.1}}>
                <Image source={imagePath.userr} style={style.smaillIcon} />
              </View>
              <View style={{flex: 0.8}}>
                <TextComponent
                  name={en.EDIT_PROFILE}
                  onPress={() =>
                    navigation.navigate(navigationStrings.EDIT_PROFILE)
                  }
                />
              </View>
            </View>
            <View style={style.buttonView}>
              <View style={{flex: 0.1}}>
                <Image source={imagePath.key} style={style.smaillIcon} />
              </View>
              <View style={{flex: 0.8}}>
                <TextComponent
                  name={en.CHANGE_PASSWORD}
                  onPress={() =>
                    navigation.navigate(navigationStrings.CHANGE_PASSWORD)
                  }
                />
              </View>
            </View>
          </View>
      
        <View style={style.buttonView}>
          <View style={{flex: 0.1}}>
            <Image source={imagePath.logOut} style={style.smaillIcon} />
          </View>
          <View style={{flex: 0.8}}>
            <TextComponent name={en.SIGNOUT} onPress={logout} />
          </View>
        </View>
      </View>
    </WrapperContainer>
  );
}
