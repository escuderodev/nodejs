import { Text, View, TextInput, Button, Alert, StyleSheet, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Header } from "@/components/Shared/Header";

export default function Index() {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const handleInputChange = (inputText) => {
    setText(inputText)
  }

  const handleButtonPress = () => {
    Alert.alert(`Usuário digitado: ${user}`)
    Alert.alert(`Senha digitada: ${password}`)
  }

  return (
    <LinearGradient
      style={styles.container}
      colors={['#87CEEB', '#FFFFFF']}
    >
      <Header/>
      <View style={styles.content }>
        <Text>PrevTempo</Text>
        <Text>Digite seu usuário:</Text>
        <TextInput style={styles.input}
          onChangeText={(inputText) => { setUser(inputText) }}
          value={user}
        />
        <Text>Digite sua senha:</Text>
        <TextInput />
        <TextInput style={styles.input}
          onChangeText={(inputText) => { setPassword(inputText) }}
          value={password}
        />
        <StatusBar style="auto" />
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Text>Enviar</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
    borderRadius: 25,
  },
  button: {
    backgroundColor: 'inherit',
    borderColor: 'grey',
    borderWidth: 1,
    width: '50%',
    alignItems: 'center',
    padding: 5,
  }
})