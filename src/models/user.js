import * as services from '../services/user.js';

export default {
  namespace: 'user',
  state: {
    myTopUps: [],
    myWithdraws: [],
    myPromotions: [],
    userInfo: {},
    myDistributions: [],
    loading: true,
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
    // 获取提现记录
    *getMyWithdraws({ payload }, { put, call }) {
      const res = yield call(services.myWithdraws, payload);
      const { list = [] } = res;
      yield put({
        type: 'setState',
        payload: { myWithdraws: list, loading: false },
      });
      return res;
    },
    *getMyPromotions({ payload }, { put, call }) {
      const res = yield call(services.myPromotions, payload);
      const { list = [] } = res;
      yield put({
        type: 'setState',
        payload: { myPromotions: list, loading: false },
      });
      return res;
    },
    *getMyInfo({ payload }, { put, call }) {
      const res = yield call(services.myInfo, payload);
      const {
        content = {
          avatarUrl: '',
          balance: '',
          cumulativeBalance: '',
          phoneMasked: '',
          userId: '',
          userName: '',
        },
      } = res;
      yield put({
        type: 'setState',
        payload: { userInfo: content },
      });
      return res;
    },

    *getMyDistributions({ payload }, { put, call }) {
      const res = yield call(services.myDistributions, payload);

      const { list = [] } = res;
      yield put({
        type: 'setState',
        payload: { myDistributions: list },

        // [
        //   {
        //     awardAmount: '3.45',
        //     gameName: '混沌之刃',
        //     goodName: '点卡',
        //     platformAmount: '3.45',
        //     promotionTimestamp: 1581534690,
        //     sourceUserId: '1234',
        //     sourceUserName: '张三',
        //     targetUserId: '4321',
        //     targetUserName: '李四',
        //     time: 1581534690,
        //     topUpAmount: '100.34',
        //   },
        //   {
        //     awardAmount: '233.45',
        //     gameName: '混沌之刃',
        //     goodName: '点卡',
        //     platformAmount: '2323.45',
        //     promotionTimestamp: 1581534690,
        //     sourceUserId: '1234',
        //     sourceUserName: '张三1',
        //     targetUserId: '4321',
        //     targetUserName: '李四',
        //     time: 1581534690,
        //     topUpAmount: '100.34',
        //   },
        // ],
      });

      return res;
    },
  },
};
