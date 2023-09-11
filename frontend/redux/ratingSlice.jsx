import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  userRating: [],
  averageRating: 0,
};

const ratingSlice = createSlice({
  name: "rating",
  initialState,
  reducers: {
    submitRating(state, action) {
      state.userRating.push(action.payload);
    },
    calculateAverageRating(state) {
      const allRating = state.userRating.map((rate) => rate.rate);
      if (allRating.length > 0) {
        const totalRating = allRating.reduce((a, b) => a + b, 0)
        const averageRating = totalRating / allRating.length

        state.averageRating =  averageRating === 1 || averageRating === 2 || averageRating === 3 || averageRating === 4 || averageRating === 5 ? averageRating : averageRating.toFixed(1)
      }
    },
  },
});

export const { submitRating, calculateAverageRating } = ratingSlice.actions;

export default ratingSlice.reducer;
