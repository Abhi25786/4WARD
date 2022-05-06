import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';
import {
  height,
  moderateScale,
  moderateScaleVertical,
  textScale,
  width,
} from '../../../styles/responsiveSize';
export const styles = StyleSheet.create({
  maincontainer: {
    alignSelf: 'center',
  
  marginHorizontal:moderateScale(24)
  },
  textStyle: {
    textAlign: 'center',
    color: colors.white,
    paddingVertical: moderateScaleVertical(10),
    fontSize: textScale(16),
  },
  sugnupbtn: {
    textAlign: 'center',
    color: colors.signup,
    paddingVertical: moderateScaleVertical(10),
    fontSize: textScale(16),
  },

  logoView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImg: {
    width: moderateScale(width / 2.5),
    height: moderateScale(width / 2.5),
    resizeMode: 'contain',
    marginTop: moderateScale(50),
  },

  agreeConditioview: {
  
    marginTop: moderateScaleVertical(54),
    alignItems: 'center',
  },
  logintextStyle: {
    color: colors.textColor,
    textAlign: 'center',
    paddingVertical: moderateScaleVertical(20),
    marginHorizontal: moderateScaleVertical(24),

  },
  buttonStyle: {
    marginTop: moderateScaleVertical(24),
  },
  googleButton: {
    backgroundColor: colors.white,
    marginVertical: moderateScaleVertical(16),
  },
  buttonText: {
    color: colors.black,
  },
  buttonView: {
    flex: 0.6,

  },
});
