import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import viewReducer from "./viewSlice";

export default configureStore({
  reducer: {
    todos: todoReducer,
    view: viewReducer,
  },
});
