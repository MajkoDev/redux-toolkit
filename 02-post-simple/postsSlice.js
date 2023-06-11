import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", title: "First Post!", content: "Hello!" },
  { id: "2", title: "Second Post", content: "More text" },
];

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // function
    // receives: current 'state' value, 'action' object that was dispatched
    postAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const {postAdded} = postsSlice.actions

export default postsSlice.reducer;
