import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000/api/auth'; // Use your backend URL

export const register = async (name, email, password) => {
  return await axios.post(`${API_URL}/register`, { name, email, password });
};

export const login = async (email, password) => {
  return await axios.post(`${API_URL}/login`, { email, password });
};
