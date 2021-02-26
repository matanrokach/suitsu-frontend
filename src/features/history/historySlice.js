import { createSlice } from '@reduxjs/toolkit';
import { api } from '../../services';

const initialState = {
  history: [],
  isLoading: false,
  error: '',
};

const historySlice = createSlice({
  initialState,
  name: 'history',
  reducers: {
    getHistory: (state, action) => {
      state.error = '';
      state.isLoading = true;
    },
    getHistorySuccess: (state, action) => {
      state.history = action.payload.history;
      state.isLoading = false;
      console.log('History', action.payload);
    },
    getHistoryFailure: (state, action) => {
      return {
        ...initialState,
        error: action.payload.error.message,
      };
    },
  },
});

export const {
  getHistory,
  getHistorySuccess,
  getHistoryFailure,
} = historySlice.actions;

export const selectHistory = (state) => state.history.history;
export const selectIsLoading = (state) => state.history.isLoading;
export const selectError = (state) => state.history.error;

export default historySlice.reducer;

export const fetchHistory = () => async (dispatch) => {
  try {
    dispatch(getHistory());
    const response = await api.getHistory();

    const data = {
      history: response?.data?.results || [],
    };

    dispatch(getHistorySuccess(data));
  } catch (error) {
    dispatch(getHistoryFailure({ error }));
  }
};
