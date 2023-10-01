import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import Todo from '../pages/Todo';

const OtherTodos = () => {
  const params = useRoute().params;
  const [notDoneTodos, setNotDoneTodos] = useState([]);
  const { todos } = useSelector((state) => state.todo);

  useEffect(() => {
    if (todos) {
      const notDonefilter = todos.filter((res) => res.done == false);
      setNotDoneTodos(notDonefilter);
    }
  }, [todos]);

  return (
    <View style={styles.container}>
      {notDoneTodos.length ? (
        <>
          {notDoneTodos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </>
      ) : (
        <Text> NOT Found TODO !! </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'flex-start',
    padding: 100,
    alignItems: 'center',
    backgroundColor: '#632c34ue3',
    // color: '#fff',
    // width: '90%',
    // height: 30,
  },
  title: {
    fontSize: 38,
    fontWeight: '400',
    marginBottom: 30,
    color: '#0f536e',
  },
  description: {
    fontSize: 32,
    fontWeight: '200',
    color: '#19599d',
  },
});

export default OtherTodos;
