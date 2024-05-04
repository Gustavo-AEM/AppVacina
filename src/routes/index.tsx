import { NavigationContainer } from '@react-navigation/native';
import DrawerRoutes from './NavegaçãoInicial';

export default function Routes(){
    return(
        <NavigationContainer>
            <DrawerRoutes/>
        </NavigationContainer>
    )
}