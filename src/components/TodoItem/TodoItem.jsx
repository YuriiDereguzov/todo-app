import { useState, useEffect } from "react";
import "./TodoItem.css";

function TodoItem({ data }) {
  const [status, setStatus] = useState(true);
  const [todoText, setTodoText] = useState("");
  const { text, id } = data;

  useEffect(() => {
    if (text) {
      setTodoText(text);
    }
  }, [text]);

  const handleChange = (e) => {
    setTodoText(e.target.value);
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    setStatus(!status);
  };

  return (
    <li className="todo__list-item">
      <button className="todo__button-status"></button>
      {status ? (
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
        onClick={handleSubmitEdit}
        className="todo__button-edit"
      ></button>
      <button className="todo__button-delete"></button>
    </li>
  );
}

export default TodoItem;
