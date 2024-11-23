import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./TodoSlice"; // Make sure the file name matches

export const store = configureStore({
  reducer: {
    todoUser: todoReducer, // Reducer for managing Todo state
  },
});

export default store;
