import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons as Icon } from '@expo/vector-icons';
import { nanoid } from '@reduxjs/toolkit';
import Checkbox from '../components/Checkbox';

const Todo = () => {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([
    {
      id: nanoid(),
      todo: 'Coding',
      completed: false,
    },
    {
      id: nanoid(),
      todo: 'Breakfast',
      completed: false,
    },
  ]);

  const handleSave = () => {
    setTodos((prevState) => {
      return [
        ...prevState,
        {
          id: nanoid(),
          todo: value,
          completed: false,
        },
      ];
    });
    setValue('');
  };

  const handleChecked = (id) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }

        return item;
      })
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Todo</Text>
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
