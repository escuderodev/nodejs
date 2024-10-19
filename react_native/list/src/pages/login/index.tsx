import React from "react";
import { Text, View, Image, TextInput } from 'react-native';
import { style } from "./styles";
import Logo from '../../assets/logo.png';

export default function Login() {
    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image 
                source={Logo}
                style={style.logo}
                resizeMode="contain"
                />
                <Text style={style.text}>Faça Login</Text>
            </View>
            <View style={style.boxMid}>
                <Text style={style.titleInput}>Email:</Text>
                <TextInput></TextInput>
                <Text style={style.titleInput}>Senha:</Text>
                <TextInput></TextInput>
            </View>
            <View style={style.boxBottom}>
                
            </View>
        </View>
    )
}