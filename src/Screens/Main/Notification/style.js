import { StyleSheet, Text, View } from 'react-native'
import colors from '../../../styles/colors'
import { moderateScale, textScale, width } from '../../../styles/responsiveSize'


export  const styles = StyleSheet.create({
    userProfile: {
        width: moderateScale(width / 10),
        height: moderateScale(width / 10),
        borderRadius: moderateScale(width / 20),
      
    
      },
      textStyle:{
          fontSize:textScale(12),
          color:colors?.introtextColor
      },
      userNameStyle:{
        fontSize:textScale(16),
        color:colors?.button
      },
      locationStyle:{
        fontSize:textScale(16),
        color:colors?.white
      }

})