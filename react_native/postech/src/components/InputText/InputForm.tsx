import React from 'react';
import { TextInput } from 'react-native';
import { Button } from '../Button/Button'
import { styles } from './styles';

export function InputForm() {
  return (
    <>
      <TextInput
        style={styles.input}
        placeholder='Digite seu email'
        keyboardType='email-address'
      />
      <TextInput
        style={styles.input}
        placeholder='Digite sua senha'
        secureTextEntry={true}
      />
      <Button />
    </>
  );
}