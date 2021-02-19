import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../services';

export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		user: {},
		error: '',
	},
	reducers: {
		login: (state, action) => {},
		loginSuccess: (state, action) => {
			state.user.name = action.payload.userName;
			state.user.id = action.payload.userId;
		},
		loginFailure: (state, action) => {
			state.error = action.payload.error;
		},
		logout: (state, action) => {
			// state = authSlice.initialState;
		},
		logoutSuccess: (state, action) => {
			state = authSlice.initialState;
		},
		logoutFailure: (state, action) => {
			// state = authSlice.initialState;
		},
	},
});

export const {
	logout,
	logoutSuccess,
	logoutFailure,
	login,
	loginSuccess,
	loginFailure,
} = authSlice.actions;

export const selectUser = (state) => state.auth.user;
export const selectLoginError = (state) => state.auth.error;

export default authSlice.reducer;

export const loginLocal = ({ userName, password }) => async (dispatch) => {
	try {
		dispatch(login());
		const token = await api.loginLocal(userName, password);
		const user = await api.fetchCurrentUser();
		dispatch(loginSuccess({ userName: user.name, userId: user.id }));
	} catch (error) {
		console.log('ERROR', error);
		dispatch(loginFailure({ error }));
	}
};
