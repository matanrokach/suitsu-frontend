import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { Input, Label, Row, Button, Text } from '../../styled-components';
import { selectLoginError } from '../../features/auth/authSlice';
import styles from './LoginLocal.module.scss';

const Strings = {
  Username: 'Username',
  Password: 'Password',
  LoginButtonText: 'LOGIN',
};

const LoginLocal = ({ onLogin: onLoginClick }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const loginError = useSelector(selectLoginError);

  return (
    <Grid
      container
      style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 20 }}
    >
      <Grid item lg={6} className={styles.container}>
        <div className={styles.row}>
          <Label for={'username'}>{Strings.Username}</Label>
          <Input
            id={'username'}
            placeholder={Strings.Username}
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
          />
        </div>
        <div className={styles.row}>
          <Label for={'password'}>{Strings.Password}</Label>
          <Input
            type={'password'}
            id={'password'}
            placeholder={Strings.Password}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className={styles.row}>{loginError}</div>
        <div className={styles.row}>
          <Button
            onClick={onLoginClick(userName, password)}
            className={styles.button}
          >
            {Strings.LoginButtonText}
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default LoginLocal;
