import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import Todo from '../pages/Todo';

const CompletedTodos = () => {
  const params = useRoute().params;
  const [doneTodos, setDoneTodos] = useState([]);
  const { todos } = useSelector((state) => state.todo);

  useEffect(() => {
    if (todos) {
      const filterdTodos = todos.filter((res) => res.done);
      setDoneTodos(filterdTodos);
    }
  }, [todos]);

  return (
    <View style={styles.container}>
      {doneTodos.length ? (
        <>
          {doneTodos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </>
      ) : (
        <Text> NO Done TODO !! </Text>
      )}
    </View>

    // <View style={styles.container}>
    //   {params && (
    //     <>
    //       <Text style={styles.title}>{params.title}</Text>
    //       <Text style={styles.description}>{params.description}</Text>
    //     </>
    //   )}
    // </View>
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
export default CompletedTodos;
