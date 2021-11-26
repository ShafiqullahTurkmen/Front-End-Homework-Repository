import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";

//initialValue for input form
const initialValue = { id: "", title: "", completed: false };

export default function Header({ todos, setTodos }) {
  //object State for todo list
  const [form, setForm] = useState(initialValue);

  //when todos state is changed the form is assigned with initialValue
  useEffect(() => {
    setForm(initialValue);
  }, [todos]);

  //Captures changes and assigns to form state
  const onChangeInput = (e) => {
    setForm({ ...form, title: e.target.value, id: nanoid() });
  };

  //when a value is submitted, first it checks some condition then set the value to the todos array.
  const onSubmit = (e) => {
    e.preventDefault();
    if (form.title.trim() === "") {
      return false;
    }
    setTodos([...todos, form]);
  };

  return (
    <div>
      {/* input form, which takes data from user */}
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={onSubmit}>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            value={form.title}
            onChange={onChangeInput}
          />
        </form>
      </header>
    </div>
  );
}
