import React from 'react';
import {Text, View, KeyboardAvoidingView, ScrollView} from 'react-native';
import Buttoncustam from '../../../Components/Button';
import HeadComponent from '../../../Components/HeadComponent';
import TextComponent from '../../../Components/TextComponent';
import TextInputComponent from '../../../Components/TextInputComponent';
import WrapperContainer from '../../../Components/WrapperContainer';
import en from '../../../constants/lang/en';
import navigationStrings from '../../../navigation/navigationStrings';
import colors from '../../../styles/colors';
import {commonStyles} from '../../../styles/styles';
import {styles} from './style';
function SetPassword({navigation}) {
  return (
    <WrapperContainer>
      <HeadComponent
        left={true}
        onPress={() => navigation.navigate(navigationStrings.OTP)}
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
              placeholderTextColor={colors?.introtextColor}
              value={null}
              rightText={true}
              righttext={en.SHOW}
            />
          </View>
          <View>
            <TextInputComponent
              viewstyle={styles.inputView}
              placeholder={en.CONFIRM_PASSWORD}
              placeholderTextColor={colors?.introtextColor}
              value={null}
              rightText={true}
              righttext={en.SHOW}
            />
          </View>
        </View>
      </ScrollView>

      <KeyboardAvoidingView enabled={true}>
        <View>
          <Buttoncustam title={en.GET_STARTED} stylbtn={styles.button} />
        </View>
      </KeyboardAvoidingView>
    </WrapperContainer>
  );
}

export default SetPassword;
