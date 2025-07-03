import axios from 'axios'

const USER_SERVICE_URL =  import.meta.env.VITE_USER_SERVICE_URL;

console.log("USER_SERVICE_URL", USER_SERVICE_URL);
export const userApi = axios.create({
    baseURL: USER_SERVICE_URL, 
})



// Add a request interceptor to include the token in the headers

userApi.interceptors.request.use( (config) => {
  
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;

} , 

(error) => {

     return Promise.reject(error);
})