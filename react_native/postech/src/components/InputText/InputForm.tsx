import React from 'react';
import { Text, TextInput } from 'react-native';
import { styles } from './styles';

export function InputForm() {
  return (
    <>
      <TextInput
        style={styles.input}
        placeholder='Digite seu email'
      />
      <TextInput
        style={styles.input}
        placeholder='Digite sua senha'
        secureTextEntry={true}
      />
    </>
  );
}