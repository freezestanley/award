import axios from 'axios';

export function qrcode(params) {
  return axios({
    url: '/api/yxb/login',
    method: 'POST',
    data: params,
  });
}