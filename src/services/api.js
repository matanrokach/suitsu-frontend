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
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       console.log('userName', userName);
  //       console.log('password', password);
  //       if (userName && password) {
  //         const token =
  //           'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1hdGFuIFJva2FjaCIsImlkIjoxMjM0NTY3ODkwfQ.qvtz2ZinHzEo6iL073hp5ldlw-cGs-kYa0TJEGvig60';
  //         return resolve(token);
  //       }
  //       reject('username or password is incorrect');
  //     }, 1000);
  //   });
};

const fetchCurrentUser = () => {
  return axiosInstance.get('/auth/current-user');
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       return resolve({
  //         name: 'Matan Rokach',
  //         id: '1234567890',
  //       });
  //     }, 1000);
  //   });
};

const setAuthHeader = (token) => {
	return axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export default {
  getSuggestion,
  getHistory,
  loginLocal,
  fetchCurrentUser,
  setAuthHeader,
};
