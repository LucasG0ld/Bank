import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser } from '../utils/fetch';

export const TOKEN_STORAGE_KEY = 'jwtToken';

export const login = createAsyncThunk('auth/login', async ({ username, password, rememberMe }) => {
  const response = await loginUser(username, password);
  console.log(response.data.body.token);
  const token = response.data.body.token;
  
  if (rememberMe) {
    localStorage.setItem(TOKEN_STORAGE_KEY, token);
    console.log("localStorage.setItem(TOKEN_STORAGE_KEY, token)");
  } else {
    sessionStorage.setItem(TOKEN_STORAGE_KEY, token);
    console.log("sessionStorage.setItem(TOKEN_STORAGE_KEY, token)");
  }
  
  return response.data;
});

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const logout = () => {
  localStorage.removeItem(TOKEN_STORAGE_KEY);
  sessionStorage.removeItem(TOKEN_STORAGE_KEY); 
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loading: false,
    isLoggedIn: false,
    error: null,
    rememberMe: false,
    token: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.error = null;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.isLoggedIn = false;
        state.error = action.error.message;
        if (action.error.message === 'Error: User not found!') {
          // Afficher un message d'erreur approprié dans votre composant
          console.log('Utilisateur non trouvé');
        }
      });
  },
});

export default authSlice;