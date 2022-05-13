import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import colors from '../styles/colors';

import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';
import Loader from './ProgressBarIndicater';

// import strings from '../constants/lang';


const WrapperContainer = ({
  children,
  bgColor = colors.theme,
  statusBarColor = colors.theme,
  barStyle = 'light-content',
  isLoading=false,
  withModal=''
}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: statusBarColor,
      }}>
      
      <StatusBar backgroundColor={statusBarColor} barStyle={barStyle} />
      <Loader isLoading={isLoading} withModal={withModal}  />
      <View style={{backgroundColor: bgColor, flex: 1}}>{children}</View>
    </SafeAreaView>
  );
};

export default React.memo(WrapperContainer);
