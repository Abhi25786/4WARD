import React from 'react';
import navigationStrings from './navigationStrings';
import { createStackNavigator } from '@react-navigation/stack'
import Bottomnavigation from './Bottomnavigation';
import { ChangePassword, EditProfile, PostDetail } from '../Screens/Main';
function HomeStack() {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator screenOptions={{ headerShown:false }}>
    <Stack.Screen 
    name={navigationStrings.HOME}
    component={Bottomnavigation}
    />
     <Stack.Screen 
    name={navigationStrings.CHANGE_PASSWORD}
    component={ChangePassword}
    />
   <Stack.Screen 
    name={navigationStrings.EDIT_PROFILE}
    component={EditProfile}
    />
     <Stack.Screen 
    name={navigationStrings.POST_DETAIL}
    component={PostDetail}
    />
  </Stack.Navigator>
  );
}

export default HomeStack;
