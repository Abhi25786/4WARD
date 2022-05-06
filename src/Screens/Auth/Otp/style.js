import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';
import {
  height,
  moderateScale,
  moderateScaleVertical,
  textScale,
  width,
} from '../../../styles/responsiveSize';
export const style = StyleSheet.create({
  maincontainer: {
    marginHorizontal: moderateScaleVertical(24),
  },
  passwordStyle: {
    color: colors.signup,
    paddingVertical: moderateScaleVertical(8),
  },
  inputStyle: {
    alignSelf: 'center',
  },
  styleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: moderateScaleVertical(32),
  },
  button: {
    marginHorizontal: moderateScaleVertical(24),
    marginBottom: moderateScale(33),
  },
  textStyle: {
    fontSize: textScale(15),
  },
  otpView: {
    backgroundColor: colors.introBackground,
    borderRadius: moderateScale(10),
    marginHorizontal: 10,
  },
  backButton: {
    height: moderateScale(width / 20),
    width: moderateScale(width / 20),

    resizeMode: 'contain',
  }
,
  otpSection:{
    marginVertical: moderateScaleVertical(25),
    marginHorizontal: moderateScale(19),
  },
  otpCellStyle:{
    borderRadius: moderateScale(10),
    backgroundColor: colors.introBackground,
    marginRight: 10,
  },
  countOtp:{
    flexDirection: 'row',
    marginHorizontal: moderateScale(24),
    alignItems: 'center',
  }

});
