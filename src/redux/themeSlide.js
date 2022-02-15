import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  darkMode: localStorage.getItem('darkMode')=== 'true' || false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setDarkTheme(state) {
      localStorage.setItem('darkMode', !state.darkMode);
        state.darkMode = !state.darkMode;
        
    },
  },
});

export const { setDarkTheme } = themeSlice.actions;

export default themeSlice.reducer;
