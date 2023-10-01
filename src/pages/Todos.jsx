import { View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import Todo from './Todo';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const Todos = () => {
  const { todos } = useSelector((state) => state.todo);
  // const navigation = useNavigation();

  // useEffect(() => console.log(todos), [todos]);
  return (
    <View>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          // removeItemValue={removeItemValue}
          // style={{ marginBottom: 5 }}
        />
      ))}
    </View>
  );
};

export default Todos;
