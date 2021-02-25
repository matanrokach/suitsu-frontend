import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ isLoggedIn, path, children: Children, ...rest }) => {
  return (
    <Route
      {...rest}
      path={path}
      render={() => {
        return <Children {...rest} />;
      }}
    />
  );
};

export default PrivateRoute;
