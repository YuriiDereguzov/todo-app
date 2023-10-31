import AddTodo from "../AddTodo/AddTodo";
import TodoList from "../TodoList/TodoList";
import TodoTools from "../TodoTools/TodoTools";
// import "./App.css";
import "./App.scss";

function App() {
  return (
    <div className="page">
      <header className="header">
        <h1 className="header__title">todos</h1>
      </header>
      <main className="main">
        <AddTodo />
        <TodoList />
        <TodoTools />
      </main>
    </div>
  );
}

export default App;
