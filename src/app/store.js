import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authReducer from '../features/auth/authSlice';
import historyReducer from '../features/history/historySlice';
import suggestionReducer from '../features/suggestion/suggestionSlice';

export default configureStore({
  reducer: {
		counter: counterReducer,
		auth: authReducer,
		history: historyReducer,
		suggestion: suggestionReducer,
  },
});
