import { useState } from "react";
import { useDispatch } from "react-redux";
import uniqid from "uniqid";
import "./AddTodo.css";
import { todoCreate } from "../../redux/actions";

function AddTodo(props) {
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = uniqid();
    dispatch(todoCreate(todo, id));
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit} className="add">
      <input
        className="add__input"
        type="text"
        minLength="2"
        value={todo}
        onChange={handleChange}
        placeholder="Added todo"
        required
      />
      <button className="add__button"></button>
    </form>
  );
}

export default AddTodo;
