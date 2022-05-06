import React, {useState} from 'react';
import {Text, View, KeyboardAvoidingView, ScrollView} from 'react-native';
import Buttoncustam from '../../../Components/Button';
import HeadComponent from '../../../Components/HeadComponent';
import TextComponent from '../../../Components/TextComponent';
import TextInputComponent from '../../../Components/TextInputComponent';
import WrapperContainer from '../../../Components/WrapperContainer';
import { CHANGE_PASSWORD } from '../../../config/urls';
import en from '../../../constants/lang/en';
import navigationStrings from '../../../navigation/navigationStrings';
import colors from '../../../styles/colors';
import {commonStyles} from '../../../styles/styles';
import { apiPost } from '../../../utils/utils';
useState
import {styles} from './style';
function SetPassword ({navigation,route}) {
  const allData = route?.params?.data;
  console.log(allData,"mydata77");
    //----------------------Password hide useState--------------------------//

    const [show, setShow] = useState();
    const showpass = () => {
      setShow(!show);
    };
    
 

 //------------------------- useState for password & new password ------------------------//
 const [state, setState] = useState({
   newPassword: '',
   confirmPassword: '',
  });
  const {confirmPassword, newPassword} = state;

  const updateState = data => setState(state => ({...state, ...data}));


 const changePasswordButton = () =>{
  let apiData = {
    user_id: allData?.user_id,
    password: newPassword,
  };
  apiPost(CHANGE_PASSWORD, apiData)
  .then(res => {
    alert('Change Password successfully....!!!');
    navigation.navigate(navigationStrings.LOGIN_NUMBER);
    console.log(res, 'da>>>>>>>>');
  })
  .catch(err => {
    console.log(err, 'err');
    alert('password error');
  });
 }
  return (
    <WrapperContainer>
      <HeadComponent
        left={true}
        onPress={() => navigation.goBack()}
      />
      <ScrollView scrollEnabled={false}>
        <View style={styles.maincontainer}>
          <View>
            <Text style={commonStyles.commonText}>{en.SET_PASSWORD}</Text>
            <Text style={commonStyles.commonSmaillText}>
              {en.CREATE_UNIQUE_PASSWORD}
            </Text>
          </View>

          <View>
            <TextInputComponent
              viewstyle={styles.inputView}
              placeholder={en.PASSWORD}
              placeholderTextColor={colors.introtextColor}
              onchangetext={event => updateState({newPassword: event})}
              value={newPassword}
              rightText={true}
              showpass={showpass}
              righttext={show ? en.SHOW : en.HIDE}
              secureTextEntry={show}
            />
          </View>
          <View>
            <TextInputComponent
              viewstyle={styles.inputView}
              placeholder={en.PASSWORD}
              placeholderTextColor={colors.introtextColor}
              onchangetext={event => updateState({confirmPassword: event})}
              value={confirmPassword}
              rightText={true}
              showpass={showpass}
              righttext={show ? en.SHOW : en.HIDE}
              secureTextEntry={show}
            />
          </View>
        </View>
      </ScrollView>

      <KeyboardAvoidingView enabled={true}>
        <View>
          <Buttoncustam title={en?.SUBMIT} stylbtn={styles.button} onpress={changePasswordButton} />
        </View>
      </KeyboardAvoidingView>
    </WrapperContainer>
  );
}

export default SetPassword;
