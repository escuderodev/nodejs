import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './DisplayStyles';

export function Display() {
  return (
    <>
        <TextInput
            style={styles.display}
            placeholder='your pass'
        />
    </>
  );
}