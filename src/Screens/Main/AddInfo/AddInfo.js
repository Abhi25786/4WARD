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
import navigationStrings from '../../../navigation/navigationStrings';
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
  console.log(imageData, 'imageData>>>');
  console.log(imageData, 'mydatalist');
  const [state, setState] = useState({
    userImage: [imageData],
    imageType: 'null',
    uplodeImage: '',
    uploadUrl: '',
locationInput:'',
descriptionInput:''
  });
  const {userImage, uplodeImage, imageType, uploadUrl,locationInput,descriptionInput} = state;
  console.log(uplodeImage, 'muresdata');
  const updateState = data => setState(state => ({...state, ...data}));


 
  // -------------------------function for use camera gallery-----------------------------------//
  const onGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(reslt => {
 
      let imageData = reslt?.path
      imageUpload(imageData);
    }).catch(error=>{
      alert(error)
    })
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
  //-------------------------------image uplode api---------------------------------//
  const imageUpload = image => {
    setIsLoading(!isLoading);
    let apiData = new FormData();
    apiData.append('image', {
      uri: image,
      name: `${(Math.random() + 1).toString(36).substring(7)}.jpg`,
      type: 'image/jpeg',
    });
    let header = {'Content-Type': 'multipart/form-data'};
    actions
      .uplodeImage(apiData, header)
      .then(res => {
        console.log('single image api res_+++++', res);
        updateState({userImage: userImage.concat(res.data)});
        setIsLoading(isLoading);
        alert("success full")
      })
      .catch(error => {
        console.log(error, 'err');
        alert(error?.message);
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
//-------------------------------------Post data api -------------------------------------------//
  const onPostButton = () => {
    console.log(uploadUrl, 'upload url');
    setIsLoading(!isLoading);
    const data = new FormData();
    data.append('description', descriptionInput);
    data.append('latitude', '30.7333° N');
    data.append('longitude', '76.7794° E');
    data.append('location_name', locationInput);
    data.append('type', 1);
    {userImage.map((elem,i)=>{
data.append('images[]',elem)
    })}
   
    console.log(data);
    actions
      .postSendApi(data, {'Content-Type': 'multipart/form-data'})
      .then(res => {
        console.log(res, 'res from api');
        setIsLoading(isLoading);
        navigation.navigate(navigationStrings?.HOME)
      })
      .catch(error => {
        console.log(error, 'error from api');
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
            onchangetext={event => updateState({descriptionInput: event})}
            value={null}
          />
          <TextInputComponent
            viewstyle={{
              marginHorizontal: moderateScale(24),
              marginTop: moderateScaleVertical(16),
            }}
            onchangetext={event => updateState({locationInput: event})}
            placeholder={'Add location'}
            placeholderTextColor={colors?.introtextColor}
           
            value={locationInput}
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
