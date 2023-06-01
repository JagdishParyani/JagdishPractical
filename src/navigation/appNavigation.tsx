import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home/homeScreen';
import {Screens} from './screen';
import TicTacToe from '../screens/ticTacToe/ticTacToe';

const AppNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Screens.HOME}>
        <Stack.Screen name={Screens.HOME} component={Home} />
        <Stack.Screen name={Screens.TIC_TAC_TOE} component={TicTacToe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
