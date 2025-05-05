import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/authSlice";
import alertReducer from "./slices/alertSlice";

const store = configureStore({
  reducer: {
    alert: alertReducer,
    auth: authReducer,
  },
});

export default store;
