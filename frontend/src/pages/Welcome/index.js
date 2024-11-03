import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Logo from '../../assets/notepad.png'
import { styles } from './styles';

export function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image 
        source={Logo}
        style={styles.logo}
        />
      </View>
      <View style={styles.containerForm}>
        <Text style={styles.title}>Monitore e organize os seus gastos.</Text>
        <Text style={styles.subTitle}>Faça Login</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}