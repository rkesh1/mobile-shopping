// First we need to import axios.js
import axios from 'axios';
import config from '../config';
// Next we make an 'instance' of it
const instance = axios.create({
// .. where we make our configurations
    baseURL: config.apiBaseUrl
});

// Where you would set stuff like your 'Authorization' header, etc ...
instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// Also add/ configure interceptors && all the other cool stuff
instance.interceptors.request.use(request => {
    console.log({request});
    // Edit request config
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

instance.interceptors.response.use(response => {
    console.log({response});
    // Edit response config
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

export default instance;