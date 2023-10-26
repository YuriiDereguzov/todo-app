import { createSlice } from "@reduxjs/toolkit";

const viewSlice = createSlice({
  name: "view",
  initialState: { view: "All" },
  reducers: {
    editView: (state, action) => {
      state.view = action.payload.view;
    },
  },
});

export const { editView } = viewSlice.actions;

export default viewSlice.reducer;
