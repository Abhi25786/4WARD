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
  console.log(userData,"mydataImageas");
  const [skipState, setSkipState] = useState(0);
  const [isLoading, setLoding] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const postDetailClick = (data,image) => {
    // console.log(image, 'mydata123');
    navigation.navigate(navigationStrings?.POST_DETAIL, {data: data?.item,image:image});
  };

  useEffect(() => {
    if (isLoading) {
      setLoding(true);
      let data = `?skip=${skipState}`;
      actions.getUplodePost(data).then(res => {
        console.log(res?.data, 'post upload');
        
        setLoding(false);
        setUserData([...userData,...res?.data]);
      });
    }
  }, [isLoading]);

  const onRefresh = () => {
    setRefresh(true);
    fetchData();
  };
  const fetchData = () => {
    setSkipState(0);
    setRefresh(false);
  };
  const onLikeButton = data => {
    // console.log(data,"data<<<<<");

    let like = `?post_id=${data.item.id}&status=${data.item.like_status}`;
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
        // leftPress={refreshAllPage}
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={userData}
        onEndReached={({distanceFromEnd}) => {
          setSkipState(skipState + 8);
          setLoding(true);
        }}
        onEndReachedThreshold={0.1}
        contentContainerStyle={{
          paddingBottom: moderateScale(70),
        }}
        refreshing={refresh}
        onRefresh={onRefresh}

        renderItem={(element, index) => {
          // console.log(element, 'element');
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
