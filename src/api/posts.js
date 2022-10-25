import axios from 'axios';

//base url for api
export default axios.create({
    baseURL: 'http://localhost:3500'
});