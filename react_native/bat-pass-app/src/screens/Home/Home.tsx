import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./HomeStyles";
import { StatusBar } from 'expo-status-bar';
import { Logo } from "../../components/Logo/Logo";

export default function Home() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View>
                <Logo/>
            </View>
            <Text>Home Works!!!</Text>
        </View>
    )
}