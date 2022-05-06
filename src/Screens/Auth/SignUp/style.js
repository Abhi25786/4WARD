import {StyleSheet} from 'react-native';
import {
  height,
  moderateScale,
  moderateScaleVertical,
  width,
} from '../../../styles/responsiveSize';
export const styles = StyleSheet.create({
  maincontainer: {
marginHorizontal:moderateScale(24)
  },
  button: {
    //  position:"absolute",
    //  bottom:0,
    marginBottom: moderateScale(30),
    marginTop: moderateScaleVertical(10),
    marginHorizontal:moderateScale(24)
  },
  inputView: {
    marginTop: moderateScaleVertical(32),
  },
  backButton: {
    height: moderateScale(width / 20),
    width: moderateScale(width / 20),
    resizeMode: 'contain',
  },
});
