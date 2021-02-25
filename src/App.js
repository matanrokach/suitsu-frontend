import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { selectUser } from './features/auth/authSlice';
import { Navbar, Container } from './styled-components';
import { Home, About, Profile, Login } from './pages';
import { PrivateRoute } from './routes';

const App = () => {
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

  // const initialRoute = items.find((item) => item.name === 'Home');
  // const onLogin = () => {
  // 	initialRoute &&
  // 		history.push(history.location.state.referrer || initialRoute.path);
  // };

  return (
    <Router>
      <Navbar {...{ items, userName: user.name, isLoggedIn }} />
      <Container>
        <Switch>
          <PrivateRoute path='/about' isLoggedIn={isLoggedIn}>
            <About />
          </PrivateRoute>
          <PrivateRoute path='/profile' isLoggedIn={isLoggedIn}>
            <Profile />
          </PrivateRoute>
          <Route path='/login'>
            <Login />
          </Route>
          <PrivateRoute path='/' isLoggedIn={isLoggedIn}>
            <Home />
          </PrivateRoute>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
