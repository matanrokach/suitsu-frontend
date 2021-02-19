import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/auth/authSlice';
import { Label } from '../styled-components';
import Suggestion from '../features/suggestion/Suggestion';
import History from '../features/history/History';

const Home = props => {
	const user = useSelector(selectUser);

	return (
		<>
			{/* <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 40 }}>
				<Label>{`Hello ${user.name}`}</Label>
			</div> */}
			
			<Suggestion />
			<History />
		</>
	);
}

export default Home;