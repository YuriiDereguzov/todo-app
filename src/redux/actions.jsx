import { TODO_CREATE } from "./types";

export function todoCreate(text, id) {
  return {
    type: TODO_CREATE,
    data: { text, id },
  };
}
