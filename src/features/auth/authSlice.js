import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const loginWithServer = (userName, password) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('userName', userName);
			console.log('password', password);
			if (userName && password) {
				return resolve({
					name: userName,
					id: '1234567890',
				});
			}
			reject('username or password is incorrect');
		}, 1000);
	});
};

export const loginAction = createAsyncThunk(
	'auth/login',
	async ({ userName, password }) => {
		// try {
			const user = await loginWithServer(userName, password);
			return {
				userName: user.name,
				userId: user.id,
			}
		// } catch (error) {
		// 	return error.message;
		// }
	}
)

export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		user: {},
	},
	reducers: {
		
		logout: (state, action) => {
			state = authSlice.initialState;
		}
	},
	extraReducers: {
		[loginAction.fulfilled]: (state, action) => {
			state.user.name = action.payload.userName;
			state.user.id = action.payload.userId;
		},
		[loginAction.rejected]: (state, action) => {
			// state.user.error = action.payload.error;
		},
	}
});

export const { logout } = authSlice.actions;

export const selectUser = state => state.auth.user;

export default authSlice.reducer;