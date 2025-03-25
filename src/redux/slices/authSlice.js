import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL; // Ensure the base URL is set
const apiUrl = axios.create({
  baseURL,
});


export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ id, token }, { rejectWithValue }) => {
    try {
      const response = await apiUrl.get(`/register/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


export const login = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await apiUrl.post("auth/login", data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


const initialState = {
  loading: false,
  token: localStorage.getItem("user_token") || "",
  data: {},
  error: [],
  
};


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearState: (state) => {
      state.loading = false;
      state.token = "";
      state.data = {};
      state.error = [];
     
    },
    clearError: (state) => {
      state.loading = false;
      state.error = [];
    },
  },
  extraReducers: (builder) => {
    
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = [];
        state.data = {};
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });

    
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = [];
        state.data = {};
        localStorage.removeItem("user_token");
        state.token = ""; 
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        localStorage.setItem("user_token", action.payload.token);
        state.data = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export const { clearState, clearError } = authSlice.actions;
export default authSlice.reducer;

