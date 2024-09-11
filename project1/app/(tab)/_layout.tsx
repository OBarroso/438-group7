import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './home';
import SettingsScreen from './settings';
import React from 'react';
import { Home, Settings } from 'lucide-react-native'; 

const Tab = createBottomTabNavigator();

export default function Layout() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, 
        tabBarShowLabel: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Home color={color} size={size} />, 
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Settings color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
}