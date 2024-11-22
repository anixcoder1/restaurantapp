import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import MenuScreen from '../screens/Menuscreen';
import Cart from '../screens/Cart';
import Cart1 from '../screens/Cart1';
import Cart2 from '../screens/Cart2';
import Cart3 from '../screens/Cart3';
import Cart4 from '../screens/Cart4';
import Profile from '../screens/Profile';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Sign Up" component={SignupScreen} options={{headerLeft:() => null}} />
        <Stack.Screen name="Menu" component={MenuScreen} options={{headerLeft:() => null}}/>
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Cart1" component={Cart1} />
        <Stack.Screen name="Cart2" component={Cart2} />
        <Stack.Screen name="Cart3" component={Cart3} />
        <Stack.Screen name="Cart4" component={Cart4} />
        <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;