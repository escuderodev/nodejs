import React, { useState } from 'react';
import { Alert, TextInput, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

export function InputForm() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleButtonPress = () => {
    Alert.alert(`Usuário digitado: ${user}`);
    Alert.alert(`Senha digitada: ${password}`);
  };

  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
        keyboardType="email-address"
        onChangeText={setUser}
        value={user}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry={true}
        onChangeText={setPassword}
        value={password}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleButtonPress}
      >
        <Text style={styles.text}>Entrar</Text>
      </TouchableOpacity>
    </>
  );
}