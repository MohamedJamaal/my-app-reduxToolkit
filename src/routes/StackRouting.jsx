import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/Home';
import TodoDetails from '../components/TodoDetails';
import OtherTodos from '../components/OtherTodos';
// import CompletedTodos from '../components/CompletedTodos';

const stack = createStackNavigator();

const StackRouting = () => {
  return (
    <stack.Navigator>
      <stack.Screen name="Home" component={Home} />
      <stack.Screen name="TODO Details" component={TodoDetails} />
      {/* <stack.Screen name="Other Todos" component={OtherTodos} /> */}
      {/* <stack.Screen name="completed" component={CompletedTodos} /> */}
    </stack.Navigator>
  );
};

export default StackRouting;
