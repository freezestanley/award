import axios from 'axios';
import cookie from '@/utils/cookie';
const base = process.env.apiUrl === 'prod' ? 'http://aliyun.eagle711.win:8082' : '/api';
export function getPerson(params) {
  return axios({
    url: `${base}/total_user`,
    method: 'POST',
    data: params,
  });
}
export function submitPhone(params) {
  return axios({
    url: `${base}/login`,
    method: 'POST',
    data: params,
  });
}
export function getVerify(params) {
  return axios({
    url: `${base}/verify_code`,
    method: 'POST',
    data: params,
  });
}
export function getQrcode(params) {
  return axios({
    url: `${base}/receipt_address`,
    method: 'POST',
    data: params,
    headers: {
      token: params || cookie.get('token'),
    },
  });
}
export function userStatus(params) {
  return axios({
    url: `${base}/user_status`,
    method: 'POST',
    headers: {
      token: params || cookie.get('token'),
    },
  });
}
export function token_address(address, token) {
  return axios({
    url: `${base}/update_token_address`,
    method: 'POST',
    data: { address },
    headers: {
      token: token || cookie.get('token'),
    },
  });
}
export function pay_address(token) {
  return axios({
    url: `${base}/receipt_address`,
    method: 'POST',
    data: {},
    headers: {
      token: token || cookie.get('token'),
    },
  });
}
export function pay_done(token) {
  return axios({
    url: `${base}/complete_pay`,
    method: 'POST',
    data: {},
    headers: {
      token: token || cookie.get('token'),
    },
  });
}

export function rece_qrcode(token) {
  return axios({
    url: `${base}/share_qr`,
    method: 'POST',
    data: {},
    headers: {
      token: token || cookie.get('token'),
    },
  });
}

export function goto_look(token) {
  return axios({
    url: `${base}/transfer_badge_link`,
    method: 'POST',
    data: {},
    headers: {
      token: token || cookie.get('token'),
    },
  });
}
