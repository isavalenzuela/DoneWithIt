// Formik x React Native example
import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'
import postLoginData from '../services/ApiContainer'
import { Provider as PaperProvider } from 'react-native-paper'
import { Button, TextInput } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Ingresa un email válido')
    .required('Ingresa tu email'),
  password: yup
    .string()
    .min(8, ({ min }) => `La contraseña debe tener al menos ${min} caracteres`),
  // .required('Ingresa tu contraseña').matches(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
  //   "Debe contener 8 caracteres, una mayúscula, una minúscula, un número y un caracter especial"
  // ),
})

export const MyReactNativeForm = (props) => (
  <PaperProvider>
    <View style={styles.loginContainer}>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) =>
          postLoginData({ ...values })
            .then((resp) => {
              if (resp.token) {
                alert('login ok')
              }
            })
            .catch(function (error) {
              // handle error
              alert(error)
            })
        }
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
          touched,
        }) => (
          <View>
            <TextInput
              name="email"
              placeholder="Email"
              style={styles.textInput}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              keyboardType="email-address"
            />
            {errors.email && touched.email && (
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
            )}
            <TextInput
              name="password"
              placeholder="Contraseña"
              style={styles.textInput}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
            />
            {errors.password && touched.password && (
              <Text style={{ fontSize: 10, color: 'red' }}>
                {errors.password}
              </Text>
            )}
            <Button
              mode="contained"
              onPress={
                ({ handleSubmit }, () => navigation.navigate('NewsScreen'))
              }
              disabled={!isValid}
            >
              Ingresar
            </Button>
          </View>
        )}
      </Formik>
    </View>
  </PaperProvider>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginContainer: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 0,
    elevation: 10,
    backgroundColor: '#white',
  },
  textInput: {
    height: 40,
    width: 150,
    margin: 15,
    fontSize: 20,
    backgroundColor: '#fafdfa',
    borderColor: 'gray',
    borderRadius: 15,
  },
  formButton: {
    // backgroundColor: 'green',
    textDecorationColor: 'white',
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
})
