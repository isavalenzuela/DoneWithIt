import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Alert } from 'react-native'
import { Button } from 'react-native-paper'
import Toast from 'react-native-toast-message'

const PostRequestExample = () => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ postName: 'React updates ' }),
  }

  const postExample = async () => {
    try {
      await fetch('https://reqres.in/api/posts', requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
        })
    } catch (error) {
      console.error(error)
    }
  }

  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'OK',
      text2: 'Tu alerta ha sido enviada 🚨',
      visibilityTime: 2000,
    })
  }

  return (
    <View style={styles.btn}>
      <Button
        title="Show Toast"
        mode="contained"
        onPress={() => {
          showToast(), postExample()
        }}
      >
        AYUDA
      </Button>
    </View>
  )
}

export default PostRequestExample

const styles = StyleSheet.create({
  btn: {
    marginTop: 60,
    marginLeft: 30,
    marginRight: 30,
  },
})
