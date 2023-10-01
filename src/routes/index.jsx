import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackRouting from './StackRouting';
import CompletedTodos from '../components/CompletedTodos';
import OtherTodos from '../components/OtherTodos';

const tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <tab.Navigator
        initialRouteName="main"
        screenOptions={{
          headerTitle: 'Todo App',
          tabBarActiveBackgroundColor: '#232',
        }}
      >
        <tab.Screen
          name="Main"
          // screenOptions={{ headerShown: true }}
          component={StackRouting}
        />
        <tab.Screen
          name="Others"
          // screenOptions={{ headerShown: true }}
          component={OtherTodos}
        />
        <tab.Screen name="Compeleted" component={CompletedTodos} />
      </tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
