import * as services from '@/services';
import { useDebugValue } from 'react';
import router from 'umi/router';

export default {
  namespace: 'output',
  state: {
    phone: '',
    verify: '',
    token: '',
  },
  reducers: {
    setState(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {
    // 充值记录
    *getMyTopUps({ payload }, { put, call }) {
      // const res = yield call(services.submitPhone, payload);
      // const { phone } = res;
      let { phone } = payload;
      yield put({
        type: 'setState',
        payload: { phone },
      });
      return phone;
    },
  },
};
