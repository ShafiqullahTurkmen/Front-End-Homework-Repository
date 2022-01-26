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
    }
  }
})

export const { addTodo, toggle } = todosSlice.actions;

export default todosSlice.reducer;