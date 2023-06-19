import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addNFT: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { addNFT } = counterSlice.actions;

export default counterSlice.reducer;
