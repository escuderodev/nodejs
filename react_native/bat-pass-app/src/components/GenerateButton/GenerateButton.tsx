import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './GenerateButtonStyles';

export function GenerateButton() {
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {console.log('Gerou!')}}
      >
        <Text style={styles.text}>GENERATE</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {console.log('Copiou!')}}
      >
        <Text style={styles.text}>⚡ COPY</Text>
      </TouchableOpacity>
    </View>
  );
}