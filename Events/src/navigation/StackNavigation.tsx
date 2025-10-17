import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TodaysEvent from '../screens/TodaysEvent';

import UpcomingEvent from '../screens/Upcoming';
import PastEvent from '../screens/PastEvents';



const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="TodaysEvent">
      <Stack.Screen 
        name="TodaysEvent" 
        component={TodaysEvent} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="UpcomingEvent" 
        component={UpcomingEvent} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="PastEvent" 
        component={PastEvent} 
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
