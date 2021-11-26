import { useState, useEffect } from "react";

function Footer({ todos, setTodos, setFilteredList, filteredList }) {
  const [filterTodos, setFilterTodos] = useState("all");

  //filters items
  useEffect(() => {
    if (filterTodos === "all") {
      setFilteredList(todos);
    } else if (filterTodos === "active") {
      const filteredItems = todos.filter((item) => {
        return item.completed === false;
      });
      setFilteredList(filteredItems);
    } else if (filterTodos === "completed") {
      const filteredItems = todos.filter((item) => {
        return item.completed === true;
      });
      setFilteredList(filteredItems);
    }
  }, [filterTodos, todos]);

  //Gets the count of uncompleted tasks
  const leftCount = todos.filter((item) => {
    return item.completed === false;
  });
  
  //Gets the count of completed tasks
  const leftCountCompleted = todos.filter((item) => {
    return item.completed === true;
  });

  //Clears All Completed Tasks
  const clearCompleted = () => {
    const cleared = filteredList.filter((item) => {
      return item.completed === false;
    });
    setTodos(cleared);

    const clearedAll = todos.filter((item) => {
      return item.completed === false;
    });
    setTodos(clearedAll);
  };

  return (
    <>
      <footer className="footer">
        {/* shows how many items left. */}
        <span className="todo-count">
          <strong>{leftCount.length}</strong>
          items left
        </span>

        <ul className="filters">
          <li>
            <a
              className={filterTodos === "all" ? "selected" : ""}
              onClick={() => setFilterTodos("all")}
            >
              All
            </a>
          </li>
          <li>
            <a
              className={filterTodos === "active" ? "selected" : ""}
              onClick={() => setFilterTodos("active")}
            >
              Active
            </a>
          </li>
          <li>
            <a
              className={filterTodos === "completed" ? "selected" : ""}
              onClick={() => setFilterTodos("completed")}
            >
              Completed
            </a>
          </li>
        </ul>

        {/* <!-- Hidden if no completed items are left ↓ --> */}
        <button className="clear-completed" onClick={clearCompleted}>
          {leftCountCompleted.length > 0 && 'Clear completed'}
        </button>
      </footer>
    </>
  );
}

export default Footer;
