import React from 'react'
import {SafeAreaView} from 'react-native'
import {Button, TextInputField} from './components'
import {useForm, Controller} from 'react-hook-form'
const LoginScreen = () => {
  const {
    control, 
    handleSubmit, 
    formState: {errors, isValid}
  } = useForm({mode: 'onBlur'})
  
  const onSubmit = data => console.log(data)
  
return(
    <SafeAreaView>
      <Controller        
        control={control}        
        name="email"        
        render={({field: {onChange, value, onBlur}}) => (            
          <TextInputField            
            iconName="person"            
            iconType="MaterialIcons"            
            placeholder="Ingresa tu email"            
            value={email}            
            onBlur={onBlur}            
            onChangeText={email => onChange(email)}          
          />        
        )}
        rules={{
          required: {
            value: true,
            message: 'Campo requerido'
          }
        }}
      />
      <Controller        
        control={control}        
        name="password"        
        render={({field: {onChange, value, onBlur}}) => (            
          <TextInputField            
            iconName="person"            
            iconType="MaterialIcons"            
            placeholder="Enter your name here"            
            value={password}            
            onBlur={onBlur}            
            onChangeText={password => onChange(password)}          
          />        
        )}
        rules={{
          required: {
            value: true,
            message: 'Field is required!'
          }
        }}
      />
      <Button title='Submit' onPress={handleSubmit(onSubmit)}/>
    </SafeAreaView>
  )
}