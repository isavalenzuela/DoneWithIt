import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Button, Image } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper'

export default function NewsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>News</Text>
    </View>
  )
}
