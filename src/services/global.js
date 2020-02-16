import axios from 'axios';

import request from '@/utils/request.js';

// 登录
export function login(params) {
  return Promise.resolve({
    data: {
      respCode: 0,
      data: {
        name: '盎司12094304912',
        phone: '1289284434',
      },
    },
  });
  // return axios({
  //   url: '/api/ants/login',
  //   method: 'POST',
  //   data: params,
  // });
}

// 获取单个游戏信息
export function gameInfo(params) {
  return request({
    url: '/api/public/game',
    method: 'GET',
    params,
  });
}

// 游戏列表
export function gameList(params) {
  return request({
    url: '/api/public/games',
    method: 'GET',
    params,
  });
}

// 游戏服务区列表
export function gameRegions(params) {
  return axios({
    url: '/api/public/gameRegions',
    method: 'GET',
    params,
  });
}

// GET /public/gameRegions
