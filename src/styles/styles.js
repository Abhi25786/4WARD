import {StyleSheet} from 'react-native';
import colors from './colors';
import {
  height,
  moderateScale,
  moderateScaleVertical,
  textScale,
  width,
} from './responsiveSize';
export const commonStyles = StyleSheet.create({
  commonText: {
    color: colors.white,
    fontSize: textScale(18),
  },
  commonSmaillText: {
    color: colors.introtextColor,
    fontSize: textScale(15),
    marginTop: moderateScaleVertical(10),
  },
  commonOtpText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: moderateScaleVertical(16),
  },
  commonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tabBarStyle: {
    position: 'absolute',
    backgroundColor: colors.introBackground,
    borderTopLeftRadius: moderateScale(8),
    borderTopRightRadius: moderateScale(8),
    borderTopWidth: moderateScale(0),
    height:moderateScale(width/6),

  
   
  },
  tabBariconStyle: {
    resizeMode: 'contain',
    height: moderateScale(height - height / 1.05),
    width: moderateScale(width - width / 1.05),
  },
});
