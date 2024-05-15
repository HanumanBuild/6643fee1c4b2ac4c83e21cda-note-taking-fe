import axios from 'axios';

const API_URL = process.env.REACT_APP_BACKEND_URL; // Ensure this environment variable is set in your .env file

const instance = axios.create({
  baseURL: API_URL
});

export default instance;