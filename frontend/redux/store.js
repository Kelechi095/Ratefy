import { configureStore } from "@reduxjs/toolkit";
import authReducer, { getUserDetails } from "./authSlice";
import ratingReducer from "./ratingSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    rating: ratingReducer
  },
});


store.dispatch(getUserDetails())
