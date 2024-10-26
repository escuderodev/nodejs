import React from 'react';
import { View, Text, Image } from 'react-native';
import ImageLogo from '../../../assets/bat-logo.png';

import { styles } from './LogoStyles';

export function Logo() {
    return (
        <>
            <Text style={styles.title}>BAT PASS GENERATOR</Text>
            <Image source={ImageLogo} style={styles.logo}/>
        </>
    );
}