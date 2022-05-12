import { error } from 'is_js';
import React, { useEffect, useState } from 'react';
import {FlatList} from 'react-native';
import CardComponent from '../../../Components/CardComponent';
import HeadComponent from '../../../Components/HeadComponent';
import WrapperContainer from '../../../Components/WrapperContainer';
import { POSTS } from '../../../config/urls';
import DATA from '../../../constants/data/postData';
import imagePath from '../../../constants/imagePath';
import navigationStrings from '../../../navigation/navigationStrings';
import {moderateScale} from '../../../styles/responsiveSize';
import { apiGet } from '../../../utils/utils';
import {style} from './style';
export default function Home({navigation}) {

  const [userData,setUserData]=useState([])

  const postDetailClick = (data) =>{
    console.log(data?.item,"mydata123")
    navigation.navigate(navigationStrings?.POST_DETAIL,{data : data?.item,})
  }

  useEffect(()=>{
apiGet(POSTS).then(res =>{
console.log(res?.data);
setUserData(res?.data)
}).catch(error =>{
console.log(error);
})
  },[])
  return (
    <WrapperContainer>
      <HeadComponent
        leftImage={true}
        leftimageIcon={imagePath.homeLogo}
        rightImage={true}
        rightimageIcon={imagePath.location}
        rightimagestyle={style.smallIcons}
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        scrol
        data={userData}
        contentContainerStyle={{
          paddingBottom: moderateScale(70),
        }}
        renderItem={(element, index) => {
          console.log(element.item.uri,'element');
          return (
            <CardComponent
              menuButton={imagePath.menuDots}
              userProfile={{uri : element.item.user.profile}}
              userName={element.item.user.first_name}
              postImage={element.item.images.file}
              location={element.item.location_name}
              PostDetail={()=>postDetailClick(element)}
            />
          );
        }}
      />
    </WrapperContainer>
  );
}
