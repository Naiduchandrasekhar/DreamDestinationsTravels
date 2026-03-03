import { createSlice } from '@reduxjs/toolkit';

// helper to load persisted language from localStorage
const loadLanguage = () => {
  try {
    const stored = localStorage.getItem('preferredLanguage');
    return stored || 'en';
  } catch (e) {
    return 'en';
  }
};

// initial state will keep track of the currently selected language code
const initialState = {
  current: loadLanguage(), // default or persisted value
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage(state, action) {
      state.current = action.payload;
      try {
        localStorage.setItem('preferredLanguage', action.payload);
      } catch (e) {
        // ignore write errors
      }
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
