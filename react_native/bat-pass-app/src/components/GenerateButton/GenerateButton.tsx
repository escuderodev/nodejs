import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Display } from '../Display/Display';
import { styles } from './GenerateButtonStyles';
import passGenerator from '../../services/passGeneratorService';
import * as Clipboard from 'expo-clipboard'

export function GenerateButton() {
  const [pass, setPass] = useState('')

  function handleGenerateButton() {
    let tokenGenerator = passGenerator()
    setPass(tokenGenerator)
  }

  function handleCopyButton() {
    Clipboard.setStringAsync(pass)
  }

  return (
    <>
      <Display pass={pass}/>
      <TouchableOpacity
        style={styles.button}
        onPress={handleGenerateButton}
      >
        <Text style={styles.text}>GENERATE</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={handleCopyButton}
      >
        <Text style={styles.text}>⚡ COPY</Text>
      </TouchableOpacity>
    </>
  );
}