import axios from 'axios';

export function login(params) {
	return axios({
		url: '/api/yxb/login',
		method: 'POST',
		data: params
	});
}
