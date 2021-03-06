import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons as Icon } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { todoAdded, todoStatusUpdated, todoDeleted } from '../redux/todoSlice';
import { logout } from '../redux/userSlice';
import { nanoid } from '@reduxjs/toolkit';
import Checkbox from '../components/Checkbox';

const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  const handleSave = () => {
    if (value) {
      dispatch(
        todoAdded({
          id: nanoid(),
          todo: value,
          completed: false,
        })
      );
    }

    setValue('');
  };

  const handleChecked = (id) => {
    dispatch(todoStatusUpdated(id));
  };

  const handleDelete = (id) => {
    dispatch(todoDeleted(id));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Todo</Text>
        <Icon name='exit' size={24} onPress={handleLogout} />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={todos}
        keyExtractor={(item) => item.id}
        style={styles.todoContainer}
        renderItem={({ item }) => {
          return (
            <View style={styles.todo}>
              <Checkbox
                checked={item.completed}
                setChecked={() => handleChecked(item.id)}
              />
              <Text
                style={[
                  styles.checkboxLabel,
                  item.completed && styles.completed,
                ]}
              >
                {item.todo}
              </Text>
              <Icon
                name='trash-outline'
                type='ionicon'
                size={20}
                style={{ marginLeft: 'auto' }}
                onPress={() => handleDelete(item.id)}
              />
            </View>
          );
        }}
      />
      <View style={styles.form}>
        <Icon name='add' size={24} color='gray' />
        <TextInput
          placeholder='Add item'
          style={styles.input}
          value={value}
          onChangeText={(text) => setValue(text)}
          onSubmitEditing={handleSave}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 8,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '700',
    letterSpacing: 2,
  },
  todoContainer: {
    marginTop: 16,
  },
  todo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  checkboxLabel: {
    marginHorizontal: 8,
    fontSize: 18,
    color: 'black',
  },
  completed: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  form: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: '80%',
    paddingHorizontal: 12,
    marginVertical: 12,
  },
});

export default Todo;
