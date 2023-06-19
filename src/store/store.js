import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "src/features/Nft/nftSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
