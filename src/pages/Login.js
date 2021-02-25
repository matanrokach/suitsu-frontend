import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from 'react-router-dom';
import { useAuth } from '../features/auth/Auth';
import { LoginLocal } from '../components';
import LoginHeader from '../components/LoginHeader/LoginHeader';

const Strings = {
  LoginHeader: 'Login',
};

const Login = (props) => {
  const { login } = useAuth();

  const history = useHistory();

  // const initialRoute = items.find((item) => item.name === 'Home');
  const initialRoute = { name: 'Home', path: '/' };

  const onLogin = () => {
    initialRoute &&
      history.push(history.location.state.referrer || initialRoute.path);
  };

  const onLoginClick = (userName, password) => async (e) => {
    await login({ userName, password });
    onLogin && onLogin();
  };

  return (
    <>
      <LoginHeader {...{ header: Strings.LoginHeader }} />
      <LoginLocal {...{ onLogin: onLoginClick }} />
    </>
  );
};

export default Login;
