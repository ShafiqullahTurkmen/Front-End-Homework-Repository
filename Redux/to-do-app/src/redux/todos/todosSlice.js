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
    ],
    activeFilter: "all",
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
    },
    changeAtciveFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
    clearCompleted: (state, action) => {
      const filtered = state.items.filter(item => item.completed === false);
      state.items = [...filtered];
    }
  }
})

export const { addTodo, toggle, destroy, changeAtciveFilter, clearCompleted } = todosSlice.actions;

export default todosSlice.reducer;