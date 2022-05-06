import { StyleSheet } from 'react-native'
import colors from '../../../styles/colors'
import { height, moderateScale, moderateScaleVertical } from '../../../styles/responsiveSize'
export const styles= StyleSheet.create({

    maincontainer:{
        height: height,
        marginHorizontal: moderateScaleVertical(24),
    },
    button:{
        marginHorizontal:moderateScaleVertical(24),
        marginBottom:moderateScale(33)
    },
    inputView:{
        marginTop: moderateScaleVertical(32)
    },
    country:{
        color:colors.white
    }
})