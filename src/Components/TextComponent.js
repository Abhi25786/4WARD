import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../styles/colors';
import {moderateScale, textScale} from '../styles/responsiveSize';

function TextComponent({name = '', styling = '',  ...props}) {
  return (
    <TouchableOpacity  {...props}>
      <Text style={{...style.textStyle, ...styling}}> {name} </Text>
    </TouchableOpacity>
  );
}
const style = StyleSheet.create({
  textStyle: {
    fontSize: textScale(13),
    color: colors?.white,
  },
});

export default TextComponent;
