import axios from 'axios'

const instance = axios.create();

instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    console.log('interceptor response', response)
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    console.log('interceptor error', error)
    if (!error.response) {
      console.log('Network is not responding')
    } else {
      const status = error.response.status
      // const response = error.response.data
      if (status === 401 || status === 400) {
        // console.log(error.response)
        return Promise.reject(error.response);
      }
    }
    // return Promise.reject(error);
  });

export default instance