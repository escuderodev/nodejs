import React from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { InputForm } from '../../components/InputText/InputForm';

export function FormDiscipline() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.title}>Faça Login</Text>
      <InputForm/>
    </View>
  );
}