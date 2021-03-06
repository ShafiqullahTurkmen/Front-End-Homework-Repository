import React from "react";
import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { changeAtciveFilter, clearCompleted } from "../redux/todos/todosSlice";
import { selectTodos } from "../redux/todos/todosSlice"
import { clearTodoAsync } from "../redux/todos/services"


export default function ContentFooter() {
  const dispatch = useDispatch();
  const items = useSelector(selectTodos);
  const itemsLeft = items.filter((item) => !item.completed).length;

  const activeFilter = useSelector((state) => state.todos.activeFilter);

  useEffect(() => {
    localStorage.setItem("activeFilter", activeFilter);
  }, [activeFilter])

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{itemsLeft}</strong> item{itemsLeft > 1 && "s"} left
      </span>

      <ul className="filters">
        <li>
          <a
            href="/#"
            className={activeFilter === "all" ? "selected" : ""}
            onClick={() => dispatch(changeAtciveFilter("all"))}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="/#"
            className={activeFilter === "active" ? "selected" : ""}
            onClick={() => dispatch(changeAtciveFilter("active"))}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="/#"
            className={activeFilter === "completed" ? "selected" : ""}
            onClick={() => dispatch(changeAtciveFilter("completed"))}
          >
            Completed
          </a>
        </li>
      </ul>

      <button className="clear-completed" onClick={() => dispatch(clearTodoAsync())}>Clear completed</button>
    </footer>
  );
}
