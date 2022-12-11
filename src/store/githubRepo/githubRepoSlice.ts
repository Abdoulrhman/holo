import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import GithubService from '../../network/githubService';

const initialState: GithubRepoState = {
  loading: false,
  repos: [],
  error: '',
};

const { searchByRepo } = GithubService;
// Generates pending, fulfilled and rejected action types
export const searchRepoGithub = createAsyncThunk(
  'user/searchUser',
  async (data: GithubSearch) => {
    const { q, per_page, page } = data;

    const response = await searchByRepo(q, per_page, page);
    return response.items;
  },
);

const repoSlice = createSlice({
  name: 'repo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchRepoGithub.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      searchRepoGithub.fulfilled,
      (state, action: PayloadAction<IGithubRepo[]>) => {
        state.loading = false;
        state.repos = action.payload;
        state.error = '';
      },
    );
    builder.addCase(searchRepoGithub.rejected, (state, action) => {
      state.loading = false;
      state.repos = [];
      state.error = action.error.message || 'Something went wrong!';
    });
  },
});

export default repoSlice.reducer;
