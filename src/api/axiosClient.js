import axios from 'axios';


const axiosClients = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {'Content-Type': 'application/json'}
  });
  // Add a request interceptor
axiosClients.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error.response);
  }); 

// Add a response interceptor
axiosClients.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log('RESPONSE',response)
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });
  export default axiosClients;