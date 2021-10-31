import { configureStore } from "@reduxjs/toolkit";
import { routeSlice } from "./slice/route-slice";
import { collectionSlice } from "./slice/collection-slice";
import { loginSlice } from "./slice/login-slice";

export const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    collection: collectionSlice.reducer,
    route: routeSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
