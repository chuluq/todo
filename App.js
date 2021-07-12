import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-get-random-values';
import Todo from './screens/todo';

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar style='auto' />
      <Todo />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
