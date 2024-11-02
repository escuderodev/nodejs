import React from 'react';
import { View } from 'react-native';
import { Header } from '../components/Header/Header';
import { styles } from './styles';

export function screens() {
  return (
    <View style={styles.container}>
      <Header/>
    </View>
  );
}