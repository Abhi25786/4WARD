import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
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

export default function BottomSheetComponent({}) {
  const [data, setData] = useState();

  const [state, setState] = useState({
    comment: '',
    userData: [],
  });
  const {comment, userData} = state;
  console.log(userData);
  const updateState = data => setState(state => ({...state, ...data}));

  //-----------------------------COmment Buttton--------------------------------/
  const sendCommentButton = () => {
    let commentData = `?post_id=${data.value.item.id}&comment=${comment}`;
    actions
      .postComment(commentData)
      .then(res => {
        alert('Post Success');
      })
      .catch(err => {
        alert('Error');
      });
  };

  // //---------------------------------Page Refresh UseEffect -----------------------------------------/
  useEffect(() => {
    if (data) {
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
  }, [data]);

  return (
    <ActionSheet
      id="myId"
      onBeforeShow={data => {
        setData(data);
      }}
      containerStyle={{backgroundColor: colors?.theme}}>
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
              <Buttoncustam title={en?.SEND} onpress={sendCommentButton} />
            </View>
          </View>
         
            <View style={{height:height,paddingBottom:moderateScaleVertical(310)}}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {userData.map(i => {
                console.log(i.comment);
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      paddingTop: moderateScale(10),
                    }}>
                    <View style={{flex: 0.2, alignItems: 'center'}}>
                      <Image
                        source={{uri: i.user.profile}}
                        style={styles.userProfile}
                      />
                    </View>
                    <View style={{flex: 0.6, justifyContent: 'center'}}>
                      <View style={{flexDirection: 'row'}}>
                        <Text>{i.user.first_name}</Text>
                        <Text>{i.user.last_name}</Text>
                      </View>

                      <TextComponent
                        name={i.comment}
                        styling={styles.textStyle}
                      />
                    </View>
                  </View>
                );
              })}
          </ScrollView>
            </View>
          {/* <FlatList
       
        data={userData}
        renderItem={(element, index) => {
          return(
            // <View >

            // <Text style={{color:colors?.white,margin:moderateScaleVertical(10)}} key={index}>{element.item.comment}</Text>
            // </View>
            <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          paddingTop: moderateScale(10),
        }}>
        <View style={{flex: 0.2, alignItems: 'center'}}>
          <Image source={{uri: element.item.user.profile}} style={styles.userProfile} />
          
        </View>
        <View style={{flex: 0.6, justifyContent: 'center'}}>
        
          <View style={{flexDirection:'row'}}>
            <Text>{element.item.user.first_name}</Text>
            <Text>{element.item.user.last_name}</Text>
            </View>
          
          <TextComponent name={element.item.comment} styling={styles.textStyle} />
        </View>

      </View>
          )
        }}
      /> */}
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
