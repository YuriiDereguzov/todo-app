import uniqid from "uniqid";
import { TODO_CREATE } from "./types";

const initialState = {
  todos: [{ text: "Первая задача!", id: uniqid() }],
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODO_CREATE:
      return {
        ...state,
        todos: [...state.todos, action.data],
      };

    default:
      return state;
  }
};
