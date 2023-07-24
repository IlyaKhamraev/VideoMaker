import { createSlice } from "@reduxjs/toolkit";

export interface State {
  isAuth: boolean;
}

const initialState: State = {
  isAuth: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    test: (state) => {
      state.isAuth = true;
    },
  },
});

export const { test } = userSlice.actions;

export default userSlice.reducer;
