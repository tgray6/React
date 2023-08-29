import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";

export const store = configureStore({
  reducer: userSlice.reducer,
});

export type RootState = ReturnType<typeof store.getState>;
