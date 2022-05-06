import React from 'react';
import {FlatList} from 'react-native';
import CardComponent from '../../../Components/CardComponent';
import HeadComponent from '../../../Components/HeadComponent';
import WrapperContainer from '../../../Components/WrapperContainer';
import DATA from '../../../constants/data/postData';
import imagePath from '../../../constants/imagePath';
import navigationStrings from '../../../navigation/navigationStrings';
import {moderateScale} from '../../../styles/responsiveSize';
import {style} from './style';
export default function Home({navigation}) {

  const postDetailClick = (data) =>{
    console.log(data?.item,"mydata123")
    navigation.navigate(navigationStrings?.POST_DETAIL,{data : data?.item,})
  }
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
        data={DATA}
        contentContainerStyle={{
          paddingBottom: moderateScale(70),
        }}
        renderItem={(element, index) => {
          return (
            <CardComponent
              menuButton={imagePath.menuDots}
              userProfile={element.item.uri}
              userName={element.item.name}
              postImage={element.item.uri}
              PostDetail={()=>postDetailClick(element)}
            />
          );
        }}
      />
    </WrapperContainer>
  );
}
