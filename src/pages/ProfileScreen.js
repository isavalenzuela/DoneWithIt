import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Button } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper'
import { Image, Text, Card } from '@rneui/themed'
import DataTablePayments from '../components/DataTable'

export function ProfileScreen({ navigation }) {
  return (
    <View
      style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}
    >
      <Card>
        <Card.Image
          source={require('../../assets/profile.png')}
          // containerStyle={styles.item}
        ></Card.Image>
        <Text containerStyle={styles.profileText}>Jaime Escudero Ramos</Text>
      </Card>
      <DataTablePayments></DataTablePayments>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    paddingTop: 50,
    padding: 24,
    width: 100,
    height: 100,
  },
  profileText: {
    marginTop: 20,
  },
})
