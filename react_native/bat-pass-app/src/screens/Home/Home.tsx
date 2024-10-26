import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./Style";
import { StatusBar } from 'expo-status-bar';

export default function Home() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text>Home Works!!!</Text>
        </View>
    )
}