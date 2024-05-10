import { View, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/home';
import Main from '../pages/Loginlocal';
import local from '../pages/Carteira';
import Cadastro from '../pages/Cadastro'
import Carteira from '../pages/CriarCarteiras';

const Stack = createNativeStackNavigator();

function Login() {
  return (
    <View style={styles.container}>
      <Main />
    </View>
  );
}

export default function TabRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Login'
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Home'
        component={Home}
        options={{ headerShown: false }}
      />
    <Stack.Screen
      name='Carteira'
      component={local}
      options={{ headerShown: false }}
    />
          <Stack.Screen
        name='Cadastro'
        component={Cadastro}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});