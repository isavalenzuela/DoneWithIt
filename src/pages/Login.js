import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Image } from 'react-native'
import { Text } from 'react-native-paper'
import { MyReactNativeForm } from '../components/Form'

export default function Login() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/escudoelbosque.png')}
        style={{ width: 200, height: '20%', marginTop: 100 }}
      />
      <Text variant="headlineMedium">Iniciar Sesión</Text>
      <StatusBar style="auto" />
      <MyReactNativeForm />
    </View>
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
