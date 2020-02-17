import { myTopUps, myWithdraws, myPromotions, myInfo, myDistributions } from '../services/user.js';

export default {
  namespace: 'user',
  state: {
    game: null,
    myTopUps: [],
    myWithdraws: [],
    myPromotions: [],
    userInfo: {},
    myDistributions: [],
  },
  reducers: {
    setMyTopUps(state, { payload }) {
      return { ...state, myTopUps: payload };
    },
    setMyWithdraws(state, { payload }) {
      return { ...state, myWithdraws: payload };
    },
    setMyPromotions(state, { payload }) {
      return { ...state, myPromotions: payload };
    },
    setMyInfo(state, { payload }) {
      return { ...state, userInfo: payload };
    },
    setMyDistributions(state, { payload }) {
      return { ...state, myDistributions: payload };
    },
  },
  effects: {
    *getMyTopUps({ payload }, { put, call }) {
      const res = yield call(myTopUps, payload);
      const { list = [] } = res;

      yield put({
        type: 'setMyTopUps',
        payload: list,
      });
      return res;
    },
    // 获取体现记录
    *getMyWithdraws({ payload }, { put, call }) {
      const res = yield call(myWithdraws, payload);
      const { list = [] } = res;
      yield put({
        type: 'setMyWithdraws',
        payload: list,
      });
      return res;
    },
    *getMyPromotions({ payload }, { put, call }) {
      const res = yield call(myPromotions, payload);
      const { list = [] } = res;
      yield put({
        type: 'setMyPromotions',
        payload: list,
      });
      return res;
    },
    *getMyInfo({ payload }, { put, call }) {
      const res = yield call(myInfo, payload);
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
        type: 'setMyInfo',
        payload: content,
      });
      return res;
    },

    *getMyDistributions({ payload }, { put, call }) {
      const res = yield call(myDistributions, payload);

      const { list = [] } = res;
      yield put({
        type: 'setMyDistributions',
        payload: list,

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
