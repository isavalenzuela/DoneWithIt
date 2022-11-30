import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import PostRequestExample from './src/services/PostRequest';
import Toast from 'react-native-toast-message';

export default function App() {

  return (
    <View style={styles.container}>
      <Text>Botón de Pánico</Text>
      <PostRequestExample/>
      <StatusBar style="auto" />
      <Toast />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
