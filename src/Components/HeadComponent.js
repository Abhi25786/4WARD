import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../styles/colors';
// // import fontFamily from '../styles/fontfamily';
// import fontfamily from '../styles/fontFamily';
import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';

function HeadComponent({
  leftImage = false,
  leftTexticon = false,
  centerImage = false,
  centerTexticon = false,
  rightImage = false,
  rightTexticon = false,
  lefttitle = '',
  leftimageIcon = '',
  leftimagestyle = '',
  lefttextStyle = '',

  centertitle = '',
  centerimageIcon = '',
  centerimagestyle = '',
  centertextStyle = '',
  righttitle = '',
  rightimageIcon = '',
  rightimagestyle = '',
  righttextStyle = '',
  rightPress='',
  viewstyle = '',
  ...props
}) {
  return (
    <View style={styles.viewcss}>
      <TouchableOpacity activeOpacity={0.9} {...props} style={{flex: 0.5, flexDirection: 'row'}}>
         <View style={{ flexDirection: 'row'}}>
        {leftImage && (
         
            <Image source={leftimageIcon} style={leftimagestyle} />
      
        )}
        {leftTexticon && (
        
            <Text style={lefttextStyle}>{lefttitle}</Text>
        
        )}
      </View>
      </TouchableOpacity>
      <View style={{flex: 0.25, flexDirection: 'row'}}>
        {centerImage && (
          <Image source={centerimageIcon} style={centerimagestyle} />
        )}
        {centerTexticon && (
          <TouchableOpacity activeOpacity={1} {...props}>
            <Text style={centertextStyle}>{centertitle}</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={{flex: 0.25, flexDirection: 'row',justifyContent:"flex-end",alignItems:"center"}}>
        {rightImage && (
          <Image source={rightimageIcon} style={rightimagestyle} />
        )}
        {rightTexticon && (
          <TouchableOpacity activeOpacity={1} {...props} onPress={rightPress}>
            <Text style={righttextStyle}>{righttitle}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  viewcss: {
    flexDirection: 'row',
    marginVertical:moderateScale(24),
    marginHorizontal:moderateScale(24),
    justifyContent:"center",
  },
 

});
export default HeadComponent;
