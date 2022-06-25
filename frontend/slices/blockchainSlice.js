import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const slice = createSlice({
  name: "blockchain",
  initialState: {
    blockchainRpc: "",
  },
  reducers: {
    setBlockchainRpc: (state, action) => {
      state.blockchainRpc = action.payload;
    }
  }
});

export const {
  setBlockchainRpc
} = slice.actions;

export default slice.reducer