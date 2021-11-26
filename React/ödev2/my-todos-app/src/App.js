import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import { useState } from "react";

const initialValues = [];

function App() {
  //Array State for todos List
  const [todos, setTodos] = useState(initialValues);

  return (
    <>
      <section className="todoapp">
        {/* Header Component */}
        <Header todos={todos} setTodos={setTodos}/>

        {/* Content Component */}
        <Content todos={todos} setTodos={setTodos}/>
      </section>
    </>
  );
}

export default App;
