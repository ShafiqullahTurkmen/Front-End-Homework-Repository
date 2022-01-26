import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [
      {
        id: "1",
        title: "Learn React",
        completed: true,
      },
      {
        id: "2",
        title: "Read a book",
        completed: false,
      },
    ]
  },
  reducers: {
    addTodo: (state, action) => {
      state.items = [...state.items, action.payload ]
    },
    toggle: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find(item => item.id === id);
      item.completed = !item.completed;
    },
    destroy: (state, action) => {
      const  id  = action.payload;
      const filteredItems = state.items.filter(item => item.id !== id);
      state.items = [...filteredItems]; 
    }
  }
})

export const { addTodo, toggle, destroy } = todosSlice.actions;

export default todosSlice.reducer;