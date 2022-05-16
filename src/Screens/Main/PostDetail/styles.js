import { StyleSheet, Text, View } from 'react-native'
import colors from '../../../styles/colors'
import { moderateScale, moderateScaleVertical, textScale, width } from '../../../styles/responsiveSize'


export const styles = StyleSheet.create({
    userProfile:{
        width: moderateScale(width / 10),
        height: moderateScale(width / 10),
        borderRadius: moderateScale(width / 20),
      
        marginHorizontal: moderateScale(8),
    },
    textStyle: {
        fontSize: textScale(11),
        color: colors.introtextColor,
      },
      postStyle: {
        width: moderateScale(width - 68),
        height: moderateScale(width - 40),
        marginVertical: moderateScaleVertical(16),
        alignSelf: 'center',
        resizeMode:'contain',
      },
      dotsMenu: {
        height: moderateScale(width / 20),
        width: moderateScale(width / 20),
        resizeMode: 'contain',
      },
      buttonStyle:{
        
         marginHorizontal:moderateScale(24),
        
      }
      ,headContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: moderateScale(20),
      },
      crossStyle:{
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
      }
})