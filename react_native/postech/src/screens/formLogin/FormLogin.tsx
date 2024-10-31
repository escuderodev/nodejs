import React from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { Logo } from '../../components/Logo/Logo';
import { InputForm } from '../../components/InputText/InputForm';

export function FormLogin() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Logo />
      <Text style={styles.title}>Faça Login</Text>
      <InputForm />
    </View>
  );
}