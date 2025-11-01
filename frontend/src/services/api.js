import axios from "axios";

const API = axios.create({
  baseURL: "http://10.0.2.2:5000/api", // Android emulator
  // For iOS simulator, use http://localhost:5000
});

export default API;
