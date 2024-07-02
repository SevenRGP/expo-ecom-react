import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: false,
    sessionId: null
  },
  reducers: {
    login: (state, action) => {
      console.log(action.payload);
      state.user = action.payload.user;
      state.sessionId = action.payload.sessionId;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.sessionId = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer; 