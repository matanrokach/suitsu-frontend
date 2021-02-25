const setItem = (key, value) => {
  return localStorage.setItem(key, value);
};

const getItem = (key) => {
  return localStorage.getItem(key);
};

const removeItem = (key) => {
  return localStorage.removeItem(key);
};

export default {
  setItem,
  getItem,
  removeItem,
};
