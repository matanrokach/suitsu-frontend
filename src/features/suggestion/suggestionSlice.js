import { createSlice } from '@reduxjs/toolkit';
import { api } from '../../services';

const suggestionSlice = createSlice({
	initialState: {
		suggestion: {},
		isLoading: false,
	},
	name: 'suggestion',
	reducers: {
		getSuggestion: (state, action) => {
			state.isLoading = true;
		},
		getSuggestionSuccess: (state, action) => {
			state.suggestion = action.payload.suggestion;
			state.isLoading = false;
			console.log('Suggestion', action.payload);
		},
		getSuggestionFailure: (state, action) => {
			state.suggestion = [];
			state.error = action.payload;
			state.isLoading = false;
			console.log('error', action.payload);
		}
	},
});

export const { getSuggestion, getSuggestionSuccess, getSuggestionFailure } = suggestionSlice.actions;

export const selectSuggestion = state => state.suggestion.suggestion;
export const selectIsLoading = state => state.suggestion.isLoading;

export default suggestionSlice.reducer;

export const fetchSuggestion = () => async dispatch => {
	try {
		dispatch(getSuggestion());
		const response = await api.getSuggestion();

		const data = {
			suggestion: response?.data || {},
		};

		dispatch(getSuggestionSuccess(data));
	} catch (error) {
		dispatch(getSuggestionFailure(error));
	}
}