import "./AddTodo.css";

function AddTodo() {
  return (
    <form className="add">
      <input
        type="text"
        className="add__input"
        placeholder="Added todo"
        required
      />
      <button className="add__button"></button>
    </form>
  );
}

export default AddTodo;
