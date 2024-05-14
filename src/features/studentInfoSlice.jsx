import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  studentsList: [],
};

export const studentInfoSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    addStudent: (state, action) => {
      const { name, subject, marks } = action.payload;
      const id = state.studentsList.length;
      state.studentsList.push({ id, name, subject, marks });
    },
  },
});

export const { addStudent } = studentInfoSlice.actions;

export default studentInfoSlice.reducer;
