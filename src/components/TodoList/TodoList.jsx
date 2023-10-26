import { useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const view = useSelector((state) => state.view);
  const filteredTodos =
    view.view === "All"
      ? todos
      : view.view === "Active"
      ? todos.filter((todo) => todo.completed === false)
      : todos.filter((todo) => todo.completed === true);

  return (
    <div className="todo">
      <ul className="todo__list">
        {filteredTodos.length === 0 && (
          <h2 className="todo__list-message">{`${
            view.view === "All" ? "Add Todo" : "Nothing in " + view.view
          }`}</h2>
        )}
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
