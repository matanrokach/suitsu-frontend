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

export default {
	getSuggestion,
	getHistory,
}