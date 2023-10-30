import { createSlice } from "@reduxjs/toolkit";
import uniqid from "uniqid";

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    { id: uniqid(), title: "Первая задача!", completed: true },
    { id: uniqid(), title: "Вторая задача!", completed: true },
    { id: uniqid(), title: "Третья задача!", completed: false }
  ],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: uniqid(),
        title: action.payload.title,
        completed: false,
      };
      state.push(newTodo);
    },
    toglleComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    editTodo: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].title = action.payload.title;
    },
    deleteTodoCompleted: (state, action) => {
      return state.filter((todo) => todo.completed === false);
    },
  },
});

export const {
  addTodo,
  toglleComplete,
  deleteTodo,
  editTodo,
  deleteTodoCompleted,
} = todoSlice.actions;

export default todoSlice.reducer;