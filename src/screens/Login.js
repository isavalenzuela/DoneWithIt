 // Formik x React Native example
import React from 'react';
import { Button, TextInput, View, StyleSheet, Text } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup'
import postLoginData from '../services/ApiContainer';

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Ingresa un email válido")
    .required('Ingresa tu email'),
  password: yup
    .string()
    .min(8, ({ min }) => `La contraseña debe tener al menos ${min} caracteres`)
    // .required('Ingresa tu contraseña').matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    //   "Debe contener 8 caracteres, una mayúscula, una minúscula, un número y un caracter especial"
    // ),
})

export const MyReactNativeForm = props => (
  <View style={styles.loginContainer}>
    <Formik
      validationSchema={loginValidationSchema}
      initialValues={{ email: '' , password: ''}}
      onSubmit={values => postLoginData({...values}).then(resp => {
        if(resp.token) {
          alert('login ok')
        }
      }).catch(function (error) {
					// handle error
				alert(error)
		}
      )}
    >
      {({ handleChange,
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
            placeholder="email"
            style={styles.textInput}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            keyboardType="email-address"
          />
          {(errors.email && touched.email) &&
            <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
          }
          <TextInput
            name="password"
            placeholder="Password"
            style={styles.textInput}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            secureTextEntry
          />
          {(errors.password && touched.password) &&
          <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>
          }
          <Button onPress={handleSubmit} title="Ingresar" disabled={!isValid} />
        </View>
      )}
    </Formik>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginContainer: {
    width: '80%',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    elevation: 10,
    backgroundColor: '#white'
  },
  textInput: {
    height: 40,
    width: '100%',
    margin: 10,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
  },
})

