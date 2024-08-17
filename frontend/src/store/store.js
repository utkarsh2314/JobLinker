import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./slices/jobSlice";
import userReducer from "./slices/userSlice";

const store = configureStore({
  reducer: {
    jobs: jobReducer,
    user: userReducer,
  },
});

export default store;
