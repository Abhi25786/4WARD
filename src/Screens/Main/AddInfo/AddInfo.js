import React, {useState} from 'react';
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-crop-picker';
import Buttoncustam from '../../../Components/Button';
import HeadComponent from '../../../Components/HeadComponent';
import TextInputComponent from '../../../Components/TextInputComponent';
import WrapperContainer from '../../../Components/WrapperContainer';
import imagePath from '../../../constants/imagePath';
import en from '../../../constants/lang/en';
import colors from '../../../styles/colors';
import {
  moderateScale,
  moderateScaleVertical,
} from '../../../styles/responsiveSize';
import {styles} from './styles';

export default function AddInfo({navigation, route}) {
  const [state, setState] = useState({
    userImage: [],
  });
  const {userImage} = state;

  const updateState = data => setState(state => ({...state, ...data}));

  console.log(userImage, 'my image>>>>>>');
  const allData = route?.params?.data;
  console.log(allData, 'mydatalist');
  const onGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(reslt => {
      updateState({userImage: userImage.concat(reslt.path)});
    });
  };

  const removeImage = index => {
    console.log(index, 'myIndex');

    let newArr = [...userImage];

    newArr.splice(index, 1);

    updateState({userImage: newArr});
  };
  const createTwoButtonAlert = () =>
    Alert.alert('Choose', 'Image for uplode', [
      {
        text: 'Camera',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Gallery', onPress: onGallery, style: styles?.alertStyle},
      {text: 'Cancle', onPress: () => console.log('OK Pressed')},
    ]);
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

      <ScrollView>
        <View>
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            <View>
              {allData ? (
                <Image
                  source={{uri: allData.item.node.image.uri}}
                  style={styles?.imageStyle}
                />
              ) : (
                <Image
                  source={imagePath.into_Image}
                  style={styles?.imageStyle}
                />
              )}
            </View>
            {userImage.map((elem, i) => {
              return (
                <View key={i}>
                  <Image source={{uri: elem}} style={styles?.imageStyle} />
                  <TouchableOpacity
                    style={{position: 'absolute', right: 0, top: 2}}
                    onPress={() => removeImage(i)}>
                    <Image source={imagePath?.cross} />
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
            multiline={true}
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
            onpress={null}
          />
        </View>
      </KeyboardAvoidingView>
    </WrapperContainer>
  );
}
