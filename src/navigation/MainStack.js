import React from 'react'
import { Home } from '../Screens/Main'
import HomeStack from './HomeStack'
import navigationStrings from './navigationStrings'

function MainStack(Stack) {
  return (
<Stack.Screen
        name={navigationStrings.HOME}
        component={HomeStack}
        options={{headerShown: false}}
      />
  )
}

export default MainStack