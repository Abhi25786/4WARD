import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React from 'react';
import WrapperContainer from '../../../Components/WrapperContainer';
import DATA from '../../../constants/data/postData';
import {
  moderateScale,
  moderateScaleVertical,
} from '../../../styles/responsiveSize';
import TextComponent from '../../../Components/TextComponent';
import {styles} from './style';
import Divider from 'react-native-elements/dist/divider/Divider';

export default function Notification() {
  return (
    <WrapperContainer>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA}
        contentContainerStyle={{
          paddingBottom: moderateScale(70),
        }}
        renderItem={(element, index) => {
          return (
            <>
              <View
                style={{
                  flexDirection: 'row',
                  marginHorizontal: moderateScale(24),
                  paddingVertical: moderateScaleVertical(10),
                }}>
                <View style={{flex: 0.2}}>
                  <Image
                    source={element?.item?.uri}
                    style={styles.userProfile}
                  />
                </View>

                <View style={{flexDirection: 'row', flex: 0.8}}>
                  <View>
                    <TextComponent
                      name={element.item.name}
                      styling={styles.userNameStyle}
                    />
                    <TextComponent
                      name="20 min ago"
                      styling={styles.textStyle}
                    />
                  </View>
                  <TextComponent
                    name="Chandigarh"
                    styling={styles.locationStyle}
                  />
                </View>
              </View>
              <Divider style={{marginLeft: moderateScale(85)}} />
            </>
          );
        }}
      />
    </WrapperContainer>
  );
}
