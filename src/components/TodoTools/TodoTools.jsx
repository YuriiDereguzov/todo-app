import { connect } from "react-redux";
import "./TodoTools.css";

function TodoTools(props) {
  return (
    <div className="tools">
      <p className="tools__info">{props.countsTodo} item todos</p>
      <div className="tools__buttons">
        <button
          aria-label="All"
          className="tools__button tools_button_active"
          // className={`tools__button ${list == "All" && "tools__button_active"}`}
        >
          All
        </button>
        <button
          aria-label="Active"
          className="tools__button"
          // className={`tools__button ${list === "Active" && "tools__button_active"}`}
        >
          Active
        </button>
        <button
          aria-label="Completed"
          className="tools__button"
          // className={`tools__button ${list === "Completed" && "tools__button_active"}`}
        >
          Completed
        </button>
      </div>
      <button aria-label="tools__clear" className="tools__button">
        Clear Completed
      </button>
    </div>
  );
}

// function mapStateToProps(state) {
//   return {
//     countsTodo: state.countsTodo
//   }
// }

// export default connect(mapStateToProps)(TodoTools);
export default connect()(TodoTools);
