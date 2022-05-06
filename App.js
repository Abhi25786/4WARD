/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {GoogleSignin} from '@react-native-google-signin/google-signin';
import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import Routes from './src/navigation/Routes';
import actions from './src/redux/actions';
import store from './src/redux/store';
import {getItem} from './src/utils/utils';
import FlashMessage from "react-native-flash-message";
import { Otp } from './src/Screens/Auth';
import SplashScreen from 'react-native-splash-screen'

const App = () => {
  useEffect(() => {
    GoogleSignin.configure();
    getItem('introdata').then(res => {
      console.log('ugufyg',res)
      if(res != null){
      actions.intro(res);
      }
    });
    getItem('userLogin').then(res => {
      console.log('store data------------', res);
      if (!!res) {
        actions.saveUserData(res);
      }
    });

    setTimeout(() => {
      SplashScreen.hide()
    }, 500);
  }, []);

  return (
    <>
      <FlashMessage position="top" />
      <Provider store={store}>
        <Routes />
        
      </Provider>

    </>
  );
};

export default App;
