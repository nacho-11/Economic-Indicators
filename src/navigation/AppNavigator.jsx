import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../views/Home'
import IndicatorValues from '../views/IndicatorValues/IndicatorValues'

const AppStack = createNativeStackNavigator()

function AppNavigator() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="IndicatorValues" component={IndicatorValues} />
    </AppStack.Navigator>
  )
}

export default AppNavigator
