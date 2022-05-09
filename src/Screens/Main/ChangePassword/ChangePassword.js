import React, {useState} from 'react';
import {KeyboardAvoidingView, Platform, View,ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import Buttoncustam from '../../../Components/Button';
import HeadComponent from '../../../Components/HeadComponent';
import TextInputComponent from '../../../Components/TextInputComponent';
import WrapperContainer from '../../../Components/WrapperContainer';
import {CHANGE_PASSWORD} from '../../../config/urls';
import imagePath from '../../../constants/imagePath';
import en from '../../../constants/lang/en';
import colors from '../../../styles/colors';
import {showError} from '../../../utils/helperFunctions';
import {apiPost} from '../../../utils/utils';
import validator from '../../../utils/validations';
import {styles} from './style';

function ChangePassword({navigation, routes}) {

  //------------------------- userData  store------------------------//
  const userData = useSelector(state => state?.auth?.userData);
  // console.log('confirmdata>>>>>', userData.id);

  const [show, setShow] = useState();
  const [cshow, setcShow] = useState();

  

  const showpass = () => {
    setShow(!show);
  };
  
  const showcpass = async () => {
    setcShow(!cshow);
  };
      //------------------------- useState for password & new password ------------------------//
  const [state, setState] = useState({
    password: '',
    newPassword: '',
  });
  const {password, newPassword} = state;
  const updateState = data => setState(state => ({...state, ...data}));

      //-------------------------  validation section ------------------------//
  const isValidData = () => {
    const error = validator({
      password,
      newPassword,
    });
    if (error) {
      showError(error);

      return;
    }
    return true;
  };
//------------------------------change password button submit-----------------------------//
  const changePasswordbtn = () => {
    const checkValid = isValidData();
    if (!checkValid) {
      return;
    }
    let apiData = {
      user_id: userData?.id,
      password: newPassword,
    };
    console.log('api data>>>', apiData);
    apiPost(CHANGE_PASSWORD, apiData)
      .then(res => {
        alert('Change Password successfully....!!!');
        navigation.goBack();
        console.log(res, 'da>>>>>>>>');
      })
      .catch(err => {
        console.log(err, 'err');
        alert('password error');
      });
  };
  return (
    <WrapperContainer>
     
      <HeadComponent
        leftimagestyle={styles.backButton}
        leftImage={true}
        leftimageIcon={imagePath.leftArrow}
        leftTexticon={true}
        lefttitle={en.CHANGE_PASSWORD}
        lefttextStyle={styles.headerText}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.maincontainer}>
        <ScrollView>
       
        <TextInputComponent
          viewstyle={styles.inputView}
          placeholder={en.CURRENT_PASSWORD}
          placeholderTextColor={colors.introtextColor}
          onchangetext={event => updateState({password: event})}
          value={password}
          rightText={true}
          showpass={showpass}
          righttext={show ? en.SHOW : en.HIDE}
          secureTextEntry={show}
        />
        <TextInputComponent
          viewstyle={styles.inputView}
          placeholder={en.NEW_PASSWORD}
          placeholderTextColor={colors.introtextColor}
          onchangetext={event => updateState({newPassword: event})}
          value={newPassword}
          rightText={true}
          showpass={showcpass}
          righttext={cshow ? en.SHOW : en.HIDE}
          secureTextEntry={cshow}
        />
           
           </ScrollView>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'android' ? 'height' : 'padding'}>
        <Buttoncustam
          title={en.SAVE}
          stylbtn={styles.button}
          onpress={changePasswordbtn}
        />
      </KeyboardAvoidingView>
    </WrapperContainer>
  );
}

export default ChangePassword;
