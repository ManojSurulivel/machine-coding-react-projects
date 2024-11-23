// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   todo: [],
// };

// const todoSlice = createSlice({
//   name: "todo",
//   initialState,
//   reducers: {
//     setUser: (state, action) => {
//       state.todo.push(action.payload);
//     },
//     deleteUser: (state, action) => {
//       state.todo.splice(action.payload, 1);
//     },
//   },
// });

// export const { setUser, deleteUser } = todoSlice.actions;
// export default todoSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const todoSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser: (state, action) => {
      // Add a new user to the users array
      state.users = [...state.users, action.payload];

    //   state.users.push(action.payload);
    },
    deleteUser: (state, action) => {
      // Remove the user at the specified index
      state.users = state.users.filter(
        (user, index) => index !== action.payload
      );
    },
  },
});

export const { setUser, deleteUser } = todoSlice.actions;
export default todoSlice.reducer;
