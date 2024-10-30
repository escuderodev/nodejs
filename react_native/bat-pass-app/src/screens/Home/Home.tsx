import React from "react";
import { View } from "react-native";
import styles from "./HomeStyles";
import { StatusBar } from 'expo-status-bar';
import { Logo } from "../../components/Logo/Logo";
import { GenerateButton } from "../../components/GenerateButton/GenerateButton";

export default function Home() {
    return (
        <View style={styles.appContainer}>
            <StatusBar style="light" />
            <View style={styles.logoContainer}>
                <Logo/>
            </View>
            <View style={styles.displayContainer}>
                <GenerateButton/>
            </View>
        </View>
    )
}