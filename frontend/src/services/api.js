import axios from 'axios';

const API_URL = 'http://11.23.6.201:5000/api/auth';

export const register = async (name, email, password) => {
  return await axios.post(`${API_URL}/register`, { name, email, password });
};

export const login = async (email, password) => {
  return await axios.post(`${API_URL}/login`, { email, password });
};
