import React from 'react';
import { ForgetPassword, Login, LoginNumber, LoginWithOtp, Otp, SetPassword, SignUp } from '../Screens/Auth';
import navigationStrings from './navigationStrings';


function AuthStack(Stack) {
  return (
    <>
   
      <Stack.Screen
        name={navigationStrings.LOGIN}
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.LOGIN_NUMBER}
        component={LoginNumber}
        options={{headerShown: false}}
      
      />
      <Stack.Screen
        name={navigationStrings.SIGN_UP}
        component={SignUp}
        options={{headerShown: false}}
      
      />
       <Stack.Screen
        name={navigationStrings.FORGET_PASSWORD}
        component={ForgetPassword}
        options={{headerShown: false}}
      
      />
       <Stack.Screen
        name={navigationStrings.OTP}
        component={Otp}
        options={{headerShown: false}}
      
      />
     
      <Stack.Screen
        name={navigationStrings.SET_PASSWORD}
        component={SetPassword}
        options={{headerShown: false}}
      
      />
    </>
  );
}

export default AuthStack;
