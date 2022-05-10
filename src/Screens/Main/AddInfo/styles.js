import { StyleSheet, Text, View } from 'react-native'
import colors from '../../../styles/colors'
import { height, moderateScale, moderateScaleVertical, textScale, width } from '../../../styles/responsiveSize'


export const styles = StyleSheet.create({
    backButton: {
        height: moderateScale(width / 20),
        width: moderateScale(width / 20),
        resizeMode: 'contain',
      },
      textIcon:{
          color:colors?.white,
          fontSize:textScale(16),
          marginHorizontal:moderateScale(10)
      },
      textInputStyle:{
        height:moderateScale(100),
        marginHorizontal:moderateScale(24),
        paddingTop:moderateScaleVertical(10)
      
      },
      imageStyle:{
        height: moderateScale(width/6),
        width:  moderateScale(width/6),
        backgroundColor:colors?.introBackground,
        marginLeft: moderateScale(24),
        borderRadius:10,
        resizeMode:'cover',
        alignItems:"center",
        justifyContent:"center",

        marginBottom: 24,
      },
      button: {
        //  position:"absolute",
        //  bottom:0,
        marginBottom: moderateScale(30),
        marginTop: moderateScaleVertical(10),
        marginHorizontal:moderateScale(24)
      },
      alertStyle:{
        color:"red"
      }
})