import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Toast, {DURATION} from 'react-native-easy-toast';


export default function App() {

  return (
    <View style={styles.container}>
      <Text>ola ke ase</Text>
      <Button title={"Ayuda"} onPress={()=>{
            this.toast.show('Tu mensaje fue enviado 🚨',2000);
        }}/>
      <StatusBar style="auto" />
      <Toast ref={(toast) => this.toast = toast}
        position='top'
      />
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
