import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  {
    id: nanoid(),
    todo: 'Coding',
    completed: false,
  },
  {
    id: nanoid(),
    todo: 'Breakfast',
    completed: true,
  },
];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoAdded(state, action) {
      state.push(action.payload);
    },
    todoStatusUpdated(state, action) {
      const existingTodos = state.find((todo) => todo.id === action.payload);
      if (existingTodos) {
        existingTodos.completed = !existingTodos.completed;
      }
    },
    todoDeleted(state, action) {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { todoAdded, todoStatusUpdated, todoDeleted } = todoSlice.actions;

export default todoSlice.reducer;
