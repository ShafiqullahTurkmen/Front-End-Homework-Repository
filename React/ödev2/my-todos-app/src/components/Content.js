import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import ToDoList from "./ToDoList";

export default function Content({todos, setTodos}) {

    //List, which is filtered for ToDoList Component
    const [filteredList, setFilteredList] = useState([]);



  return (
    <>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        {/* Component for listing Todos */}
        <ToDoList filteredList={filteredList} setTodos={setTodos}/>
      </section>

      {/* Component for filtering */}
      <Footer  todos={todos} setTodos={setTodos} setFilteredList={setFilteredList} filteredList={filteredList} />
    </>
  );
}
