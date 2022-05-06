import {
  GoogleSignin,
  statusCodes
} from '@react-native-google-signin/google-signin';
import React from 'react';
import { Image, ScrollView, View } from 'react-native';
import {
  GraphRequest,
  GraphRequestManager,
  LoginManager
} from 'react-native-fbsdk';
import Buttoncustam from '../../../Components/Button';
import TextComponent from '../../../Components/TextComponent';
import WrapperContainer from '../../../Components/WrapperContainer';
import imagePath from '../../../constants/imagePath';
import en from '../../../constants/lang/en';
import navigationStrings from '../../../navigation/navigationStrings';
import actions from '../../../redux/actions';
import { showError } from '../../../utils/helperFunctions';
import { styles } from './style';

function Login({navigation}) {


  
  // -----------------------Login With Number ----------------------//
  const loginNumber = () => {
    navigation.navigate(navigationStrings.LOGIN_NUMBER);
  };


  // -----------------------Google Login ----------------------//

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const data = userInfo.user;
      console.log('user info', data);
      actions.saveUserData(data);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('error raise', error);
        showError(error);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('error raise', error);
        showError(error);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('error raise', error);
        showError(error);
      } else {
        console.log('error raise', error);
        showError(error);
      }
    }
  };

  // -------------------------facebook login---------------------//

  const fbLogIn = resCallback => {
    LoginManager.logOut();
    return LoginManager.logInWithPermissions(['email', 'public_profile']).then(
      result => {
        console.log('fb result==>>>>>>', result);
        if (
          result.declinedPermissions &&
          result.declinedPermissions.includes('email')
        ) {
          resCallback({message: ' Eamil is required'});
        }
        if (result.isCancelled) {
          console.log('error');
        } else {
          const infoRequest = new GraphRequest('/me', null, resCallback);
          new GraphRequestManager().addRequest(infoRequest).start();
        }
      },
      function (error) {
        console.log('Login fail with error:' + error);
      },
    );
  };

  const onFBlogIn = async () => {
    try {
      let data = await fbLogIn(_resInfoCallback);
      console.log(data, 'facebook response');
    } catch (error) {
      console.log('fberror-', error);
      showError(error);
    }
  };

  const _resInfoCallback = async (error, result) => {
    if (error) {
      console.log('error raised at response', error);
      return;
    } else {
      const data = result;
      console.log(data, 'facebook');
      actions.saveUserData(data);
    }
  };

   // -----------------------Apple Button ----------------------//
   const appleButtonSubmit = () => {
   
  };
    // -----------------------Sign Up Button ----------------------//
    const signUp = () => {
      navigation.navigate(navigationStrings.SIGN_UP);
    };
  return (
    <WrapperContainer>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <View style={styles.maincontainer}>
          <View style={{flex: 0.5}}>
            <View style={styles.logoView}>
              <Image source={imagePath.logo} style={styles.logoImg} />
              <TextComponent
                styling={styles.logintextStyle}
                name={en.AGREECONDITION}
              />
            </View>
          </View>
          <View style={styles.buttonView}>
            <Buttoncustam
              title={en.LOGIN_WITH_PHONE_NUMBER}
              onpress={loginNumber}
            />

            <TextComponent styling={styles.textStyle} name={en.OR} />
            <Buttoncustam
              title={en.GOOGLE}
              stylbtn={styles.googleButton}
              leftimage={true}
              image={imagePath.google}
              textStyle={styles.buttonText}
              onpress={signIn}
            />
            <Buttoncustam
              title={en.FACEBOOK}
              stylbtn={styles.googleButton}
              textStyle={styles.buttonText}
              leftimage={true}
              image={imagePath.fb}
              onpress={onFBlogIn}
            />

            <Buttoncustam
              title={en.APPLE}
              stylbtn={styles.googleButton}
              textStyle={styles.buttonText}
              leftimage={true}
              image={imagePath.apple}
              onpress={appleButtonSubmit}
            />
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <TextComponent
                styling={styles.textStyle}
                name={en.NEW_HERE}
                onPress={signUp}
              />
              <TextComponent
                styling={styles.sugnupbtn}
                name={en?.SIGN_UP}
                onPress={signUp}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </WrapperContainer>
  );
}

export default Login;
