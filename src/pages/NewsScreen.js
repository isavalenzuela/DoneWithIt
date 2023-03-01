import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  View,
  Button,
  Image,
  Linking,
  Icon,
  ScrollView,
} from 'react-native'
import { Text, Card } from '@rneui/themed'

export function NewsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ScrollView>
        {/* change to flatlist when we access to news endpoint */}
        <Card>
          <Card.Image
            style={{ padding: 0 }}
            source={require('../../assets/firstnews.png')}
          />
          <Text style={{ marginBottom: 10, marginTop: 10, fontWeight: 'bold' }}>
            VERANO EN TU BARRIO: JUEGOS DE AGUA Y EL MEJOR STAND UP COMEDY
            LLEGAN A EL BOSQUE
          </Text>
          <Button
            icon={
              <Icon
                name="code"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
              />
            }
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="Ver en el navegador"
            onPress={() => {
              Linking.openURL('https://elboscapp.codingchickens.com/news/4')
            }}
          />
        </Card>
        <Card>
          <Card.Image
            style={{ padding: 0 }}
            source={require('../../assets/secondnews.png')}
          />
          <Text style={{ marginBottom: 10, marginTop: 10, fontWeight: 'bold' }}>
            BRILLANTE PRESENTACIÓN DE TALLERES “EL BOSQUE APRENDE A NADAR”
          </Text>
          <Button
            icon={
              <Icon
                name="code"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
              />
            }
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="Ver en el navegador"
            onPress={() => {
              Linking.openURL('https://elboscapp.codingchickens.com/news/5')
            }}
          />
        </Card>
        <Card>
          <Card.Image
            style={{ padding: 0 }}
            source={require('../../assets/thirdnews.png')}
          />
          <Text style={{ marginBottom: 10, marginTop: 10, fontWeight: 'bold' }}>
            ROMINA NÚÑEZ Y PANCHO MIRANDA LOS ARTISTAS BOSQUINOS QUE NOS
            REPRESENTARÁN EN EL FESTIVAL DEL HUASO DE OLMUÉ
          </Text>
          <Button
            icon={
              <Icon
                name="code"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
              />
            }
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="Ver en el navegador"
            onPress={() => {
              Linking.openURL('https://elboscapp.codingchickens.com/news/3')
            }}
          />
        </Card>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
})
