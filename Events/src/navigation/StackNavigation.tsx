import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TodaysEvent from '../screens/TodaysEvent';

import Upcoming from '../screens/Upcoming';
import PastEvents from '../screens/PastEvents';



const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="TodaysEvent" screenOptions={{ headerShown: false }}>
      <Stack.Screen 
        name="TodaysEvent" 
        component={TodaysEvent} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Upcoming" 
        component={Upcoming} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="PastEvents" 
        component={PastEvents} 
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
