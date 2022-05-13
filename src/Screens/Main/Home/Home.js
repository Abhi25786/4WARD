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
  console.log(userData);
  const [isLoading, setLoding] = useState(false);
  const [refresh,setRefresh]=useState(false)
  const postDetailClick = data => {
    console.log(data?.item, 'mydata123');
    navigation.navigate(navigationStrings?.POST_DETAIL, {data: data?.item});
  };

  useEffect(() => {
    setLoding(!isLoading);
    let data = `?skip=${skipState}`;
    actions.getUplodePost(data).then(res => {
      console.log(res?.data, 'post upload');

      setUserData(res.data);
      setLoding(isLoading);
    });
  }, [skipState]);


  const onRefresh = () => {
    setRefresh(true);
    fetchData();
  };
  const fetchData = () => {
   setSkipState(skipState - 1)
    setRefresh(false);
  };
  return (
    <WrapperContainer isLoading={isLoading} withModal={isLoading}>
      <HeadComponent
        leftImage={true}
        leftimageIcon={imagePath.homeLogo}
        rightImage={true}
        rightimageIcon={imagePath.location}
        rightimagestyle={style.smallIcons}
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={userData}
        onEndReached={({distanceFromEnd}) => {
          setSkipState(skipState + 1);
        }}
        contentContainerStyle={{
          paddingBottom: moderateScale(70),
        }}
        refreshing={refresh}
        onRefresh={onRefresh}
        renderItem={(element, index) => {
          console.log(element.item.uri, 'element');
          return (
            <CardComponent
              data={element}
              // likePress={onPressLike}
              PostDetail={() => postDetailClick(element)}
            />
          );
        }}
      />
    </WrapperContainer>
  );
}
