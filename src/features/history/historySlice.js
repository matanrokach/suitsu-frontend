import { createSlice } from '@reduxjs/toolkit';
import { api } from '../../services';
import historyParser from './history.parser';

const historySlice = createSlice({
	initialState: {
		history: [],
		isLoading: false,
	},
	name: 'history',
	reducers: {
		getHistory: (state, action) => {
			state.isLoading = true;
		},
		getHistorySuccess: (state, action) => {
			state.history = action.payload.history;
			state.isLoading = false;
			console.log('History', action.payload);
		},
		getHistoryFailure: (state, action) => {
			state.history = [];
			state.error = action.payload;
			state.isLoading = false;
			console.log('error', action.payload);
		}
	},
});

export const { getHistory, getHistorySuccess, getHistoryFailure } = historySlice.actions;

export const selectHistory = state => state.history.history;
export const selectIsLoading = state => state.history.isLoading;

export default historySlice.reducer;

export const fetchHistory = () => async dispatch => {
	try {
		dispatch(getHistory());
		const response = await api.getHistory();

		const data = {
			history: (response?.data?.results || []).map(historyParser.parseHistory),
		};

		dispatch(getHistorySuccess(data));
	} catch (error) {
		dispatch(getHistoryFailure(error));
	}
}