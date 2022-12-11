import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import GithubService from '../../network/githubService';

const initialState: GithubUserState = {
  loading: false,
  users: [],
  error: '',
};

const { searchByUser } = GithubService;
// Generates pending, fulfilled and rejected action types
export const searchUserGithub = createAsyncThunk(
  'user/searchUser',
  async (data: GithubSearch) => {
    const { q, per_page, page } = data;
    const response = await searchByUser(q, per_page, page);
    return response.items;
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchUserGithub.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      searchUserGithub.fulfilled,
      (state, action: PayloadAction<IGithubUser[]>) => {
        state.loading = false;
        state.users = action.payload;
        state.error = '';
      },
    );
    builder.addCase(searchUserGithub.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message || 'Something went wrong!';
    });
  },
});

export default userSlice.reducer;
