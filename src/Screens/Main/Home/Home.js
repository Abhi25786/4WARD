import {array} from 'is_js';
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import CardComponent from '../../../Components/CardComponent';
import HeadComponent from '../../../Components/HeadComponent';
import WrapperContainer from '../../../Components/WrapperContainer';
import imagePath from '../../../constants/imagePath';
import navigationStrings from '../../../navigation/navigationStrings';
import actions from '../../../redux/actions';
import {moderateScale} from '../../../styles/responsiveSize';
import {style} from './style';

export default function Home({navigation}) {
  const [userData, setUserData] = useState([]);
  
  const [skipState, setSkipState] = useState(0);
  const [likeCount, setLikeCount] = useState(null);
    console.log(likeCount,"likeData");
  const [isLoading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const postDetailClick = (data,image) => {
    // console.log(image, 'mydata123');
    navigation.navigate(navigationStrings?.POST_DETAIL, {data: data?.item,image:image});
  };



  // if(userData?.){

  // }
//---------------------------------Page Refresh UseEffect -----------------------------------------/
  useEffect(() => {
    if (isLoading || refresh) {
      let data = `?skip=${skipState}`;
      actions.getUplodePost(data).then(res => {
        console.log(res?.data, 'post upload');
        
        setLoading(false);
        setRefresh(false);
        if(refresh){
          setUserData(res?.data)
        }else{
          setUserData([...userData, ...res?.data]);

        }
        
      });
    }
  }, [isLoading,refresh]);
//---------------------------------Page Refresh function -----------------------------------------/
  const onRefresh = () => {
    setSkipState(0);
    setRefresh(true);
    // fetchData();
  };
//---------------------------------Like Button Api -----------------------------------------//
  const onLikeButton = data => {
setLikeCount(data.item.like_status)


    let like = `?post_id=${data.item.id}&status=${likeCount}`;
    actions
      .postLikes(like)
      .then(res => {
        console.log(res);
       
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <WrapperContainer isLoading={isLoading} withModal={isLoading}>
      <HeadComponent
        leftImage={true}
        leftimageIcon={imagePath.homeLogo}
        rightImage={true}
        rightimageIcon={imagePath.location}
        rightimagestyle={style.smallIcons}
        onPress={onRefresh}
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={userData}
        onEndReached={({distanceFromEnd}) => {
          setSkipState(skipState + 8);
          setLoading(true);
        }}
        onEndReachedThreshold={0.1}
        contentContainerStyle={{
          paddingBottom: moderateScale(70),
        }}
        refreshing={refresh}
        onRefresh={onRefresh}

        renderItem={(element, index) => {
          
          return (
            <CardComponent
              data={element.item}
              key={element.item.id}
              likePress={() => onLikeButton(element)}
              PostDetail={(image) => postDetailClick(element,image)}
            />
          );
        }}
      />
    </WrapperContainer>
  );
}
