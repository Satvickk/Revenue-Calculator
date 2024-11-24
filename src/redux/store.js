import { configureStore } from "@reduxjs/toolkit";
import growthDataSlice from "./features/dataSlice";

export const store = configureStore({
  reducer: {
    GrowthData: growthDataSlice,
  },
});
