import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from './store';
import { users } from '../lib/data';

interface UserState {
  users: typeof users;
  searchTerm: string;
}

const initialState: UserState = {
  users: [],
  searchTerm: '',
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  return users;
});

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export const { setSearchTerm } = userSlice.actions;

export const selectFilteredUsers = (state: RootState) =>
  state.users.users.filter((user) =>
    user.name.toLowerCase().includes(state.users.searchTerm.toLowerCase())
  );

export default userSlice.reducer;