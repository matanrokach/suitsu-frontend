import React from 'react';
import { useSelector } from 'react-redux';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AppRouter from './AppRouter';
import { selectUser } from './features/auth/authSlice';

const App = () => {
	const user = useSelector(selectUser);
	const isLoggedIn = user.id;

	return (
		<Router>
			<AppRouter {...{ userName: user.name, isLoggedIn }} />
		</Router>
	);
}

export default App;
