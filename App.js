import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {View, Text, Button, Alert, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, Profile, Tomada} from './src/screen';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          unMountInactiveRoutes: true,
          headerTransparent: true,
          headerTitleAlign: 'center',
          headerTintColor: '#333',
          headerTitleStyle: {fontWeight: 'bold'},
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cálculo de Iluminação" component={Profile} />
        <Stack.Screen name="Cálculo de Tomada" component={Tomada} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
