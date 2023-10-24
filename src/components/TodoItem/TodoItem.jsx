import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toglleComplete, deleteTodo } from "../../redux/todoSlice";
import "./TodoItem.css";

function TodoItem({ id, title, completed }) {
  const [isEdit, setIsEdit] = useState(true);
  const [todoText, setTodoText] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (title) {
      setTodoText(title);
    }
  }, [title]);

  const handleChange = (e) => {
    setTodoText(e.target.value);
  };

  const handleCompleteClick = () => {
    dispatch(toglleComplete({ id: id, completed: !completed }));
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodo({ id: id }));
  }

  const handleEditClick = () => {
    setIsEdit(!isEdit);
  };

  return (
    <li className="todo__list-item">
      <button
        type="checkbox"
        onClick={handleCompleteClick}
        className={`todo__button-status ${
          completed && "todo_button-status_success"
        }`}
      ></button>
      {isEdit ? (
        <p className="todo__text">{todoText}</p>
      ) : (
        <input
          className="todo__input"
          type="text"
          minLength="2"
          value={todoText}
          onChange={handleChange}
          placeholder="todo"
          required
        />
      )}
      <button
        type="submit"
        onClick={handleEditClick}
        className="todo__button-edit"
      ></button>
      <button
        type="submit"
        onClick={handleDeleteClick}
        className="todo__button-delete"
      ></button>
    </li>
  );
}

export default TodoItem;
