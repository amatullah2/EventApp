import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigation from './StackNavigation';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Today" component={StackNavigation} />
      <Tab.Screen name="Upcoming" component={StackNavigation} />
      <Tab.Screen name="Past" component={StackNavigation} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
