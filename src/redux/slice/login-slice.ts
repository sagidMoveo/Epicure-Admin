import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLogin: false,
  },
  reducers: {
    setLogin(state) {
      state.isLogin = !state.isLogin;
    },
  },
});

const loginActions = loginSlice.actions;

export { loginSlice, loginActions };
