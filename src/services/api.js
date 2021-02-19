import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'http://localhost:8000',
	headers: {
		'Content-Type': 'application/json',
	}
});

const getSuggestion = () => {
	return axiosInstance.get('/weather/suggestion');
};

const getHistory = () => {
	return axiosInstance.get('/weather/history');
};

const loginLocal = (userName, password) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('userName', userName);
			console.log('password', password);
			if (userName && password) {
				const token = 'euiafgiuwhfuahfauhfbuyaf';
				return resolve(token);
				// return resolve({
				// 	name: userName,
				// 	id: '1234567890',
				// });
			}
			reject('username or password is incorrect');
		}, 1000);
	});
};

const fetchCurrentUser = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			// console.log('userName', userName);
			// console.log('password', password);
			// if (userName && password) {
				return resolve({
					name: 'Matan Rokach',
					id: '1234567890',
				});
			// }
			// reject('username or password is incorrect');
		}, 1000);
	});
};

export default {
	getSuggestion,
	getHistory,
	loginLocal,
	fetchCurrentUser,
}