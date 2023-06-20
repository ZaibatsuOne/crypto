import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  price: 0,
};

export const bidSlice = createSlice({
  name: "bid",
  initialState,
  reducers: {
    addBid(state, action) {
      state.price = action.payload;
    },
  },
});

export const { addBid } = bidSlice.actions;
export default bidSlice.reducer;
