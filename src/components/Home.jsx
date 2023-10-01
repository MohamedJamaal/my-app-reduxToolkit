import {
  Platform,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, { useEffect, useState } from 'react';
// import { TextInput } from 'react-native-gesture-handler';
import Todos from '../pages/Todos';
import { StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/silces/TodoSlice';

const Home = () => {
  // const [todos, setTodos] = useState([]); // replaced by redux
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo);

  useEffect(() => {
    trackStorage();
  }, []);

  const trackStorage = async () => {
    const asyncTodos = await AsyncStorage.getItem('todos');
    if (asyncTodos) setTodos(JSON.parse(asyncTodos));
    // console.log(asyncTodos);
  };

  // from reducer
  const searchTodo = todos.filter((todo) => todo.title == title);

  // add todo with validation if todo exist or empty
  const createTodo = async () => {
    if (searchTodo.length) {
      alert('task is exist');
      // setTodos([...todos]);
      dispatch(() => addTodo([{ ...title, ...description }]));
    } else if (!title.length || !description.length) {
      // console.log('task is not exist')
      alert('enter title and description');
    } else {
      dispatch(addTodo({ title, description }));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 32, fontWeight: '500' }}>TODO APP</Text>
      <TextInput
        name="title"
        placeholder="To Do Title"
        style={styles.inputs}
        onChangeText={(value) => setTitle(value)}
      ></TextInput>
      <TextInput
        placeholder="To Do Description"
        style={styles.inputs}
        onChangeText={(value) => setDescription(value)}
      ></TextInput>
      <TouchableOpacity name="ADD" onPress={createTodo}>
        <Text
          style={{
            fontSize: 22,
            padding: 10,
            backgroundColor: '#eec299',
            border: 1,
            borderWidth: 3,
            borderColor: '#53300b44',
            borderRadius: 5,
          }}
        >
          ADD
        </Text>
      </TouchableOpacity>

      <View style={styles.divider} />
      <Todos />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    paddingTop: 30,
    alignItems: 'center',
    // backgroundColor:  '#e9856a',
    // backgroundColor: Platform.OS === 'web' ? '#000' : '#e9856a',
  },
  inputs: {
    width: 200,
    marginVertical: 15,
    borderRadius: 5,
    borderWidth: 2,
    padding: 10,
    borderColor: '#53300b44',
    backgroundColor: '#eec299',
  },
  title: {},
  divider: {
    width: '85%',
    height: 2,
    backgroundColor: 'gray',
    marginVertical: 20,
  },
});

export default Home;
