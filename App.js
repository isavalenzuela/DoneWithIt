import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Toast, {DURATION} from 'react-native-easy-toast';
import PostRequestExample from './src/services/PostRequest';


export default function App() {

  return (
    <View style={styles.container}>
      <Text>Botón de Pánico</Text>
      <Button title={"Ayuda"} onPress={()=>{
          PostRequestExample
        }}/>
      <StatusBar style="auto" />
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
