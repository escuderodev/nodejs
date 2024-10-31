import React from 'react';
import { Text, Image } from 'react-native';
import ImageLogo from '../../../assets/notepad.png';
import { styles } from './styles';

export function Logo() {
  return (
    <>
        <Text style={styles.title}>CONTROL ACTIVITIES</Text>
        <Image source={ImageLogo} style={styles.logo}/>
    </>
  );
}