import React from 'react';
import { TextInput } from 'react-native';
import { styles } from './DisplayStyles';

interface DisplayProps {
  pass: string
}

export function Display(props: DisplayProps) {
  return (
    <>
        <TextInput
            style={styles.display}
            placeholder='your pass'
            value={props.pass}
        />
    </>
  );
}