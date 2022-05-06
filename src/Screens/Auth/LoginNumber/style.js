import { StyleSheet } from 'react-native'
import colors from '../../../styles/colors'
import { height, moderateScale, moderateScaleVertical, width } from '../../../styles/responsiveSize'
export const styles= StyleSheet.create({

    maincontainer:{
       marginHorizontal:moderateScale(24)
     
    },
    button:{
        marginHorizontal:moderateScale(24),
        marginBottom:moderateScale(50),
        marginTop:moderateScaleVertical(10)
    },
    inputView:{
        marginTop: moderateScaleVertical(32)
    },
    country:{
        color:colors.white
    },backButton:{
        height :moderateScale(width/20,),
        width:moderateScale(width/20,),
      
  
        resizeMode:'contain'
    }
})