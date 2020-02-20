import * as services from '@/services';
import { useDebugValue } from 'react';
import router from 'umi/router';
import cookie from '@/utils/cookie';
import { Toast } from 'zarm';

export default {
	namespace: 'login',
	state: {
		phone: '',
		token: ''
	},
	reducers: {
		setState(state, { payload }) {
			debugger;
			return { ...state, ...payload };
		}
	},
	effects: {
		// 充值记录
		*getMyTopUps({ payload }, { put, call }) {
			// const res = yield call(services.submitPhone, payload);
			// const { phone } = res;
			let { phone } = payload;
			yield put({
				type: 'setState',
				payload: { phone }
			});
			return phone;
		},
		*getverify({ payload }, { put, call }) {
			const res = yield call(services.getVerify, payload);
			if (res.data.code === 0) {
				Toast.show('验证码已发送,请注意查收');
			} else {
				Toast.show('发送失败');
			}
			// const { phone } = res;
			// yield put({
			//   type: 'setState',
			//   payload: { phone },
			// });
			// return phone;
		},
		*submitVert({ payload, callback }, { put, call }) {
			const res = yield call(services.submitPhone, payload);
			debugger;
			console.log('asdfasdfasf');

			if (res.data.code === 0) {
				const token = res.data.data;
				console.log(token);
				yield put({
					type: 'setState',
					payload: { token }
				});
				cookie.set('token', token);

				if (callback && typeof callback === 'function') {
					callback(token);
				}
				return token;
			} else {
				Toast.show('登陆失败');
			}
		}
	}
};
