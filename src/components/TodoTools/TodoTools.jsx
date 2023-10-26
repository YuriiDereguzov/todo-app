import { useDispatch, useSelector } from "react-redux";
import { editView } from "../../redux/viewSlice";
import { deleteTodoCompleted } from "../../redux/todoSlice";
import "./TodoTools.css";

function TodoTools() {
  const todos = useSelector((state) => state.todos);
  const activeTodos = todos.filter((todo) => todo.completed === false);

  const view = useSelector((state) => state.view);
  const dispatch = useDispatch();

  const handleEditClickAll = () => {
    dispatch(editView({ view: "All" }));
  };

  const handleEditClickActive = () => {
    dispatch(editView({ view: "Active" }));
  };

  const handleEditClickCompleted = () => {
    dispatch(editView({ view: "Completed" }));
  };

  const handleDeleteCompleted = () => {
    dispatch(deleteTodoCompleted());
  };

  return (
    <div className="tools">
      <p className="tools__info">
        {activeTodos.length}
        {activeTodos.length > 1 ? " items todos" : " item todo"}
      </p>
      <div className="tools__buttons">
        <button
          aria-label="All"
          onClick={handleEditClickAll}
          className={`tools__button ${
            view.view === "All" && "tools_button_active"
          }`}
        >
          All
        </button>
        <button
          aria-label="Active"
          onClick={handleEditClickActive}
          className={`tools__button ${
            view.view === "Active" && "tools_button_active"
          }`}
        >
          Active
        </button>
        <button
          aria-label="Completed"
          onClick={handleEditClickCompleted}
          className={`tools__button ${
            view.view === "Completed" && "tools_button_active"
          }`}
        >
          Completed
        </button>
      </div>
      <button
        aria-label="tools__clear"
        className="tools__button"
        onClick={handleDeleteCompleted}
      >
        Clear Completed
      </button>
    </div>
  );
}

export default TodoTools;
