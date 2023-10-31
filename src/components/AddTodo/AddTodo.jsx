import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todoSlice";
import "./AddTodo.scss";

function AddTodo() {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addTodo({
        title: value,
      })
    );
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="add">
      <input
        className="add__input"
        type="text"
        minLength="2"
        value={value}
        onChange={handleChange}
        placeholder="What needs to be done?"
        required
      />
      <button className="add__button"></button>
    </form>
  );
}

export default AddTodo;
