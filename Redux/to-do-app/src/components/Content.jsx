import React from "react";
import ContentFooter from "./ContentFooter";
import TodoList from "./TodoList";

export default function Content() {
  return (
    <>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <TodoList />
      </section>
      <ContentFooter/>  
    </>
  );
}
