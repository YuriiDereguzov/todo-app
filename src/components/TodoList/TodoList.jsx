import { useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
// import "./TodoList.css";
import "./TodoList.scss";

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
    <section className="todo">
      <ul className="todo__list">
        {filteredTodos.length === 0 && (
          <h2 className="todo__message">{`${
            view.view === "All" ? "Add Todo" : "Nothing in " + view.view
          }`}</h2>
        )}
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </section>
  );
}

export default TodoList;
