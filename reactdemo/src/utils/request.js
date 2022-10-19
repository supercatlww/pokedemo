import axios from "axios";

const service = axios.create({
  //baseURL: "http://localhost:3000/", // api 的 base_url
  timeout: 0, // 请求超时时间
});

// Add a request interceptor
service.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // config.headers["Authorization"] =
    //   "bearer " + localStorage.getItem("access_token");
    // config.headers["Content-Type"] = "application/json";
    // config.headers["Accept"] = "application/vnd.app.v1+json";
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
service.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default service;
