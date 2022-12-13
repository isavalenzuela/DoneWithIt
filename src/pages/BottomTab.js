import * as React from 'react'
import { Text, View, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NewsScreen } from './NewsScreen'
import { PaymentScreen } from './PaymentScreen'
import { ProfileScreen } from './ProfileScreen'
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper'

const Tab = createBottomTabNavigator()

export const BottomTab = () => {
  return (
    <PaperProvider theme={theme}>
      <Tab.Navigator>
        <Tab.Screen
          name="Noticias"
          component={NewsScreen}
          options={{
            title: 'Noticias',
            tabBarIcon: ({ size, focused, color }) => {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={require('../../assets/newspaper-variant-green.png')}
                />
              )
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          }}
        />
        <Tab.Screen
          name="Pagos"
          component={PaymentScreen}
          options={{
            title: 'Pagos',
            tabBarIcon: ({ size, focused, color }) => {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={require('../../assets/currency-usd-green.png')}
                />
              )
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          }}
        />
        <Tab.Screen
          name="Perfil"
          component={ProfileScreen}
          options={{
            title: 'Perfil',
            tabBarIcon: ({ size, focused, color }) => {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={require('../../assets/account-green.png')}
                />
              )
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          }}
        />
      </Tab.Navigator>
    </PaperProvider>
  )
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'green',
    secondary: 'yellow',
  },
}
