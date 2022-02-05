import axios from 'axios'

const api = axios.create({
    baseURL: `http://api.football-data.org/v2`,
    withCredentials: false,
    headers: {
        'X-Auth-Token': process.env.VUE_APP_SOCCER_API_KEY
    }
})

api.interceptors.request.use(null, error => {
    return Promise.reject(error);
});

api.interceptors.response.use(null, error => {
    return Promise.reject(error);
});


export default api;