import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons as Icon } from '@expo/vector-icons';
import { v4 as uuidv4 } from 'uuid';

const Todo = () => {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      todo: 'Coding',
    },
    {
      id: uuidv4(),
      todo: 'Breakfast',
    },
  ]);

  const handleSave = () => {
    setTodos((prevState) => {
      return [
        ...prevState,
        {
          id: uuidv4(),
          todo: value,
        },
      ];
    });
    setValue('');
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
              <Text>{item.todo}</Text>
            </View>
          );
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
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
    fontSize: 20,
    fontWeight: '600',
  },
  input: {
    height: 40,
    width: '80%',
    paddingHorizontal: 12,
    marginVertical: 12,
  },
  todoContainer: {
    marginTop: 16,
  },
  todo: {},
});

export default Todo;
