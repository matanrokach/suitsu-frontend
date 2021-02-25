import { createSlice } from '@reduxjs/toolkit';
import { api } from '../../services';

const suggestionSlice = createSlice({
  initialState: {
    suggestion: {},
    weather: {},
    isLoading: false,
  },
  name: 'suggestion',
  reducers: {
    getSuggestion: (state, action) => {
      state.isLoading = true;
    },
    getSuggestionSuccess: (state, action) => {
      state.suggestion = action.payload.suggestion.suggestion;
      state.weather = action.payload.suggestion.suggestion.weather;
      state.isLoading = false;
    },
    getSuggestionFailure: (state, action) => {
      state.suggestion = [];
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  getSuggestion,
  getSuggestionSuccess,
  getSuggestionFailure,
} = suggestionSlice.actions;

export const selectSuggestion = (state) => state.suggestion.suggestion;
export const selectWeather = (state) => state.suggestion.weather;
export const selectIsLoading = (state) => state.suggestion.isLoading;

export default suggestionSlice.reducer;

export const fetchSuggestion = () => async (dispatch) => {
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
};
