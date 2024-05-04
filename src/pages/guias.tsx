import {createNativeStackNavigator}from'@react-navigation/native-stack';
import Inicio from './Inicio';
import Info from './Informações'

const Stack = createNativeStackNavigator();

export default function StackRoutes(){
    return(
        <Stack.Navigator screenOptions={{ headerShown:false}}>
            <Stack.Screen
            name="home"
            component={Inicio}
            />
            <Stack.Screen
            name="Minhas informações"
            component={Info}
            />
        </Stack.Navigator>
    )
}