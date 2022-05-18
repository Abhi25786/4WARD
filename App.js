/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import React, { useEffect } from 'react';
import FlashMessage from "react-native-flash-message";
import { MenuProvider } from 'react-native-popup-menu';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import Routes from './src/navigation/Routes';
import actions from './src/redux/actions';
import store from './src/redux/store';
import { getItem } from './src/utils/utils';

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
      <Provider store={store}>
      <MenuProvider>
        <Routes />
        
      </MenuProvider>
      </Provider>
      <FlashMessage position="top" />

    </>
  );
};

export default App;
