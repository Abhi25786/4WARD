import { StyleSheet, Text, View } from 'react-native'
import colors from '../../../styles/colors'
import { moderateScale, moderateScaleVertical, textScale, width } from '../../../styles/responsiveSize'


export const styles = StyleSheet.create({
maincontainer:{
marginHorizontal:moderateScale(24),flex:1

},
    backButton: {
        height: moderateScale(width / 20),
        width: moderateScale(width / 20),
        resizeMode: 'contain',
     
      },
    headerText:{
        fontSize:textScale(16),
        marginHorizontal:moderateScale(9),
        color:colors?.white,
        justifyContent:"center"
    }
    ,
    inputView: {
        marginTop: moderateScaleVertical(32),
      },
      button:{
        marginHorizontal:moderateScale(24),
        marginBottom:moderateScale(50),
       
      
    },
})