import {isArray, isEmpty, isObject} from 'lodash';
import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View, Text} from 'react-native';

import imagePath from '../constants/imagePath';
import en from '../constants/lang/en';
import colors from '../styles/colors';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
  width,
} from '../styles/responsiveSize';
import TextComponent from './TextComponent';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

import Carousel from 'react-native-snap-carousel';
import {Pagination} from 'react-native-snap-carousel';
import {Divider} from 'react-native-elements/dist/divider/Divider';

export default function CardCmponent({
  userProfile = '',
  menuButton = '',
  postImage = '',
  userName = '',
  PostDetail = '',
  location = '',
  likePress = '',
  commentPress='',
  data = {},
}) {
  const [snapState, setSnapState] = useState(0);
  return (
    <View style={styles.viewContainer}>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          paddingTop: moderateScale(10),
        }}>
        <View style={{flex: 0.2, alignItems: 'center'}}>
          <Image source={{uri: data.user.profile}} style={styles.userProfile} />
        </View>
        <View style={{flex: 0.6, justifyContent: 'center'}}>
          <View style={{flexDirection: 'row'}}>
            <TextComponent name={data.user.first_name} />

            <TextComponent name={data.user.last_name} />
          </View>
          <TextComponent name={data.location_name} styling={styles.textStyle} />
        </View>

        <Menu
          style={{flex: 0.2, justifyContent: 'center', alignItems: 'center'}}>
          <MenuTrigger>
            <Image source={imagePath.menuDots} style={styles.dotsMenu} />
          </MenuTrigger>
          <MenuOptions
            optionsContainerStyle={{
              backgroundColor: colors?.whiteSmokeColor,
              width: moderateScale(width / 4),
              alignItems: 'center',
              marginTop: moderateScale(25),
              borderRadius: moderateScale(5),
            }}>
            <MenuOption onSelect={() => alert(`Save`)}>
              <Text style={{color: 'black'}}>Save</Text>
            </MenuOption>

            <MenuOption onSelect={() => alert(`Hide`)}>
              <Text style={{color: 'black'}}>Hide</Text>
            </MenuOption>
          </MenuOptions>
        </Menu>
      </View>
    

      <View>
        {data?.images?.file &&
        isArray(data?.images?.file) &&
        data?.images?.file.length ? (
          <Carousel
            data={data?.images?.file}
            sliderWidth={moderateScale(width - 48)}
            itemWidth={moderateScale(width - 50)}
            scrollEnabled={true}
            onSnapToItem={index => setSnapState(index)}
            //  scrollEnabled={data?.image?.file?.length>0?true:false}

            renderItem={i => {
              if (
                i.item != '' &&
                i.item != null &&
                typeof i.item !== 'object'
              ) {
                return (
                  <TouchableOpacity activeOpacity={1} onPress={() => PostDetail(i.item)}>
                    <Image source={{uri: i.item}} style={styles.postStyle} />
                  </TouchableOpacity>
                );
              } else {
                return null;
              }
            }}
          />
        ) : null}
        {/*---------------------------------Pagination dots-----------------------------------*/}
        <Pagination
          dotsLength={
            !!(
              data?.images?.file &&
              isArray(data?.images?.file) &&
              data?.images?.file.length > 1
            )
              ? data?.images?.file.length
              : []
          }
          activeDotIndex={snapState}
          containerStyle={{paddingVertical: 0, marginTop: -10}}
          dotColor={colors?.button}
          dotStyle={{width: 10, height: 10, borderRadius: 10 / 2}}
          inactiveDotStyle={{width: 15, height: 15, borderRadius: 15 / 2}}
          inactiveDotColor={'black'}
          inactiveDotOpacity={0.4}
          activeOpacity={0.8}
          dotContainerStyle={{marginHorizontal: 2}}
        />
      </View>
      <View
        style={{
          paddingBottom: moderateScale(10),
          marginHorizontal: moderateScale(10),
        }}>
        <TextComponent name={data.description} />
        <TextComponent name={data.time_ago} styling={styles.textStyle} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',

          paddingBottom: moderateScale(10),
          marginHorizontal: moderateScale(10),
        }}>
          
        <View style={{alignItems: 'center', flexDirection: 'row'}}>
          <TextComponent name={en.COMMENTS} onPress={commentPress}/>
          <Text style={styles?.likeText}>{data.comment_count}</Text>
        </View>

        <View style={{justifyContent: 'center', flexDirection: 'row'}}>
          <TextComponent name={en.LIKES} onPress={likePress} />
          <Text style={styles?.likeText}>{data.like_count}</Text>
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
    borderRadius: 10,
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
    resizeMode: 'contain',
  },
  dotsMenu: {
    height: moderateScale(width / 20),
    width: moderateScale(width / 20),
    resizeMode: 'contain',
  },
  likeText: {
    fontSize: textScale(13),
    color: colors?.white,
  },
});
