import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  user: {
    username: string;
  } | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ username: string; password: string }>) {
      const { username } = action.payload;
      state.isAuthenticated = true;
      state.user = { username };
      localStorage.setItem('user', JSON.stringify({ username }));
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem('user');
    },
    checkAuth(state) {
      const savedUser = localStorage.getItem('user');
      if (savedUser) {
        state.isAuthenticated = true;
        state.user = JSON.parse(savedUser);
      }
    },
  },
});

export const { login, logout, checkAuth } = authSlice.actions;

export default authSlice.reducer;