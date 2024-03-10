import authSlice from "@/app/features/auth/authSlice";
import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./features/sidebar/sidebarSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    sidebar: sidebarSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {Dispatch}
export type AppDispatch = typeof store.dispatch;
