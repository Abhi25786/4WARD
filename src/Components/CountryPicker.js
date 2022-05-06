import React, {useState} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import CountryPicker, {Flag} from 'react-native-country-picker-modal';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import {
  moderateScale,
  moderateScaleVertical,
  width,
} from '../styles/responsiveSize';
function CountryCodePicker({
countryCode='',withCallingCodeButton='',
setCountryFlag,setCountryCode

}) {
  // const [countryCode, setCountryCode] = useState('91');
  // const [countryFlag, setCountryFlag] = useState('IN');

  const onSelect = country => {
    setCountryFlag(country.cca2);
    setCountryCode(country.callingCode[0]);
  };
  return (
    <>
      <View style={style.countryview}>
        <CountryPicker
          onSelect={onSelect}
          visible={false}
          countryCode={countryCode}
          withCallingCode={true}
          withCallingCodeButton={withCallingCodeButton}
          withEmoji={true}
          theme={{
            onBackgroundTextColor: colors?.white,
            backgroundColor: colors?.introBackground,
          }}
        />

        <Image
          source={imagePath.bottom_Arrow}
          style={{
            height: moderateScale(width / 24),
            width: moderateScale(width / 24),
            resizeMode: 'contain',
            marginLeft: moderateScaleVertical(5),
          }}
        />
      </View>
    </>
  );
}
const style = StyleSheet.create({
  countryview: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.introBackground,
    borderRadius: moderateScaleVertical(10),
    height: moderateScale(50),
    marginTop: moderateScaleVertical(32),
    flex: 0.35,
  
    paddingHorizontal: moderateScale(10),
    width: moderateScale(120),
  },
});

export default CountryCodePicker;
