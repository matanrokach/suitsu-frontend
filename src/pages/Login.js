import React, { useState } from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { Input, Label, Row, Button, Text } from '../styled-components';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import { useAuth } from '../features/auth/Auth';

const StyledRow = styled(Row)`
	margin-top: 10px;
	margin-bottom: 10px;
`;

const Login = ({}) => {
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');

	const { login } = useAuth();

	const history = useHistory();
	// const initialRoute = items.find((item) => item.name === 'Home');
	const initialRoute = {name: 'Home', path: '/'};
	const onLogin = () => {
		initialRoute &&
			history.push(history.location.state.referrer || initialRoute.path);
	};

	const onLoginClick = async (e) => {
		await login({ userName, password });
		onLogin && onLogin();
	};

	return (
		<Grid
			container
			style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 20 }}
		>
			<Grid
				item
				lg={6}
				style={{
					boxSizing: 'border-box',
					display: 'flex',
					flex: 1,
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					borderWidth: 1,
					borderColor: '#aaaaaa',
					borderStyle: 'solid',
				}}
			>
				<Text >Login</Text>
				<StyledRow>
					<Label for={'username'}>
						<Text>{'Username'}</Text>
					</Label>
					<Input
						id={'username'}
						placeholder={'username'}
						onChange={(e) => setUserName(e.target.value)}
						value={userName}
					/>
				</StyledRow>
				<StyledRow>
					<Label for={'password'}>
						<Text>{'Password'}</Text>
					</Label>
					<Input
						type={'password'}
						id={'password'}
						placeholder={'password'}
						onChange={(e) => setPassword(e.target.value)}
						value={password}
					/>
				</StyledRow>
				<StyledRow>
					<Button onClick={onLoginClick}>
						<Text>{'LOGIN'}</Text>
					</Button>
				</StyledRow>
			</Grid>
		</Grid>
	);
};

export default Login;
