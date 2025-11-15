import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDark: localStorage.getItem("todo-theme") === "true" || false,
  },
  reducers: {
    toggleTheme(state) {
      state.isDark = !state.isDark;
      // localStorage.setItem("todo-theme", String(state.isDark));
    },
  },
});

export default themeSlice.reducer;

export const { toggleTheme } = themeSlice.actions;
