import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ isLoggedIn, path, children, ...rest }) => {
	
	return (
		<Route {...rest} path={path} render={({ location }) => {
			if (isLoggedIn) {
				return children;
			}
			return <Redirect to={{
				pathname: 'login',
				// search: "?utm=your+face",
				state: { referrer: location.pathname }
			}} />
		}} />
	);

}

export default PrivateRoute;