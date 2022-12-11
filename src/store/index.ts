import { configureStore } from '@reduxjs/toolkit';
import userReducer from './githubUser/githubUserSlice';
import repoReducer from './githubRepo/githubRepoSlice';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import recentSearch from './recentSearch';

const reducers = combineReducers({
  user: userReducer,
  repo: repoReducer,
  recentSearches: recentSearch,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['recentSearches'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
