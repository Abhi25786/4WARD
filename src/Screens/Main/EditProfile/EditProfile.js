import React, {useEffect, useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {useSelector} from 'react-redux';
import Buttoncustam from '../../../Components/Button';
import HeadComponent from '../../../Components/HeadComponent';
import TextInputComponent from '../../../Components/TextInputComponent';
import WrapperContainer from '../../../Components/WrapperContainer';
import imagePath from '../../../constants/imagePath';
import en from '../../../constants/lang/en';
import actions from '../../../redux/actions';
import colors from '../../../styles/colors';
import {
  moderateScale,
  moderateScaleVertical,
  width,
} from '../../../styles/responsiveSize';
import {commonStyles} from '../../../styles/styles';
import {showError} from '../../../utils/helperFunctions';
import validator from '../../../utils/validations';
import {styles} from './style';

export default function EditProfile({navigation}) {
  //------------------------- userData  store------------------------//
  const userData = useSelector(state => state?.auth?.userData);
  console.log(userData, 'mudata>>>>>>>');

  //------------------------- useState for edit profile ------------------------//
  const [state, setState] = useState({
    firstName:'',
    lastName: '',
    email: '',
    profileImage: '',
    imageType: null,
  });
  const {firstName, lastName, email, profileImage, imageType} = state;
  const updateState = data => setState(state => ({...state, ...data}));


  useEffect(() => {
    if (userData) {
      setState({
        
        firstName: userData?.first_name,
        lastName: userData?.last_name,
        email: userData?.email,
        
      });
    }
  }, [userData]);
  //------------------------- image picker section ------------------------//
  const imageUplode = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image, 'my image>>>>>>');
      updateState({
        profileImage: image?.sourceURL || image?.path,
        imageType: image?.mime,
      });
    });
  };
    //-------------------------  validation section ------------------------//
    const isValidData = () => {
      const error = validator({firstName, lastName, email});
      if (error) {
        showError(error);
        return;
      }
      return true;
    };
  //-------------------------  edit button work ------------------------//
  const editProfileData = async () => {
    const checkValid = isValidData();
    if (!checkValid) {
      return;
    }
   
    let apiData = { 
      first_name:firstName,
      last_name:lastName,
      email:email
    }

    actions
      .editProfile(apiData)
      .then(res => {
        console.log('editProfile api res_+++++', res);
        alert(res?.message);
        navigation.goBack();
      })
      .catch(err => {
        console.log(err, 'err');
        alert(err?.message);
      });
  };

  return (
    <WrapperContainer>
      <HeadComponent
        leftimagestyle={styles.backButton}
        leftImage={true}
        leftimageIcon={imagePath.leftArrow}
        leftTexticon={true}
        lefttitle={en.EDIT_PROFILE}
        lefttextStyle={styles.headerText}
        onPress={() => navigation.goBack()}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        disableScrollViewPanResponder={false}>
        <View style={{marginHorizontal: moderateScale(24)}}>
          <View style={styles?.userImageContainer}>
            <Image
              source={
                profileImage ? {uri: profileImage} : imagePath?.postImage1
              }
              style={styles?.userImage}
            />
            <TouchableOpacity onPress={imageUplode}>
              <Image
                source={imagePath.edit}
                style={styles?.imagePickerButton}
              />
            </TouchableOpacity>
          </View>
          <View>
            <View style={commonStyles?.commonView}>
              <View style={{flex: 0.5, paddingRight: 15}}>
                <TextInputComponent
                  viewstyle={styles.inputView}
                  placeholder={en.FIRST_NAME}
                  placeholderTextColor={colors.introtextColor}
                  onchangetext={event => updateState({firstName: event})}
                  value={firstName}
                />
              </View>
              <View style={{flex: 0.5}}>
                <TextInputComponent
                  viewstyle={styles.inputView}
                  placeholder={en.LAST_NAME}
                  placeholderTextColor={colors.introtextColor}
                  onchangetext={event => updateState({lastName: event})}
                  value={lastName}
                />
              </View>
            </View>
            <TextInputComponent
              viewstyle={styles.inputView}
              placeholder={en.EMAIL}
              placeholderTextColor={colors.introtextColor}
              onchangetext={event => updateState({email: event})}
              value={email}
            />
          </View>
        </View>
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'android' ? 'height' : 'padding'}>
        <View>
          <Buttoncustam
            title={en.NEXT}
            stylbtn={styles.button}
            onpress={editProfileData}
          />
        </View>
      </KeyboardAvoidingView>
    </WrapperContainer>
  );
}
