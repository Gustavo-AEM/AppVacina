import {createDrawerNavigator}from'@react-navigation/drawer';
import{Feather} from'@expo/vector-icons'

const Drawer = createDrawerNavigator();
import Info from './Informações';
import Inicio from './Inicio';

export default function Home(){
    return(
        <Drawer.Navigator screenOptions={{ title: ''}}>
            <Drawer.Screen
            name="home"
            component={Inicio}
            options={{ drawerIcon: ({color,size})=> < Feather name="user" color={color} size ={size}/>,
            drawerLabel:'minhas carteiras'
        }}
            />
        <Drawer.Screen
            name="Info"
            component={Info}
            options={{ drawerIcon: ({color,size})=> < Feather name="user" color={color} size ={size}/>,
            drawerLabel:'minhas informações'
        }}
            />
        </Drawer.Navigator>
    )
}