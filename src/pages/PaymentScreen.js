import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Button, Image, Icon, Linking } from 'react-native'
import { Text, Card } from '@rneui/themed'

export function PaymentScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Card>
        <Card.Image
          style={{ padding: 0, height: 200, maxWidth: '100%' }}
          source={require('../../assets/maintenance.gif')}
        />
        <Button
          color="#73308a"
          icon={
            <Icon name="code" color="#ffffff" iconStyle={{ marginRight: 10 }} />
          }
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="Hablar con un operador"
          onPress={() => {
            Linking.openURL('whatsapp://app')
          }}
        />
      </Card>
    </View>
  )
}
