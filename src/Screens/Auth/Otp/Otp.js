import React, { useState } from 'react';
import { KeyboardAvoidingView, ScrollView, Text, View } from 'react-native';
import CountDown from 'react-native-countdown-component';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import Buttoncustam from '../../../Components/Button';
import HeadComponent from '../../../Components/HeadComponent';
import TextComponent from '../../../Components/TextComponent';
import WrapperContainer from '../../../Components/WrapperContainer';
import imagePath from '../../../constants/imagePath';
import en from '../../../constants/lang/en';
import actions from '../../../redux/actions';
import colors from '../../../styles/colors';
import { commonStyles } from '../../../styles/styles';
import { showError, showSuccess } from '../../../utils/helperFunctions';
import { style } from './style';


function Otp({navigation, route}) {


//------------------------------User Data  from store-----------------------------//
  const allData = route?.params?.data;
  const number = route?.params?.number;
  const otp = allData?.otp;
  const [code, setCode] = useState();
  //------------------------------otp button section ----------------------------//
  const otpValidation = () => {
    if (otp == code) {
      
      actions.saveUserData(allData);
      showSuccess('Login successfully');
    } else {
      showError('otp is wrong');
    }
  };

  const resendCodeAgain = () => {};
  return (
    <WrapperContainer>
      <HeadComponent
        leftImage={true}
        leftimageIcon={imagePath.leftArrow}
        leftimagestyle={style.backButton}
        onPress={() => navigation.goBack()}
      />

      <ScrollView>
        <View style={style.maincontainer}>
          <View>
            <Text style={commonStyles.commonText}>
              {en.ENTER_CODE} + {allData?.phone_code} {number ? number : allData?.phone}
            </Text>

            <TextComponent
              name={en.EDIT_NUMBER}
              styling={style.passwordStyle}
            />
          </View>
          <Text style={commonStyles.commonText}>
            {en.OTP}
            {allData?.otp}
          </Text>
          <View
            style={style.otpSection}>
            <SmoothPinCodeInput
              value={code}
              onTextChange={code => setCode(code)}
              cellStyle={style?.otpCellStyle}
            />
          </View>
        </View>
      </ScrollView>
      <KeyboardAvoidingView enabled={true}>
        <View
          style={style?.countOtp}>
          <TextComponent name={en.RESEND_CODE} styling={style.textStyle} />
          <CountDown
            timeToShow={'S'}
            digitStyle={{backgroundColor: colors?.theme}}
            until={30}
            timeLabels={'S'}
            digitTxtStyle={{color: colors.white, fontSize: 13}}
          />
        </View>
        <View>
          <Buttoncustam
            title={en.NEXT}
            stylbtn={style.button}
           
            onpress={otpValidation}
          />
        </View>
      </KeyboardAvoidingView>
    </WrapperContainer>
  );
}

export default Otp;
