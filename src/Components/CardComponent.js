import {StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import React from 'react';

import {
  height,
  moderateScale,
  moderateScaleVertical,
  textScale,
  width,
} from '../styles/responsiveSize';
import colors from '../styles/colors';
import TextComponent from './TextComponent';
import imagePath from '../constants/imagePath';
import en from '../constants/lang/en';
import PostDetail from '../Screens/Main/PostDetail/PostDetail';

export default function CardCmponent({
  userProfile = '',
  menuButton = '',
  postImage = '',
  userName = '',
  PostDetail='',
  location=''
}) {
  return (
    <View style={styles.viewContainer}>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          paddingTop: moderateScale(10),
        }}>
        <View style={{flex: 0.2, alignItems: 'center'}}>
          <Image source={userProfile} style={styles.userProfile} />
        </View>
        <View style={{flex: 0.6, justifyContent: 'center'}}>
          <TextComponent name={userName} />
          <TextComponent name={location} styling={styles.textStyle} />
        </View>
        <View
          style={{
            flex: 0.2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={imagePath.menuDots} style={styles.dotsMenu} />
        </View>
      </View>
      <TouchableOpacity activeOpacity={0.9} onPress={PostDetail}>

      <View>
        <Image source={postImage} style={styles.postStyle} />
      </View>
      </TouchableOpacity>
      <View
        style={{
          paddingBottom: moderateScale(10),
          marginHorizontal: moderateScale(10),
        }}>
        <TextComponent name="Enter Comments" />
        <TextComponent name="Enter time" styling={styles.textStyle} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',

          paddingBottom: moderateScale(10),
          marginHorizontal: moderateScale(10),
        }}>
        <View style={{alignItems: 'center'}}>
          <TextComponent name={en.COMMENTS} />
        </View>
        <View style={{justifyContent: 'center'}}>
          <TextComponent name={en.LIKES} />
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image source={imagePath.rightArrow} style={styles.dotsMenu} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: colors.introBackground,
    width: moderateScale(width - 48),
    alignSelf: 'center',
    marginVertical: moderateScale(10),
    borderRadius:10
  },
  userProfile: {
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
    
  },
  dotsMenu: {
    height: moderateScale(width / 20),
    width: moderateScale(width / 20),
    resizeMode: 'contain',
  },
});
