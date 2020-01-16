import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333',
    headers: {
        'Content-Type': 'application/json;charshet=utf-8',
        'Access-Control-Allow-Origin': '*'
    }
});

export default api;