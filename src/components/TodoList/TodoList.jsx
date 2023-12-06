import { useDispatch, useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
import { setTodos } from "../../redux/todoSlice";
import "./TodoList.scss";

function TodoList() {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);
  const view = useSelector((state) => state.view);
  const filteredTodos =
    view.view === "All"
      ? todos
      : view.view === "Active"
      ? todos.filter((todo) => todo.completed === false)
      : todos.filter((todo) => todo.completed === true);

  const onDragLeave = (e) => {};

  const onDragEnd = (e) => {
    // e.target.style.background = 'white'
  };

  const onDragOver = (e) => {
    e.preventDefault();
    // e.target.style.background = 'lightgrey'
  };

  let curentTodoId = null;
  const onDragStart = (e, todo) => {
    curentTodoId = todo.id;
  };

  const onDrop = (e, todo) => {
    e.preventDefault();
    const todosArr = Array.from(todos);
    if (todo !== todos[2] && curentTodoId !== todos[2].id) {
      const newIndex = todos.findIndex((x) => x.id === todo.id);
      const oldIndex = todos.findIndex((x) => x.id === curentTodoId);

      todosArr.splice(newIndex, 0, todosArr.splice(oldIndex, 1)[0]);
    }

    const holdIndex = todosArr.findIndex(x => !!x.hold);
    if (holdIndex !== 2) {
      todosArr.splice(2, 0, todosArr.splice(holdIndex, 1)[0]);
    }
    dispatch(setTodos(todosArr));
  };


  // const onDrop = (e, todo) => {
  //   e.preventDefault();

  //   const newIndex = todos.findIndex((x) => x.id === todo.id);
  //   const oldIndex = todos.findIndex((x) => x.id === curentTodoId);

  //   const todosArr = Array.from(todos);
  //   // const el = todosArr.splice(oldIndex, 1)[0];
  //   // todosArr.splice(newIndex, 0, el);
  
  //   todosArr.splice(newIndex, 0, todosArr.splice(oldIndex, 1)[0]);

  //   dispatch(setTodos(todosArr));
  // };

  return (
    <section className="todo">
      <ul className="todo__list">
        {filteredTodos.length === 0 && (
          <h2 className="todo__message">{`${
            view.view === "All" ? "Add Todo" : "Nothing in " + view.view
          }`}</h2>
        )}
        {filteredTodos.map((todo) => (
          <li
            className="todo__list-item"
            draggable
            onDragStart={(e) => onDragStart(e, todo)}
            onDragLeave={(e) => onDragLeave(e)}
            onDragEnd={(e) => onDragEnd(e)}
            onDragOver={(e) => onDragOver(e)}
            onDrop={(e) => onDrop(e, todo)}
            key={todo.id}
          >
            {/* <TodoItem key={todo.id} {...todo} /> */}
            <TodoItem {...todo} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TodoList;
