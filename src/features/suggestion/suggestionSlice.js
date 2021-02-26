import { createSlice } from '@reduxjs/toolkit';
import { api } from '../../services';

const initialState = {
  suggestion: [],
  weather: {},
  isLoading: false,
  error: '',
};

const suggestionSlice = createSlice({
  initialState,
  name: 'suggestion',
  reducers: {
    getSuggestion: (state, action) => {
      state.error = '';
      state.isLoading = true;
    },
    getSuggestionSuccess: (state, action) => {
      state.suggestion = action.payload.suggestion.suggestion;
      state.weather = action.payload.suggestion.suggestion.weather;
      state.isLoading = false;
    },
    getSuggestionFailure: (state, action) => {
      return {
        ...initialState,
        error: action.payload.error.message,
      };
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
export const selectError = (state) => state.suggestion.error;

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
    dispatch(getSuggestionFailure({ error }));
  }
};
