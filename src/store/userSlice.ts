import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { users } from '../lib/data';

interface UserState {
  users: typeof users;
  nameSearchTerm: string;
  usernameSearchTerm: string;
  emailSearchTerm: string;
  phoneSearchTerm: string;
}

const initialState: UserState = {
  users: [],
  nameSearchTerm: '',
  usernameSearchTerm: '',
  emailSearchTerm: '',
  phoneSearchTerm: '',
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  return users;
});

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setNameSearchTerm(state, action: PayloadAction<string>) {
      state.nameSearchTerm = action.payload;
    },
    setUsernameSearchTerm(state, action: PayloadAction<string>) {
      state.usernameSearchTerm = action.payload;
    },
    setEmailSearchTerm(state, action: PayloadAction<string>) {
      state.emailSearchTerm = action.payload;
    },
    setPhoneSearchTerm(state, action: PayloadAction<string>) {
      state.phoneSearchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export const {
  setNameSearchTerm,
  setUsernameSearchTerm,
  setEmailSearchTerm,
  setPhoneSearchTerm,
} = userSlice.actions;

export const selectFilteredUsers = (state: RootState) =>
  state.users.users.filter((user) =>
    user.name.toLowerCase().includes(state.users.nameSearchTerm.toLowerCase()) &&
    user.username.toLowerCase().includes(state.users.usernameSearchTerm.toLowerCase()) &&
    user.email.toLowerCase().includes(state.users.emailSearchTerm.toLowerCase()) &&
    user.phone.toLowerCase().includes(state.users.phoneSearchTerm.toLowerCase())
  );

export default userSlice.reducer;