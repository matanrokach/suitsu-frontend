import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import historyReducer from '../features/history/historySlice';
import suggestionReducer from '../features/suggestion/suggestionSlice';

export default configureStore({
  reducer: {
		auth: authReducer,
		history: historyReducer,
		suggestion: suggestionReducer,
  },
});
