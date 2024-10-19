import { Dimensions, StyleSheet } from "react-native";
import { Themes } from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxTop: {
        height: Dimensions.get('window').height/3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxMid: {
        height: Dimensions.get('window').height/4,
        width: '100%',
        paddingHorizontal: 37
    },
    boxBottom: {
        height: Dimensions.get('window').height/3,
        backgroundColor: 'yellow',
        width: '100%'
    },
    logo: {
        height: 80
    },
    text: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 40,
    },
    titleInput: {
        marginLeft: 5,
        marginTop: 20,
        color: Themes.colors.gray
    }
})