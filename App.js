import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import store from './redux/store';
import { Provider } from 'react-redux';

import Todo from './screens/todo';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider style={styles.container}>
        <StatusBar style='auto' />
        <Todo />
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
