import axios from 'axios';

const PROXY_URL = import.meta.env.VITE_PROXY_URL || 'http://localhost:3000';

axios.defaults.baseURL = PROXY_URL;

export default axios;
