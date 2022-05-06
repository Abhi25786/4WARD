import { StyleSheet, Text, View } from 'react-native'
import colors from '../../../styles/colors'
import { moderateScale, moderateScaleVertical, textScale, width } from '../../../styles/responsiveSize'


export const styles = StyleSheet.create({
    backButton: {
        height: moderateScale(width / 20),
        width: moderateScale(width / 20),
        resizeMode: 'contain',
     
      },
      headerText:{
        fontSize:textScale(16),
        marginHorizontal:moderateScale(9),
        color:colors?.white,
     
    },
    inputView:{
      marginTop: moderateScaleVertical(32),
    },
    button: {
      //  position:"absolute",
      //  bottom:0,
      marginBottom: moderateScale(50),
      marginTop: moderateScaleVertical(10),
      marginHorizontal:moderateScale(24)
    },
    userImage:{
      height: moderateScale(width / 3.5),
      width: moderateScale(width / 3.5),
      borderRadius: moderateScale(width / 7),
    },
    userImageContainer:{
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: moderateScaleVertical(30),
      flexDirection: 'row',
    },
    imagePickerButton:{
      height: moderateScale(width / 15),
      width: moderateScale(width / 15),
      alignSelf: 'flex-end',
      marginTop: moderateScaleVertical(70),
      marginLeft: moderateScale(-30),
    }
})