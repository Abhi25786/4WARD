import React from 'react'
import { Introduction } from '../Screens/Auth'
import navigationStrings from './navigationStrings'
function IntroStack(Stack) {
  return (
    <Stack.Screen
    name={navigationStrings.INTRODUCTION}
    component={Introduction}
    options={{headerShown: false}}
  />

  )
}

export default IntroStack