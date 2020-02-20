import axios from 'axios';
import cookie from '@/utils/cookie';

export function getPerson(params) {
	return axios({
		url: '/api/total_user',
		method: 'POST',
		data: params
	});
}
export function submitPhone(params) {
	return axios({
		url: '/api/login',
		method: 'POST',
		data: params
	});
}
export function getVerify(params) {
	return axios({
		url: '/api/verify_code',
		method: 'POST',
		data: params
	});
}
export function getQrcode(params) {
	return axios({
		url: '/api/receipt_address',
		method: 'POST',
		data: params,
		headers: {
			token: params || cookie.get('token')
		}
	});
}
export function userStatus(params) {
	debugger;
	return axios({
		url: '/api/user_status',
		method: 'POST',
		headers: {
			token: params || cookie.get('token')
		}
	});
}
export function token_address(address, token) {
	debugger;
	return axios({
		url: '/api/update_token_address',
		method: 'POST',
		data: { address },
		headers: {
			token: token || cookie.get('token')
		}
	});
}
export function pay_address(token) {
	debugger;
	return axios({
		url: '/api/receipt_address',
		method: 'POST',
		data: {},
		headers: {
			token: token || cookie.get('token')
		}
	});
}
export function pay_done(token) {
	debugger;
	return axios({
		url: '/api/complete_pay',
		method: 'POST',
		data: {},
		headers: {
			token: token || cookie.get('token')
		}
	});
}
