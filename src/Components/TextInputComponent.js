import React from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import colors from '../styles/colors';
// import fontfamily from '../styles/fontFamily';
import {moderateScale, moderateScaleVertical, textScale} from '../styles/responsiveSize';

const TextInputComponent = ({
  image = '',
  img = '',
  placeholder = '',
  placeholderTextColor = '',
  leftImage = false,
  rightImage = false,
  onchangetext = '',
  keyboardtype,
  value = '',
  viewstyle,
  rightText = false,
  longText=false,
  righttext = '',
  showpass,
  inputStyle = '',
  textcolour = '',
  inputViewstyle='',

  ...props
}) => {
  return (
    <View style={{...styles.viewcss, ...viewstyle}}>
      {leftImage && (
        <View style={{flex: 0.15}}>
          <Image source={image} style={styles.image} />
        </View>
      )}

      <View style={{...styles.inputView,...inputViewstyle}}>
        <TextInput
          {...props}
// multiline={true}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          style={{...styles.inputtext, ...inputStyle}}
          keyboardType={keyboardtype}
          value={value}
          onChangeText={onchangetext}
          keyboardAppearance={'dark'}
          keybo
        />
      </View>
      {rightText && (
        <View style={{flex: 0.2}}>
          <TouchableOpacity activeOpacity={1} onPress={showpass}>
            <Text style={{...styles.showcolour, ...textcolour}}>
              {righttext}
            </Text>
          </TouchableOpacity>
        </View>
      )}
      {longText && (
        <View style={{flex: 0.86}}>
          <TouchableOpacity activeOpacity={1} onPress={showpass}>
            <Text style={{...styles.showcolour, ...textcolour}}>
              {righttext}
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {rightImage && (
        <View style={{flex: 0.5}}>
          <Image source={img} style={styles.image} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: moderateScale(30),
    width: moderateScale(30),
    marginHorizontal: moderateScale(5),
  },
  viewcss: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.introBackground,
    borderRadius: moderateScale(10),
    height: moderateScale(50),
    paddingHorizontal: moderateScaleVertical(8),
  },
  inputtext: {
    paddingVertical: moderateScaleVertical(10),

    color: colors.white,
    flex: 1,

    // fontFamily: fontfamily.Mulish_Medium,
  },
  showcolour: {
    color: colors.introtextColor,
    fontSize:textScale(12)
  },
  inputView: {
    flex: 1,
    marginLeft: moderateScale(5),
  },
});

export default TextInputComponent;
