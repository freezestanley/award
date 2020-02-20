import * as services from '../services/user.js';

export default {
  namespace: 'user',
  state: {
    myTopUps: [],
  },
  reducers: {
    setState(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {
    // 充值记录
    *getMyTopUps({ payload }, { put, call }) {
      const res = yield call(services.myTopUps, payload);
      const { list = [] } = res;

      yield put({
        type: 'setState',
        payload: { myTopUps: list, loading: false },
      });
      return res;
    },
  },
};
