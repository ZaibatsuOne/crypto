import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "src/features/Nft/nftSlice";
import bidReducer from "src/features/bidSlice";

export const store = configureStore({
  reducer: {
    bid: bidReducer,
    counter: counterReducer,
  },
});
