import * as services from '@/services';
import { useDebugValue } from 'react';
import router from 'umi/router';

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
			// const { phone } = res;
			// yield put({
			//   type: 'setState',
			//   payload: { phone },
			// });
			// return phone;
		},
		*submitVert({ payload, callback }, { put, call }) {
			debugger;
			console.log(payload);
			const res = yield call(services.submitPhone, payload);
			const { token } = res.data;
			console.log(token);
			yield put({
				type: 'setState',
				payload: { token }
			});

			if (callback && typeof callback === 'function') {
				callback(token);
			}
			return token;
		}
	}
};
