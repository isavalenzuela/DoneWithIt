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
          <Text style={{ marginBottom: 10, marginTop: 10 }}>
            Jaime Escudero Ramos, alcalde de Pirque: "La instalación de la
            oficina ChileAtiende es un tremendo logro para nuestra comunidad"
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
              Linking.openURL(
                'https://www.pirque.cl/jaime-escudero-ramos-alcalde-de-pirque-la-instalacion-de-la-oficina-chileatiende-es-un-tremendo-logro-para-nuestra-comunidad/',
              )
            }}
          />
        </Card>
        <Card>
          <Card.Image
            style={{ padding: 0 }}
            source={require('../../assets/secondnews.png')}
          />
          <Text style={{ marginBottom: 10, marginTop: 10 }}>
            Torneo de Robótica First Lego League 2022 Escuela Santos Rubio
            premiada con la Copa “Estrella Ascendente
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
              Linking.openURL(
                'https://www.pirque.cl/torneo-de-robotica-first-lego-league-2022-escuela-santos-rubio-premiada-con-la-copa-estrella-ascendente/',
              )
            }}
          />
        </Card>
        <Card>
          <Card.Image
            style={{ padding: 0 }}
            source={require('../../assets/thirdnews.png')}
          />
          <Text style={{ marginBottom: 10, marginTop: 10 }}>
            Una gran celebración para las personas mayores de Pirque
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
              Linking.openURL(
                'https://www.pirque.cl/una-gran-celebracion-para-las-personas-mayores-de-pirque/',
              )
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
});