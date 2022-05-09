import { StyleSheet, Text, View } from 'react-native'
import colors from '../../../styles/colors'
import { textScale } from '../../../styles/responsiveSize'


export  const styles = StyleSheet.create({
    headerText:{
    fontSize:textScale(16),
    color:colors?.white    
    }
})