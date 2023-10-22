import "./TodoItem.css";

function TodoItem() {
  return (
    <li className="todo__list-item">
      <button className="todo__button-status todo__button-status_active"></button>
      <p className="todo__text">text</p>
      <button className="todo__button-edit"></button>
      <button className="todo__button-delete"></button>
    </li>
  );
}

export default TodoItem;
