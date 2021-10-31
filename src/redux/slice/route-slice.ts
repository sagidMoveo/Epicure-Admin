import { createSlice } from "@reduxjs/toolkit";

const routeSlice = createSlice({
  name: "route",
  initialState: {
    route: "login",
  },
  reducers: {
    setRoute(state, action) {
      state.route = action.payload;
    },
  },
});

const routeActions = routeSlice.actions;

export { routeSlice, routeActions };
