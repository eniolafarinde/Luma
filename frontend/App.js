import React from 'react';
import { Text } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome1 from './src/screens/welcome1';
import Welcome2 from './src/screens/welcome2';
import GetStarted from './src/screens/GetStarted';
import RegisterScreen from './src/screens/RegisterScreen';
// import LoginScreen from './src/screens/LoginScreen';

import ReadyScreen from './src/screens/ReadyScreen';
import Dashboard from './src/screens/Dashboard';




const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Itim: require('./src/asset/Itim-Regular.ttf'),
    Maitree: require('./src/asset/Maitree-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome1" component={Welcome1} />
        <Stack.Screen name="Welcome2" component={Welcome2} />
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Ready" component={ReadyScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
