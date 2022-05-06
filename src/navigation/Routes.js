import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
const Stack = createStackNavigator();
import {useSelector} from 'react-redux';
import HomeStack from './HomeStack';
import {Introduction} from '../Screens/Auth';
import IntroStack from './IntroStack';

export default function Routes() {
  const userData = useSelector(state => state?.auth?.userData);
  const intro = useSelector(state => state?.intro?.introdata);

  console.log(intro, 'userdeta%%%%%%%');
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {intro
          ? IntroStack(Stack)
          : !!(userData || userData?.access_token)
          ? MainStack(Stack)
          : AuthStack(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
