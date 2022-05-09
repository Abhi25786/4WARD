import CameraRoll from '@react-native-community/cameraroll';
import React, { useEffect, useState } from 'react';
import {
  FlatList, Image, PermissionsAndroid,
  Platform, TouchableOpacity
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import HeadComponent from '../../../Components/HeadComponent';
import WrapperContainer from '../../../Components/WrapperContainer';
import imagePath from '../../../constants/imagePath';
import navigationStrings from '../../../navigation/navigationStrings';
import {
  moderateScaleVertical,
  width
} from '../../../styles/responsiveSize';
import { styles } from './style';


function Post({navigation}) {
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

  const editProfileData = async () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {

      console.log(image);

    });
  };
  const onImageClick = async (data) => {
  navigation.navigate(navigationStrings?.ADD_INFO,{data :data})
  };
  return (
    <WrapperContainer>
      <HeadComponent
        leftTexticon={true}
        lefttitle={'Select photos'}
        lefttextStyle={styles.headerText}
      />

      <FlatList
        data={state.photos}
        numColumns={3}
        contentContainerStyle={{
          paddingBottom: moderateScaleVertical(80),
        }}
        renderItem={(elem, i) => {
          return (
            <>
            <TouchableOpacity onPress={()=>onImageClick(elem)}>
              <Image
                key={i}
                style={{
                  width: width / 3,
                  height: width / 3,
                }}
                source={{uri: elem.item.node.image.uri}}
              />
            </TouchableOpacity>
            </>
          );
        }}
      />
      <TouchableOpacity activeOpacity={0.8} onPress={editProfileData}>
        <Image source={imagePath?.camera} style={styles?.cameraButton} />
      </TouchableOpacity>
    </WrapperContainer>
  );
}

export default Post;
