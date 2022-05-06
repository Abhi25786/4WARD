import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import Buttoncustam from '../../../Components/Button';
import CountryCodePicker from '../../../Components/CountryPicker';
import HeadComponent from '../../../Components/HeadComponent';
import TextInputComponent from '../../../Components/TextInputComponent';
import WrapperContainer from '../../../Components/WrapperContainer';
import imagePath from '../../../constants/imagePath';
import en from '../../../constants/lang/en';
import navigationStrings from '../../../navigation/navigationStrings';
import actions from '../../../redux/actions';
import colors from '../../../styles/colors';
import {commonStyles} from '../../../styles/styles';
import {showError, showSuccess} from '../../../utils/helperFunctions';
import validator from '../../../utils/validations';
import {styles} from './style';
export default function SignUp({navigation}) {
  // -------------------------COUNTRY CODE PICKER USESTATE-------------//
  const [countryCode, setCountryCode] = useState('91');
  const [countryFlag, setCountryFlag] = useState('IN');

  // --------------------------Password hide or show ------------------//
  const [show, setShow] = useState();
  const [cshow, setcShow] = useState();

  const showpass = () => {
    setShow(!show);
  };

  const showcpass = () => {
    setcShow(!cshow);
  };

  // ---------------------------Signup useState------------------------------//

  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });
  const {firstName, lastName, email, phoneNumber, password, confirmPassword} =
    state;
  const updateState = data => setState(state => ({...state, ...data}));

  // ------------------------Validation Section ----------------------------//

  const isValidData = () => {
    const error = validator({
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
      confirmPassword,
    });
    if (error) {
      showError(error);
      alert(error);
      return;
    }
    return true;
  };

  // ------------------------SIGNUP button submit ----------------------------//
  const signUpButton = async () => {
    const checkValid = isValidData();
    if (!checkValid) {
      return;
    }
    let apiData = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phoneNumber,
      phone_code: countryCode,
      country_code: countryFlag,
      device_token: DeviceInfo.getUniqueId(),

      device_type: Platform.OS == 'ios' ? 'IOS' : 'ANDROID',
      password: password,
    };

    try {
      const res = await actions.signUp(apiData);
      console.log('singnup api res_+++++', res);
      navigation.navigate(navigationStrings.OTP, {data: res.data});
    } catch (error) {
      console.log('error raised', error);
      showSuccess(error?.message);
    }
  };

  return (
    <WrapperContainer>
      <HeadComponent
        leftImage={true}
        leftimageIcon={imagePath.leftArrow}
        leftimagestyle={styles.backButton}
        onPress={() => navigation.goBack()}
      />
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <View style={styles.maincontainer}>
          <View>
            <Text style={commonStyles.commonText}>{en.C_NEW_ACCOUNT}</Text>
            <Text style={commonStyles.commonSmaillText}>
              {en.CREATE_CONTINUE}
            </Text>
          </View>
          <View>
            <View style={commonStyles?.commonView}>
              <View style={{flex: 0.5, paddingRight: 15}}>
                <TextInputComponent
                  viewstyle={styles.inputView}
                  placeholder={en.FIRST_NAME}
                  placeholderTextColor={colors.introtextColor}
                  onchangetext={event => updateState({firstName: event})}
                  value={firstName}
                />
              </View>
              <View style={{flex: 0.5}}>
                <TextInputComponent
                  viewstyle={styles.inputView}
                  placeholder={en.LAST_NAME}
                  placeholderTextColor={colors.introtextColor}
                  onchangetext={event => updateState({lastName: event})}
                  value={lastName}
                />
              </View>
            </View>
            <TextInputComponent
              viewstyle={styles.inputView}
              placeholder={en.EMAIL}
              placeholderTextColor={colors.introtextColor}
              onchangetext={event => updateState({email: event})}
              value={email}
            />
            <View style={commonStyles?.commonView}>
              <CountryCodePicker
                countryCode={countryFlag}
                withCallingCodeButton={countryCode}
                setCountryCode={setCountryCode}
                setCountryFlag={setCountryFlag}
              />

              <View style={{flex: 0.6}}>
                <TextInputComponent
                  viewstyle={styles.inputView}
                  placeholder={en.MOBILE_NUMBER}
                  placeholderTextColor={colors.introtextColor}
                  onchangetext={event => updateState({phoneNumber: event})}
                  value={phoneNumber}
                  keyboardtype={'numeric'}
                  maxLength={10}
                />
              </View>
            </View>
            <TextInputComponent
              viewstyle={styles.inputView}
              placeholder={en.SET_PASSWORD}
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
              placeholder={en.CONFIRM_PASSWORD}
              placeholderTextColor={colors.introtextColor}
              onchangetext={event => updateState({confirmPassword: event})}
              value={confirmPassword}
              rightText={true}
              showpass={showcpass}
              righttext={cshow ? en.SHOW : en.HIDE}
              secureTextEntry={cshow}
            />
          </View>
        </View>
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'android' ? 'height' : 'padding'}>
        <View>
          <Buttoncustam
            title={en.NEXT}
            stylbtn={styles.button}
            onpress={signUpButton}
          />
        </View>
      </KeyboardAvoidingView>
    </WrapperContainer>
  );
}
