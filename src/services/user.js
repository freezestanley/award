// import request from 'request';
import request from '@/utils/request.js';

// 账号是否存在于服务区中
export function accountInRegion(params) {
  return request({
    url: '/api/ants/accountInRegion',
    method: 'GET',
    params,
  });
}

// 用户详情信息
export function myInfo(params) {
  return request({
    url: '/api/ants/my',
    method: 'GET',
    params,
  });
}

// 我的佣金明细
export function myDistributions(params) {
  return request({
    url: '/api/ants/myDistributions',
    method: 'GET',
    params,
  });
}

// 我的邀请人列表
export function myPromotions(params) {
  return request({
    url: '/api/ants/myPromotions',
    method: 'GET',
    params,
  });
}

// 我的充值记录列表
export function myTopUps(params) {
  return request({
    url: '/api/ants/myTopUps',
    method: 'GET',
    params,
  });
}

// 我的充值记录列表
export function myWithdraws(params) {
  return request({
    url: '/api/ants/myWithdraws',
    method: 'GET',
    params,
  });
}

// 我的推广链接
export function promotionLink(params) {
  return request({
    url: '/api/ants/promotionLink',
    method: 'GET',
    params,
  });
}
