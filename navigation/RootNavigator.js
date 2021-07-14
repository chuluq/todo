import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import Login from '../screens/login';
import Todo from '../screens/todo';

export default function RootNavigator() {
  const user = useSelector((state) => state.users);

  return (
    <NavigationContainer>
      {user.isLogin ? <Todo /> : <Login />}
    </NavigationContainer>
  );
}
