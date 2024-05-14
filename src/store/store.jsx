import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";
import studentInfoSlice from "../features/studentInfoSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    studentInfo: studentInfoSlice,
  },
});

export default store;
