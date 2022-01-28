import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import { getTodosAsync, addTodoAsync, toggleTodoAsync, removeItemAsync, clearTodoAsync } from "./services"

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    activeFilter: localStorage.getItem("activeFilter"),
    addNewTodoIsLoading: false,
    addNewTodoError: null,
  },
  reducers: {
    changeAtciveFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
    clearCompleted: (state, action) => {
      const filtered = state.items.filter((item) => item.completed === false);
      state.items = [...filtered];
    },
  },
  extraReducers: {
    // Get Todos
    [getTodosAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getTodosAsync.fulfilled]: (state, action) => {
      state.items = [...action.payload];
      state.isLoading = false;
    },
    [getTodosAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },

    // Add Todo
    [addTodoAsync.pending]: (state, action) => {
      state.addNewTodoIsLoading = true;
    },
    [addTodoAsync.fulfilled]: (state, action) => {
      state.items = [...state.items, action.payload];
      state.addNewTodoIsLoading = false;
    },
    [addTodoAsync.rejected]: (state, action) => {
      state.addNewTodoError = action.error.message;
      state.addNewTodoIsLoading = false;
    },

    // Toggle Todo
    [toggleTodoAsync.fulfilled]: (state, action) => {
      const { id, completed } = action.payload;

      const index  = state.items.findIndex(item => item.id === id);
      state.items[index].completed = completed;
    },

    // Remove Todo
    [removeItemAsync.fulfilled]: (state, action) => {
      const id = action.payload;
      const filteredItems = state.items.filter((item) => item.id !== id);
      state.items = [...filteredItems];
    },

    // Clear Todo
    [clearTodoAsync.fulfilled]: (state, action) => {
      state.items = [...action.payload]
    }
  },
});

export const selectTodos = (state) => state.todos.items;
export const selectFilteredTodos = (state) => {
  if (state.todos.activeFilter === "all") {
    return state.todos.items;
  }

  return state.todos.items.filter((todo) =>
    state.todos.activeFilter === "active"
      ? todo.completed === false
      : todo.completed === true
  );
};

export const { changeAtciveFilter, clearCompleted } =
  todosSlice.actions;

export default todosSlice.reducer;
