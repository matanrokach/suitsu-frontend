import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
  },
});

const getSuggestion = () => {
  return axiosInstance.get('/weather/suggestion');
};

const getHistory = () => {
  return axiosInstance.get('/weather/history');
};

const loginLocal = (email, password) => {
  const params = {
    email,
    password,
  };

  return axiosInstance.put('/auth/login', params);
};

const fetchCurrentUser = () => {
  return axiosInstance.get('/auth/current-user');
};

const setAuthHeader = (token) => {
  return (axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`);
};

const removeAuthHeader = (token) => {
  return (axiosInstance.defaults.headers.common.Authorization = null);
};

export default {
  getSuggestion,
  getHistory,
  loginLocal,
  fetchCurrentUser,
  setAuthHeader,
  removeAuthHeader,
};
