import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

function TodoList() {
  return (
    <div className="todo">
        <ul className="todo__list">
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </ul>
    </div>
  );
}

export default TodoList;