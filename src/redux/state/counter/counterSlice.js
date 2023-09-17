import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    message: "",
  },
  reducers: {
    increment: (state) => {
      if (state.value >= 100) {
        state.message = "Value can't be greater than 100";
      } else {
        state.value = state.value + 1;
      }
    },
    decrement: (state) => {
      if (state.value > 0) {
        state.value = state.value - 1;
      } else {
        state.message = "Value can't be less than 0";
      }
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
