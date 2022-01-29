import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCharacters = createAsyncThunk("characters/getCharacters", async () => {
  const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters?limit=10`)
  return res.data;
})

export const charactersSlice = createSlice({
  name: "character",
  initialState: {
    items: [],
  },
  reducers: {},
  extraReducers: {
    [fetchCharacters.fulfilled]: (state, action) => {
      console.log(action.payload);
    }
  }
});


export default charactersSlice.reducer;
