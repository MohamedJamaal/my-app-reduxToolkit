import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
// import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
// import Remove from './Remove';
import { Feather } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { changeTodoStatus, deleteTodo } from '../redux/silces/TodoSlice';
import { FontAwesome } from '@expo/vector-icons';

const Todo = ({ todo }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.todo}
        onPress={() => navigation.navigate('TODO Details', todo)}
      >
        <Text style={{ color: 'black' }}>{todo.title}</Text>
        {/* <TouchableOpacity
          onPress={() => navigation.navigate('Compeleted', todo)}
        >
          <Text style={styles.completed}>To Completed</Text>
        </TouchableOpacity> */}

        {/* delete button  */}
        <TouchableWithoutFeedback
          onPress={() => dispatch(deleteTodo({ id: todo.id }))}
        >
          <Feather
            name="delete"
            size={24}
            color="black"
            // onPress={removeItemValue}
          />
        </TouchableWithoutFeedback>
        {/* check button */}
        <TouchableWithoutFeedback
          onPress={() => dispatch(changeTodoStatus({ id: todo.id }))}
        >
          <FontAwesome name="check" size={24} color="black" />
        </TouchableWithoutFeedback>
        {/* <Remove todo={todo} removeItemValue={removeItemValue} /> */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  todo: {
    flex: 0,
    flexDirection: 'row',
    width: 300,
    // height: 100,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#eec299',
    marginBottom: 10,
    borderRadius: 7,
  },
  completed: {
    color: '#f10952',
    // flex: 1,
    // alignItems: 'flex-end',
    // alignSelf: 'flex-end',
    // width: 100,
    // height: 50,
    // justifyContent: 'flex-start',
  },
  // remove: {
  //   backgroundColor: '#f10952',
  //   padding: 10,
  //   borderRadius: 7,
  // },
});

export default Todo;
