import axios from "axios"
import { baseURL } from "./constant"
import queryString from 'query-string'

const axiosClient = axios.create({
    baseURL,
    headers: {
        'content-type': 'application/json'
    },
    paramsSerializer: params => queryString.stringify(params)
});
axiosClient.interceptors.request.use(async (config) => {
    return config;
});
axiosClient.interceptors.response.use(async (response) =>{
    if(response && response.data){
        return response.data;
    }
    return response;
}, (error : Error) =>{
    throw(error);
})
export default axiosClient;