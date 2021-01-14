import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import {
	Switch,
	Route,
	Link,
	useHistory,
} from 'react-router-dom';
import { Navbar, Container } from './styled-components';
import { Home, About, Profile, Login } from './pages';
import { PrivateRoute } from './routes';
import { selectUser } from './features/auth/authSlice';

const AuthorizedRouter = ({ userName }) => {
	const history = useHistory();
	const user = useSelector(selectUser);

	const isLoggedIn = !!user.id;

	const items = [
		{
			name: 'Home',
			path: '/',
			isPrivate: true,
		},
		{
			name: 'Profile',
			path: '/profile',
			isPrivate: true,
		},
		{
			name: 'About',
			path: '/about',
			isPrivate: true,
		},
	];

	const initialRoute = items.find((item) => item.name === 'Home');
	const onLogin = () => {
		initialRoute &&
			history.push(history.location.state.referrer || initialRoute.path);
	};

	return (
		<>
			<Navbar {...{ items, userName, isLoggedIn }} />
			<Container>
				<Switch>
					<PrivateRoute path='/about' isLoggedIn={isLoggedIn}>
						<About />
					</PrivateRoute>
					<PrivateRoute path='/profile' isLoggedIn={isLoggedIn}>
						<Profile />
					</PrivateRoute>
					<Route path='/login'>
						<Login {...{ initialRoute, onLogin }} />
					</Route>
					<PrivateRoute path='/' isLoggedIn={isLoggedIn}>
						<Home />
					</PrivateRoute>
				</Switch>
			</Container>
		</>
	);
};

export default AuthorizedRouter;
