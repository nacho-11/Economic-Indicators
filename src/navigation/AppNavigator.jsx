import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../views/Home'
import IndicatorDetails from '../views/IndicatorDetails/IndicatorDetails'
import IndicatorValues from '../views/IndicatorValues/IndicatorValues'
import styles from './styles'

const AppStack = createNativeStackNavigator()

function AppNavigator() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Indicadores Económicos',
          headerTitleStyle: styles.mainTitle,
        }}
      />
      <AppStack.Screen
        name="IndicatorValues"
        component={IndicatorValues}
        options={({ route }) => ({
          title: `${route.params.title}: Valores`,
          headerTitleStyle: styles.title,
        })}
      />
      <AppStack.Screen
        name="IndicatorDetails"
        component={IndicatorDetails}
        options={({ route }) => ({
          title: `${route.params.title}: Detalle`,
          headerTitleStyle: styles.title,
        })}
      />
    </AppStack.Navigator>
  )
}

export default AppNavigator
