import axios from 'axios';

const api = axios.create({
    baseURL: 'http://google.com'
})

export default api;