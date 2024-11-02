import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FormLogin } from "../screens/formLogin/FormLogin";

const { Navigator, Screen } = createNativeStackNavigator;

export function AppRoutes() {
    return (
        <Navigator screenOptions={{headerShow: false}}>
            <Screen 
                name="Login"
                component={FormLogin} />
        </Navigator>
    )
}

// paramos no 13:13