import { useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

function TodoList() {
  const todos = useSelector((state) => {
    const { todosReducer } = state;
    return todosReducer.todos;
  });

  return (
    <div className="todo">
      <ul className="todo__list">
        {todos.map((res) => {
          return <TodoItem key={res.id} data={res} />;
        })}
      </ul>
    </div>
  );
}

export default TodoList;
