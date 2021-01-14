import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, loginAction, logout as logoutAction } from './authSlice';

const useAuth = (props) => {

	const dispatch = useDispatch();
	const user = useSelector(selectUser);

	const login = ({ userName, password }) => {
		return dispatch(loginAction({userName, password}));
	}
	
	const logout = ({ userName, password }) => {
		return dispatch(logoutAction({userName, password}));
	}


	return {
		user,
		login,
		logout,
	};
}

export {
	useAuth,
}