
import { StyleSheet } from 'react-native'
import { height, moderateScale, moderateScaleVertical, width } from '../../../styles/responsiveSize'
export const style= StyleSheet.create({
    smallIcons:{
        height: moderateScale(width / 20),
        width: moderateScale(width / 20),
        resizeMode: 'contain',
    },
    flateView:{
        alignSelf: 'center',
        height: height - height /2.5,
        width: width - 60,
        marginVertical:moderateScaleVertical(8),
        backgroundColor: '#4C4C4C',
        borderRadius: moderateScale(10),
    
    },
    userImage:{
        height:moderateScale(width/10),
        width:moderateScale(width/10),
        borderRadius:moderateScale(width/5),
        resizeMode: 'cover'
    }
})