import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const handleInputChange = ( inputText ) => {
    setText(inputText)
  }

  const handleButtonPress = (  ) => {
    Alert.alert(`Usuário digitado: ${user}`)
    Alert.alert(`Senha digitada: ${password}`)
  }

  return (
    <View style={styles.container}>
      <Text>Clima Tempo</Text>
      <Text>Digite seu usuário:</Text>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10}}
        onChangeText={(inputText) => {setUser(inputText)}}
        value={user}
      />
      <Text>Digite sua senha:</Text>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10}}
        onChangeText={(inputText) => {setPassword(inputText)}}
        value={password}
      />
      <StatusBar style="auto" />
      <Button 
        title='Enviar'
        onPress={handleButtonPress}  
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
