import { createSlice } from "@reduxjs/toolkit";

export const growthDataSlice = createSlice({
  name: "Growth Data",
  initialState: null,
  reducers: {
    setData: (state, action) => {
      return action.payload;
    },
    clearData: (state, action) => {
      return null;
    },
  },
});

export const { setData, clearData } = growthDataSlice.actions;

export default growthDataSlice.reducer;
