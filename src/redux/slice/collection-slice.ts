import { createSlice } from "@reduxjs/toolkit";

const collectionSlice = createSlice({
  name: "collection",
  initialState: {
    collection: [],
  },
  reducers: {
    setcollection(state, action) {
      state.collection = action.payload;
    },
  },
});

const collectionActions = collectionSlice.actions;

export { collectionSlice, collectionActions };
