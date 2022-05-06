import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Image } from 'react-native';
import imagePath from '../constants/imagePath';
import { Home, Notification, Post, Profile, Search } from '../Screens/Main';

import colors from '../styles/colors';
import { commonStyles } from '../styles/styles';
import navigationStrings from './navigationStrings';
const Tab = createBottomTabNavigator();


function Bottomnavigation() {
  return (
  
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: commonStyles.tabBarStyle,
        }}>
        <Tab.Screen
          name={navigationStrings.HOME}
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={imagePath?.home}
                style={{
                  ...commonStyles.tabBariconStyle,
                  tintColor: focused ? colors.button : colors.white,
                }}
              />
            ),
          }}
        />

        <Tab.Screen
          name={navigationStrings.SEARCH}
          component={Search}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={imagePath?.search}
                style={{
                  ...commonStyles.tabBariconStyle,
                  tintColor: focused ? colors.button : colors.white,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name={navigationStrings.POST}
          component={Post}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={imagePath?.add}
                style={{
                  ...commonStyles.tabBariconStyle,
                  tintColor: focused ? colors.button : colors.white,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name={navigationStrings.NOTIFICATION}
          component={Notification}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={imagePath?.notification}
                style={{
                  ...commonStyles.tabBariconStyle,
                  tintColor: focused ? colors.button : colors.white,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name={navigationStrings.PROFILE}
          component={Profile}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={imagePath?.user}
                style={{
                  ...commonStyles.tabBariconStyle,
                  tintColor: focused ? colors.button : colors.white,
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>
  
  );
}

export default Bottomnavigation;
