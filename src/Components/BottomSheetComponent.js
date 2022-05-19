import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import ActionSheet, {SheetManager} from 'react-native-actions-sheet';
import TextInputComponent from './TextInputComponent';
import colors from '../styles/colors';
import en from '../constants/lang/en';
import Buttoncustam from './Button';
import {
  height,
  moderateScale,
  moderateScaleVertical,
  textScale,
  width,
} from '../styles/responsiveSize';
import actions from '../redux/actions';
import TextComponent from './TextComponent';
import {FlatList, } from 'react-native-gesture-handler';
import {Divider} from 'react-native-elements/dist/divider/Divider';
import imagePath from '../constants/imagePath';

export default function BottomSheetComponent({}) {
  const [data, setData] = useState();

  const [state, setState] = useState({
    comment: '',
    userData: [],
    isLoding: false,
  });
  const {comment, userData, isLoding} = state;
  console.log(userData);
  const updateState = data => setState(state => ({...state, ...data}));

  //-----------------------------COmment Buttton--------------------------------/
  const sendCommentButton = data => {
    let commentData = `?post_id=${data.value.item.id}&comment=${comment}`;
    updateState({isLoding: true});
    actions
      .postComment(commentData)
      .then(res => {
        updateState({isLoding: false});
        // alert('Post Success');
      })
      .catch(err => {
        alert('Error');
      });
  };

  // //---------------------------------Page Refresh UseEffect -----------------------------------------/
  useEffect(() => {
    if (data || isLoding) {
      let idData = `?post_id=${data.value.item.id}`;
      actions
        .getComment(idData)
        .then(res => {
          console.log(res);
          updateState({userData: res.data});
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [data, isLoding]);
let onBackButton =()=>{
SheetManager.hide("myId")
updateState({userData:[]})
}
  return (
    <ActionSheet
      id="myId"
      closeOnTouchBackdrop={false}
      onBeforeShow={data => {
        setData(data);
      }}
      containerStyle={{backgroundColor: colors?.theme}}>
        <TouchableOpacity onPress={onBackButton} >

        <Image source={imagePath?.cross} style={{alignSelf:'center',marginVertical:moderateScaleVertical(10)}} />

        </TouchableOpacity>
      {data ? (
        <View style={{height: '70%', marginTop: moderateScaleVertical(10)}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: moderateScale(10),
            }}>
            <View style={{flex: 0.65}}>
              <TextInputComponent
                placeholder={en?.ENTER_COMMENT}
                placeholderTextColor={colors?.white}
                onchangetext={event => updateState({comment: event})}
                value={comment}
              />
            </View>
            <View style={{flex: 0.3}}>
              {isLoding ? (
                <ActivityIndicator size="large" />
              ) : (
                <Buttoncustam
                  title={en?.SEND}
                  onpress={() => sendCommentButton(data)}
                />
              )}
            </View>
          </View>

          <View style={{height: height}}>
            <FlatList
              data={userData}
              showsVerticalScrollIndicator={false}
              onEndReached={({distanceFromEnd}) => {
                // allComment(skipState + 15);
             
              }}
              onEndReachedThreshold={0.1}
              contentContainerStyle={{
                paddingBottom: moderateScaleVertical(350),
              }}
              renderItem={(element, index) => {
                return (
                  <>
                    <View
                      style={{
                        flexDirection: 'row',
                        paddingVertical: moderateScale(10),
                      }}
                      keyExtractor={element => element.item.id}>
                      <View style={{flex: 0.2, alignItems: 'center'}}>
                        <Image
                          source={{uri: element.item.user.profile}}
                          style={styles.userProfile}
                        />
                      </View>
                      <View style={{flex: 0.6, justifyContent: 'center'}}>
                        <View style={{flexDirection: 'row'}}>
                          <Text>{element.item.user.first_name}</Text>
                          <Text>{element.item.user.last_name}</Text>
                        </View>

                        <TextComponent
                          name={element.item.comment}
                          styling={styles.textStyle}
                        />
                      </View>
                    </View>
                    <Divider style={{marginHorizontal: moderateScale(24)}} />
                  </>
                );
              }}
            />
          </View>
        </View>
      ) : null}
    </ActionSheet>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: textScale(11),
    color: colors.introtextColor,
  },
  userProfile: {
    width: moderateScale(width / 10),
    height: moderateScale(width / 10),
    borderRadius: moderateScale(width / 20),

    marginHorizontal: moderateScale(8),
  },
});
