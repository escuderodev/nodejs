import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./HomeStyles";
import { StatusBar } from 'expo-status-bar';
import { Logo } from "../../components/Logo/Logo";
import { Display } from "../../components/Display/Display";

export default function Home() {
    return (
        <View style={styles.appContainer}>
            <StatusBar style="light" />
            <View style={styles.logoContainer}>
                <Logo/>
            </View>
            <View style={styles.displayContainer}>
                <Display/>
            </View>
        </View>
    )
}