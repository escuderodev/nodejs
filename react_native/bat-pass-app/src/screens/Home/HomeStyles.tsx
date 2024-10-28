import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: '#333333',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        flexDirection: 'column',
        borderColor: '#ffffff',
        borderWidth: 2,
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 60,
        paddingTop: 25,
        backgroundColor: '#4d4d4d'
    },
    displayContainer: {
        width: '80%',
        alignItems: 'center',
        flexDirection: 'column'
    }
});

export default styles