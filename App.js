import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Button, Image } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper'
import { withTheme } from 'react-native-paper'
import PostRequestExample from './src/services/ApiContainer'
import Toast from 'react-native-toast-message'
import { MyReactNativeForm } from './src/components/Form'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <PaperProvider>
          {/* theme={theme} */}
          <View style={styles.container}>
            <Image
              source={require('./assets/card_animation.gif')}
              style={{ width: 400, height: 400 }}
            />
            <Text>Iniciar Sesión</Text>
            <StatusBar style="auto" />
            <MyReactNativeForm />
          </View>
        </PaperProvider>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
