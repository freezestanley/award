import axios from 'axios';
// import { message, Modal } from 'antd';
import { Toast } from 'zarm';
import router from 'umi/router';
const { hostname } = window.location;

// create an axios instance
const service = axios.create({
  baseURL: '', // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 30 * 1000, // request timeout
});

// request interceptor
service.interceptors.request.use(
  config => {
    if (config.url.indexOf('checkLogin') < 0 && hostname !== 'localhost') {
      config.url = `/xman-operation-analysis${config.url}`;
    }

    const uid = window.sessionStorage.getItem('user') || '';

    if (config.method === 'post') {
      config.url = config.url + '?hackuid=' + uid;
    }

    if (config.method === 'get') {
      config.params.hackuid = uid;
    }

    return config;
  },
  error => {
    // do something with request error
    /* eslint-disable */
    // console.log(error) // for debug
    return Promise.reject(error);
  },
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data || {};
    const msg = res.respMsg;
    const code = res.respCode;

    // console.log('======>>>>.requerss==>', res);
    if (code != 0) {
      // con;
      Toast.show(msg);
    }

    // console.log('request-=====>>>>>', res);
    return res;
  },
  error => {
    const { host, hash } = location;

    if (host.indexOf('localhost') > -1) {
      return;
    }

    const { url } = error.config;
    /* eslint-disable */
    // console.log('err' + error) // for debug
    if (error.toString().indexOf('302') > -1 || url.indexOf('/api/checkLogin') > -1) {
    } else {
      message.error('服务器异常，请稍后再试' || error.message);
    }
    return Promise.reject(error);
  },
);

export default service;
