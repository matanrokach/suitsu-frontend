import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, loginLocal, logout as logoutAction } from './authSlice';

const useAuth = (props) => {
	const dispatch = useDispatch();

	const login = ({ userName, password }) => {
		return dispatch(loginLocal({ userName, password }));
	};

	const logout = ({ userName, password }) => {
		return dispatch(logoutAction({ userName, password }));
	};

	return {
		login,
		logout,
	};
};

export { useAuth };
