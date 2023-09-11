import { configureStore } from "@reduxjs/toolkit";
import authReducer, { getUserDetails } from "./authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});


store.dispatch(getUserDetails())
