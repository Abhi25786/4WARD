import { StyleSheet } from 'react-native'
import colors from '../../../styles/colors'
import { height, moderateScale, moderateScaleVertical, textScale, width } from '../../../styles/responsiveSize'
export const style=StyleSheet.create({
    
    introButton:{
        color:colors.white,
        fontSize:textScale(15),
        paddingTop:moderateScaleVertical(14),
      
    },activeDote:{
        width: moderateScale(width/20),
        height: moderateScale(width/70),
        right: moderateScale(110),
        backgroundColor:colors.redB
    },
    inactiveDote:{
        width: moderateScale(width/20),
        height: moderateScale(width/70),
        backgroundColor: colors.white,
        right: moderateScale(110),
    },
    introView:{
        alignSelf: 'center',
        height: height - height / 5,
        width: width - 60,
        margin: moderateScale(24),
        backgroundColor: '#4C4C4C',
        borderRadius: moderateScale(16),
    },introImage:{
        width: moderateScale(width / 1.5),
        height: moderateScale(width / 1.5),
        resizeMode: 'contain',
        marginTop: moderateScaleVertical(100),
    },imageView:{
        flex: 0.5,
        justifyContent: 'center',
        marginHorizontal: moderateScale(24),
    },textView:{
        textAlign: 'center',
        color: colors.white,
        fontSize: textScale(22),
    },
   
    introText:{
        textAlign: 'center',
        color: colors.introtextColor,
        fontSize: textScale(13),  paddingTop: moderateScaleVertical(8)
    },

})