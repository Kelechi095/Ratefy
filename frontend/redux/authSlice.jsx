import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";


const initialState = {
  user: null,
  name: "",
  email: "",
  id: "",
  registerStatus: "",
  loginStatus: "",
  getUserDetailsStatus: "",
  alertText: "",
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (values, { rejectWithValue }) => {
    try {
      const response = await axios.post("api/v1/users/register", {
        name: values.name,
        email: values.email,
        password: values.password,
      });

      return response.data;
    } catch (err) {
      console.log(err.response.data);
      return rejectWithValue(err.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (values, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/v1/users/login", {
        email: values.email,
        password: values.password,
      });

      return response.data;
    } catch (err) {
      console.log(err.response.data);
      return rejectWithValue(err.response.data);
    }
  }
);
export const getUserDetails = createAsyncThunk(
  "auth/getUserDetails",
  async (values, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/v1/users/user-info");
      return response.data;

    } catch (err) {
      console.log(err.response.data);
      return rejectWithValue(err.response.data);
    }
  }
);
export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (values, { rejectWithValue }) => {
    try {
      await axios.get("api/v1/users/logout");
    } catch (err) {
      console.log(err.response.data);
      return rejectWithValue(err.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      if (action.payload) {
        const user = action.payload.user;
        state.user = action.payload.user;
        state.name = user.name;
        state.email = user.email;
        state.id = user._id;
        state.registerStatus = "success";
        state.alertText = "";
        toast.success("Registration successful");
      }
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.registerStatus = "rejected";
      state.registerError = action.payload.msg;
      state.alertText = action.payload.msg;
      toast.error(`Registration failed! ${action.payload.msg}`);
    });

    builder.addCase(loginUser.pending, (state) => {
      state.loginStatus = "pending";
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      if (action.payload) {
        const user = action.payload.user;
        state.user = action.payload.user;
        state.name = user.name;
        state.email = user.email;
        state.id = user._id;
        state.loginStatus = "success";
        state.alertText = "";
        toast.success("Login successful");
      }
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loginStatus = "rejected";
      state.loginError = action.payload.msg;
      state.alertText = action.payload.msg;
      toast.error(`Login failed! ${action.payload.msg}`);
    });
    
    builder.addCase(logoutUser.fulfilled, (state, action) => {
      state.user = "";
      state.userDetails = null;
      state.name = "";
      state.email = "";
      state.id = "";
      state.alertText = "";
    });
    
    builder.addCase(getUserDetails.pending, (state, action) => {
      state.getUserDetailsStatus = "pending"
    });
    builder.addCase(getUserDetails.fulfilled, (state, action) => {
      state.getUserDetailsStatus = ""
      if (action.payload) {
        const user = action.payload.user;
        state.user = action.payload.user;
        state.name = user.name;
        state.email = user.email;
        state.id = user._id;
        state.getUserDetailsStatus = "success";
        state.alertText = "";
      }
    });
    builder.addCase(getUserDetails.rejected, (state, action) => {
      state.getUserDetailsStatus = ""
      state.user = "";
      state.name = "";
      state.email = "";
      state.id = "";
      state.alertText = "";
    });
  },
});

export const { } = authSlice.actions;

export default authSlice.reducer;
