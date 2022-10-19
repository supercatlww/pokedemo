import axios from 'axios';
import {Message} from 'element-ui';
import Cookies from 'js-cookie'
import router from '../router/index'

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // api 的 base_url
    timeout: 0, // 请求超时时间
})

// Add a request interceptor
service.interceptors.request.use(function (config) {
    // Do something before request is sent
    // if(Cookies.get("access_token") == 'undefined' || !Cookies.get("access_token")) {
    //     router.replace('/login')
    //     return;
    // }
    //config.headers.common['Authorization'] = 'bearer ' + Cookies.get("access_token");
    config.headers.common['Authorization'] = 'bearer ' + localStorage.getItem("access_token");
    config.headers.common['Content-Type'] = 'application/json';
    config.headers.common['Accept'] = 'application/vnd.app.v1+json';
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
service.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if(response.data.status_code == 500) {
    	//未登陆
    	router.replace('/login')
    	return null;
    }else if(response.data.status_code == 501) {
        //没有访问权限
      router.replace('/login')
        return null;
    } else if(response.data.status_code == 600) {
      for(let msg in response.data.message) {
        Message.error(response.data.message[msg][0]);
        return null; 
      }
    } else {
        if(response.config.url == 'api/db-archives/export'){
            return response;
        }
    	return response.data;
    }
    
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });  

export default service
