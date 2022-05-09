import CameraRoll from '@react-native-community/cameraroll';

import React, {useEffect, useState} from 'react';
import {
  PermissionsAndroid,
  Platform,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import HeadComponent from '../../../Components/HeadComponent';
import WrapperContainer from '../../../Components/WrapperContainer';
import {moderateScale, moderateScaleVertical, width} from '../../../styles/responsiveSize';
import { styles } from './style';
function Post() {
  const [state, setState] = useState({
    currentPageInfo: '',
    photos: '',
  });
  /********Check for android permission */
  const hasAndroidPermission = async () => {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(permission);
    return status === 'granted';
  };
  const imagesData = async () => {
    if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
      return;
    }
    CameraRoll.getPhotos({
      first: 20,
      assetType: 'Photos',
    })
      .then(r => {
        setState({photos: r.edges});
        console.log('images ', r);
      })
      .catch(error => {
        console.log('cameraroll error ', error);
      });
  };
  useEffect(() => {
    imagesData();
  }, []);
  console.log(state, '>>>>aaa');
  return (
    <WrapperContainer>
      <HeadComponent leftTexticon={true} lefttitle={"Select photos"} lefttextStyle={styles.headerText}/>
      <FlatList
        data={state.photos}
        
        numColumns={3}
        contentContainerStyle={{
          paddingBottom:moderateScaleVertical(80)
        }}
        renderItem={(elem, i) => {
          return (
            <>
              <Image
                key={i}
                style={{
                  width: width / 3,
                  height: width / 3,
                }}
                source={{uri: elem.item.node.image.uri}}
              />
            </>
          );
        }}
      />
     
    </WrapperContainer>
  );
}

export default Post;
