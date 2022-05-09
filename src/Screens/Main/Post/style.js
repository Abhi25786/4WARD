import { StyleSheet, Text, View } from 'react-native'
import colors from '../../../styles/colors'
import { moderateScale, textScale, width } from '../../../styles/responsiveSize'


export  const styles = StyleSheet.create({
    headerText:{
    fontSize:textScale(16),
    color:colors?.white    
    },cameraButton:{
        position:"absolute",
        bottom:moderateScale(80),
        right:moderateScale(10),
        height:width/7,
        width:width/7,
        resizeMode:'contain'
    }
})