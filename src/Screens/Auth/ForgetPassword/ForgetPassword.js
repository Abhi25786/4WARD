import React, {useState} from 'react';
import {KeyboardAvoidingView, ScrollView, Text, View} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import Buttoncustam from '../../../Components/Button';
import CountryCodePicker from '../../../Components/CountryPicker';
import HeadComponent from '../../../Components/HeadComponent';
import TextComponent from '../../../Components/TextComponent';
import TextInputComponent from '../../../Components/TextInputComponent';
import WrapperContainer from '../../../Components/WrapperContainer';
import { FORGET_PASSWORD } from '../../../config/urls';
import imagePath from '../../../constants/imagePath';
import en from '../../../constants/lang/en';
import navigationStrings from '../../../navigation/navigationStrings';
import actions from '../../../redux/actions';
import colors from '../../../styles/colors';
import {commonStyles} from '../../../styles/styles';
import {showError, showSuccess} from '../../../utils/helperFunctions';
import { apiPost } from '../../../utils/utils';
import validator from '../../../utils/validations';
import {styles} from './styles';

export default function LoginWithOtp({navigation}) {
  //------------------- Country Picker useState ---------------------------//
  const [countryCode, setCountryCode] = useState('91');
  const [countryFlag, setCountryFlag] = useState('IN');
  //------------------------UserData useState--------------------------//
  const [phoneNumber, setPhoneNumber] = useState();
  //---------------------- Validation Section --------------------------//

  //   const loginUserButton = async () => {
  //     const checkValid = isValidData();
  //     if (!checkValid) {
  //       return;
  //     }
  //     let apiData = {
  //       phone: phone,
  //       phone_code: countryCode,
  //       device_token: DeviceInfo.getUniqueId(),
  //       device_type: Platform.OS == 'ios' ? 'IOS' : 'ANDROID',
  //       password: password,
  //       loginType: 'admin',
  //     };
  //     try {
  //       const res = await actions.login(apiData);
  //       console.log('Login api res_+++++', res);

  //       showSuccess('User Login successfully....!!!');
  //     } catch (error) {
  //       console.log('error raised', error);
  //       showError(error?.message);
  //     }
  //   };

  const loginUserButton = () =>{

        let apiData = {
          phone:phoneNumber,
          phone_code:countryCode,
        }
console.log(apiData,"forgetdata");
apiPost(FORGET_PASSWORD, apiData)
.then(res => {
  alert('Change Password successfully....!!!');
  navigation.navigate(navigationStrings.OTP,{data:res?.data,number : phoneNumber})
  console.log(res, 'da>>>>>>>>');
})
.catch(err => {
  console.log(err, 'err');
  alert(err);
});
    //   navigation.navigate(navigationStrings?.OTP_LOGIN)

    }

  return (
    <WrapperContainer>
      <HeadComponent
        leftImage={true}
        leftimageIcon={imagePath.leftArrow}
        leftimagestyle={styles.backButton}
        onPress={() => navigation.goBack()}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.maincontainer}>
          <View>
            <Text style={commonStyles.commonText}>{en.FORGET_PASSWORD}</Text>
            
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
                onchangetext={setPhoneNumber}
                value={phoneNumber}
                keyboardtype={'numeric'}
                maxLength={10}
              />
            </View>
          </View>
        </View>
      </ScrollView>

      <KeyboardAvoidingView
        behavior={Platform.OS == 'android' ? 'height' : 'padding'}>
        <View>
          <Buttoncustam
            title={en.SUBMIT}
            stylbtn={styles.button}
            onpress={loginUserButton}
          />
        </View>
      </KeyboardAvoidingView>
    </WrapperContainer>
  );
}
