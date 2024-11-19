import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL ?? 'https://dummyjson.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';

// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export {
    axios
}