import { StyleSheet, Text, View } from 'react-native'
import { moderateScale, moderateScaleVertical, textScale, width } from '../../../styles/responsiveSize'


export const style = StyleSheet.create({
    textStyle:{
        fontSize:textScale(16), 
        
    },buttonView:{
        flexDirection: 'row',
        marginVertical:moderateScaleVertical(15),
        alignItems:"center"
    },
    smaillIcon:{
        height: moderateScale(width / 20),
        width: moderateScale(width/ 20),
        resizeMode: 'contain',
        alignSelf:"center"
    }

})