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
    </form>
  );
}

export default AddTodo;
