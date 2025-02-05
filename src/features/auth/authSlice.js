import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api, storageService } from '../../services';

const Strings = {
	DefaultErrorMessage: 'Could not log in, try again later :(',
};

const initialState = {
  user: {},
  error: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state, action) => {
			return state;
		},
    loginSuccess: (state, action) => {
      state.user.name = action.payload.name;
      state.user.id = action.payload.id;
      state.user.email = action.payload.email;
    },
    loginFailure: (state, action) => {
      state.error = action.payload.error.message || Strings.DefaultErrorMessage;
    },
    logoutStart: (state, action) => {
			return state;
		},
    logoutSuccess: (state, action) => {
      return initialState;
    },
    logoutFailure: (state, action) => {
			return initialState;
		},
  },
});

export const {
  logoutStart,
  logoutSuccess,
  logoutFailure,
  loginStart,
  loginSuccess,
  loginFailure,
} = authSlice.actions;

export const selectUser = (state) => state.auth.user;
export const selectLoginError = (state) => state.auth.error;

export default authSlice.reducer;

export const loginLocal = ({ userName, password }) => async (dispatch) => {
  try {
    dispatch(loginStart());
    const tokenRes = await api.loginLocal(userName, password);
    const token = tokenRes?.data?.token;

    storageService.setItem('token', token);
    api.setAuthHeader(token);

    const userRes = await api.fetchCurrentUser();
    const user = userRes?.data;
		console.log(">>> user", user)

    const { name, id, email } = user;

    dispatch(loginSuccess({ name, id, email }));
  } catch (error) {
    console.log('ERROR', error);
    dispatch(loginFailure({ error }));
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch(logoutStart({}));

    // sending a request to the backend is optional
    // await api.logout();

    storageService.removeItem('token');
    api.removeAuthHeader();

    dispatch(logoutSuccess({}));
  } catch (error) {
    console.log('ERROR', error);
    dispatch(logoutFailure({ error }));
  }
};
