import { configureStore } from "@reduxjs/toolkit";
import authReducer, { getUserDetails } from "./authSlice";
import ratingReducer, { calculateAverageRating } from "./ratingSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    rating: ratingReducer
  },
});


store.dispatch(getUserDetails())
store.dispatch(calculateAverageRating())
