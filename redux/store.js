import { combineReducers, configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'auth',
  storage: AsyncStorage,
};

export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});
