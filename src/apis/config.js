import axios from "axios";

console.log(process.env)
export const axiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie"
})

axiosInstance.interceptors.request.use(function (config) {
  // Do something before request is sent
  console.log(config.url)

  config.url += `api_key=bebea00a770e7201f372567aaed2893a`;
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});