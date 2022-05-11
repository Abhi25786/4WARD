import React, {useState} from 'react';
import {KeyboardAvoidingView, ScrollView, Text, View,ActivityIndicator} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import Buttoncustam from '../../../Components/Button';
import CountryCodePicker from '../../../Components/CountryPicker';
import HeadComponent from '../../../Components/HeadComponent';
import TextComponent from '../../../Components/TextComponent';
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

function LoginNumber({navigation}) {
  //------------------- Country Picker useState ---------------------------//
  const [countryCode, setCountryCode] = useState('91');
  const [countryFlag, setCountryFlag] = useState('IN');

  //----------------------Password hide useState--------------------------//

  const [show, setShow] = useState();

  //------------------------UserData useState--------------------------//

  const [state, setState] = useState({
    phoneNumber: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false)
  const {password, phoneNumber} = state;
  const updateState = data => setState(state => ({...state, ...data}));

  const showpass = () => {
    setShow(!show);
  };

  //---------------------- Validation Section --------------------------//

  const isValidData = () => {
    const error = validator({phoneNumber, password});
    if (error) {
      showError(error);
      return;
    }
    return true;
  };
  //----------------------on Submit user login button --------------------------//

  const loginUserButton = async () => {
  
    const checkValid = isValidData();
    if (!checkValid) {
      return;
    }

   
    let apiData = {
      phone: phoneNumber,
      phone_code: countryCode,
      device_token: DeviceInfo.getUniqueId(),
      device_type: Platform.OS == 'ios' ? 'IOS' : 'ANDROID',
      password: password,
      loginType: 'admin',
    };
    try {
      const res = await actions.login(apiData);
      console.log('Login api res_+++++', res);

      showSuccess('User Login successfully....!!!');
      setIsLoading(!isLoading);
    } catch (error) {
      console.log('error raised', error);
      showError(error?.message);
    }
  };

  const forGetPasswordButton = () =>{

    navigation.navigate(navigationStrings?.FORGET_PASSWORD)
  }
  return (
    <WrapperContainer>
      <HeadComponent
        leftImage={true}
        leftimageIcon={imagePath.leftArrow}
        leftimagestyle={styles.backButton}
        onPress={() => navigation.goBack()}
      />
{isLoading && <ActivityIndicator size="small" color={colors?.button} style={{position:"absolute",right:'50%',top:'50%'}}/>}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.maincontainer}>
          <View>
            <Text style={commonStyles.commonText}>{en.WELCOME_BACK}</Text>
            <Text style={commonStyles.commonSmaillText}>{en.HAPPY_TEXT}</Text>
          </View>
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
          <View>
            <TextInputComponent
              viewstyle={styles.inputView}
              placeholder={en.PASSWORD}
              placeholderTextColor={colors.introtextColor}
              onchangetext={event => updateState({password: event})}
              value={password}
              rightText={true}
              showpass={showpass}
              righttext={show ? en.SHOW : en.HIDE}
              secureTextEntry={show}
            />
          </View>
          <View style={commonStyles.commonOtpText}>
            <TextComponent
              name={en.USE_OTP}
             
            />
            <TextComponent
              name={en.FORGET_PASSWORD}
              styling={{color: colors.signup}}
              onPress={forGetPasswordButton}
            />
          </View>
     
        </View>
      </ScrollView>

      <KeyboardAvoidingView
        behavior={Platform.OS == 'android' ? 'height' : 'padding'}>
        <View>
          <Buttoncustam
            title={en.LOGIN}
            stylbtn={styles.button}
            onpress={loginUserButton}
          />
        </View>
      </KeyboardAvoidingView>
    </WrapperContainer>
  );
}

export default LoginNumber;
