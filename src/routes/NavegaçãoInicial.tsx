import { View, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/home';
import Main from '../pages/Loginlocal';
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
      component={Carteira}
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