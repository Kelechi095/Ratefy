import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  userRating: [],
  averageRating: 0,
  averageRatingLoading: false,
  alert: "",
};

export const createRating = createAsyncThunk(
  "auth/createRating",
  async (values, { rejectWithValue }) => {
    try {
      const response = await axios.post("api/v1/rating/create", values);

      return response.data;
    } catch (err) {
      console.log(err.response.data);
      return rejectWithValue(err.response.data);
    }
  }
);

export const getRating = createAsyncThunk("auth/getRating", async () => {
  try {
    const response = await axios.get("api/v1/rating");

    return response.data;
  } catch (err) {
    console.log(err.response.data);
    return rejectWithValue(err.response.data);
  }
});

export const getAverageRating = createAsyncThunk(
  "auth/getAverageRating",
  async () => {
    try {
      const response = await axios.get("api/v1/rating/average");

      return response.data;
    } catch (err) {
      console.log(err.response.data);
      return rejectWithValue(err.response.data);
    }
  }
);

const ratingSlice = createSlice({
  name: "rating",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createRating.pending, (state, action) => {
      if (action.payload) {
      }
    });
    builder.addCase(createRating.fulfilled, (state, action) => {
      if (action.payload) {
        state.userRating = action.payload;
      }
    });
    builder.addCase(createRating.rejected, (state, action) => {});
    builder.addCase(getRating.pending, (state, action) => {});
    builder.addCase(getRating.fulfilled, (state, action) => {
      if (action.payload) {
        state.userRating = action.payload;
      }
    });
    builder.addCase(getRating.rejected, (state, action) => {});
    builder.addCase(getAverageRating.pending, (state, action) => {
        state.averageRatingLoading = true
    });
    builder.addCase(getAverageRating.fulfilled, (state, action) => {
      state.averageRating = action.payload;
      state.averageRatingLoading = false
    });
    builder.addCase(getAverageRating.rejected, (state, action) => {});
  },
});

export const {
  submitRating,
  setAlert,
} = ratingSlice.actions;

export default ratingSlice.reducer;
