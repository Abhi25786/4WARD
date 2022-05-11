import {error} from 'is_js';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-crop-picker';
import Buttoncustam from '../../../Components/Button';
import HeadComponent from '../../../Components/HeadComponent';
import TextInputComponent from '../../../Components/TextInputComponent';
import WrapperContainer from '../../../Components/WrapperContainer';
import {POST_SEND} from '../../../config/urls';
import imagePath from '../../../constants/imagePath';
import en from '../../../constants/lang/en';
import actions from '../../../redux/actions';
import colors from '../../../styles/colors';
import {
  moderateScale,
  moderateScaleVertical,
  width,
} from '../../../styles/responsiveSize';
import {apiPost} from '../../../utils/utils';
import {styles} from './styles';

export default function AddInfo({navigation, route}) {


  const [isLoading, setIsLoading] = useState(false);

  const imageData = route?.params?.imageData;

  console.log(imageData, 'mydatalist');
  const [state, setState] = useState({
    userImage: [],
    imageType: 'null',
    uplodeImage:'',
    uploadUrl:''
  });
  const {userImage, uplodeImage, imageType,uploadUrl} = state;
console.log(uplodeImage,"muresdata");
  const updateState = data => setState(state => ({...state, ...data}));

  //----------------------------useEffect-----------------------------------------//
  useEffect(() => {
    if (imageData) {
      imageUplode(imageData);
    }
  }, [])

  const imageUplode =(data)=>{
    console.log(data, 'data>>>');
    const form = new FormData();
    form.append('image', data);
    actions
      .uplodeImage(form, {'Content-Type': 'multipart/form-data'})
      .then(res => {
        console.log(res.data, 'imageUpload>>res');
updateState({uploadUrl:res?.data})
        updateState({
          userImage: [...userImage, res?.data],
        });
      })
      .catch(err => {
        alert(err?.message);
      });
  }
  
  // -------------------------function for use camera gallery-----------------------------------//
  const onGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(reslt => {
      // updateState({userImage: userImage.concat(reslt.path)});
     let imageData= {
        uri: reslt?.path,
        name: `${(Math.random() + 1).toString(36).substring(7)}.jpg`,
      }
      imageUplode(imageData)
    });
  };
  const onCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(reslt => {
      updateState({userImage: userImage.concat(reslt.path)});
      updateState({
        imageType: reslt?.mime,
      });
      console.log(reslt);
    });
  };
  //------------------------------removeImages for list-----------------------------------------//
  const removeImage = index => {
    console.log(index, 'myIndex');

    let newArr = [...userImage];

    newArr.splice(index, 1);

    updateState({userImage: newArr});
  };

  //--------------------------------camera & gallery button-----------------------------------//
  const createTwoButtonAlert = () => {
    if (userImage.length >= 3) {
      alert('Only for images uplode');
    } else {
      Alert.alert('Choose', 'Image for uplode', [
        {
          text: 'Camera',
          onPress: onCamera,
          style: 'cancel',
        },
        {text: 'Gallery', onPress: onGallery},
        {text: 'Cancle', onPress: () => console.log('OK Pressed')},
      ]);
    }
  };

  const onPostButton = () => {
    const data = new FormData();
    data.append('description', 'abhishek');
    data.append('latitude', '30.7333° N');
    data.append('longitude', '76.7794° E');
    data.append('location_name', 'Chandigarh');
    data.append('type', 1);
    data.append('images[]', {
      uri: uploadUrl,
      name: `${(Math.random() + 1).toString(36).substring(7)}.jpg`,
      type: imageType,
    });
console.log(data);
    actions
      .postSendApi(data, {'Content-Type': 'multipart/form-data'})
      .then(res => {
console.log(res);
setIsLoading(!isLoading);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <WrapperContainer>
      <HeadComponent
        leftImage={true}
        leftimageIcon={imagePath.leftArrow}
        leftTexticon={true}
        lefttitle={en?.ADD_INFO}
        lefttextStyle={styles.textIcon}
        leftimagestyle={styles.backButton}
        onPress={() => navigation.goBack()}
      />
      {isLoading && (
        <ActivityIndicator
          size="small"
          color={colors?.button}
          style={{position: 'absolute', right: '50%', top: '50%'}}
        />
      )}
      <ScrollView>
        <View>
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            {userImage.map((elem, i) => {
              return (
                <View key={i}>
                  <Image source={{uri: elem}} style={styles?.imageStyle} />
                  <TouchableOpacity
                    style={{position: 'absolute', right: 0, top: 1}}
                    onPress={() => removeImage(i)}>
                    <Image
                      source={imagePath?.cross}
                      style={{
                        height: width / 19,
                        width: width / 19,
                        resizeMode: 'contain',
                      }}
                    />
                  </TouchableOpacity>
                </View>
              );
            })}
            <TouchableOpacity onPress={createTwoButtonAlert}>
              <View style={styles?.imageStyle}>
                <Image
                  source={imagePath?.plus}
                  style={{height: 20, width: 20}}
                />
              </View>
            </TouchableOpacity>
          </View>
          <TextInputComponent
            viewstyle={styles?.textInputStyle}
            placeholder={'Write description here..'}
            placeholderTextColor={colors?.introtextColor}
            onchangetext={null}
            value={null}
          />
          <TextInputComponent
            viewstyle={{
              marginHorizontal: moderateScale(24),
              marginTop: moderateScaleVertical(16),
            }}
            placeholder={'Add location'}
            placeholderTextColor={colors?.introtextColor}
            onchangetext={null}
            value={null}
          />
        </View>
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'android' ? 'height' : 'padding'}>
        <View>
          <Buttoncustam
            title={en.NEXT}
            stylbtn={styles.button}
            onpress={onPostButton}
          />
        </View>
      </KeyboardAvoidingView>
    </WrapperContainer>
  );
}
