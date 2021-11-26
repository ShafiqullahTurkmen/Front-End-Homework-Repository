function ToDoList({ filteredList, setTodos }) {
  //removes item from todo list.
  const remove = (id) => {
    const removedTodo = filteredList.filter((item) => item.id !== id);
    setTodos(removedTodo);
  };

  //Changes the item.complete porperty to false or true, it depends what it was, then sets it back to the todo array
  const changeCompleted = (id) => {
    const filteredArray = filteredList.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
        return item;
      } else {
        return item;
      }
    });

    setTodos(filteredArray);
  };

  return (
    <div>
      <label htmlFor="toggle-all"></label>
        {/* prints all todo items as list and helps to manipulate on it */}
      <ul className="todo-list">
        {filteredList.map((item) => (
          <li key={item.id} className={item.completed ? "completed" : ""}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                onChange={() => changeCompleted(item.id)}
                checked={item.completed ? 'checked' : ''}
              />
              <label>{item.title}</label>
              <button
                className="destroy"
                onClick={() => remove(item.id)}
              ></button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
