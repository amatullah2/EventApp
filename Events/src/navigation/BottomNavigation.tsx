import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigation from './StackNavigation';
import Upcoming from '../screens/Upcoming';
import PastEvents from '../screens/PastEvents';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Today" component={StackNavigation} />
      <Tab.Screen name="Upcoming" component={Upcoming} />
      <Tab.Screen name="Past" component={PastEvents} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
