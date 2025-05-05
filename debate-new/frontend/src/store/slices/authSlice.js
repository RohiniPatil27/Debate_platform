import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  loading: false,
  error: null,
  token: null,
  tokenExpiration: null,
  user: {
    _id: "",
    email: "",
    username: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Login
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.tokenExpiration = action.payload.tokenExpiration;
      state.loading = false;
      state.error = null;
    },

    // Logout
    logout: () => initialState,

    // Update Profile
    updateProfile: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },

    // Set Auth Error
    setAuthError: (state, action) => {
      state.error = action.payload;
    },

    // Set Loading
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { login, logout, updateProfile, setAuthError, setLoading } =
  authSlice.actions;

export default authSlice.reducer;
