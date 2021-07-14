import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import Login from '../screens/login';
import Todo from '../screens/todo';
import Loading from '../components/Loading';

export default function RootNavigator() {
  const user = useSelector((state) => state.users.isLogin);

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(!isLoading);
    }, 500);
  }, []);

  return (
    <NavigationContainer>
      {isLoading ? <Loading /> : user ? <Todo /> : <Login />}
    </NavigationContainer>
  );
}
