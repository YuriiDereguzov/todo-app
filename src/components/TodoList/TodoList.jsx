import { useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

function TodoList() {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="todo">
      <ul className="todo__list">
        {todos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} />;
        })}
      </ul>
    </div>
  );
}

export default TodoList;
