import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAsync } from "../redux/todos/todosSlice";
import Loading from "./Loading"
import Error from "./Error"


export default function Form() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.todos.addNewTodoIsLoading);
  const error = useSelector(state => state.todos.addNewTodoError);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title) return;

    await dispatch(
      addTodoAsync({
        title,
      })
    );
    setTitle("");
  };



  return (
    <form onSubmit={handleSubmit} style={{display: "flex", alignItems: "center"}}>
      <input
        disabled={isLoading}
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {
        error && <Error message={error}/>
      }

    </form>
  );
}
