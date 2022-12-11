import { createSlice } from '@reduxjs/toolkit';

export const recentSearchSlice = createSlice({
  name: 'recentSearch',
  initialState: {
    recentSearch: [],
  },
  reducers: {
    addRecentSearch: (state, action) => {
      const { recentSearch } = state;
      const { payload } = action;

      const isExist = recentSearch.find((item) => item === payload);

      if (!isExist) {
        state.recentSearch = [...recentSearch, payload];
      }
    },
    removeRecentSearch: (state, action) => {
      const { recentSearch } = state;
      const { payload } = action;

      state.recentSearch = recentSearch.filter((item) => item !== payload);
    },

    clearRecentSearch: (state) => {
      state.recentSearch = [];
    },
  },
});

export const { addRecentSearch, clearRecentSearch, removeRecentSearch } =
  recentSearchSlice.actions;

export default recentSearchSlice.reducer;
