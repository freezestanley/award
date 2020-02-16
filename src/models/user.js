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
      console.log('保存充值记录===>', payload);
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
      yield put({
        type: 'setMyTopUps',
        payload: [
          {
            coinAmount: '1200钻石',
            gameName: '混沌之刃',
            gameRegion: '电信一区',
            gameUsername: '27993332@qq.com',
            orderId: '2353124533',
            priceAmount: '100.34',
            time: 1581534690,
            topUpAmount: '100.34',
          },
          {
            coinAmount: '41900钻石',
            gameName: '混沌之刃',
            gameRegion: '电信一区',
            gameUsername: '27993332@qq.com',
            orderId: '2353124533',
            priceAmount: '100.34',
            time: 1581534690,
            topUpAmount: '100.34',
          },
        ],
      });
      return res;
    },
    // 获取体现记录
    *getMyWithdraws({ payload }, { put, call }) {
      const res = yield call(myWithdraws, payload);
      yield put({
        type: 'setMyWithdraws',
        payload: [
          {
            payAccount: '23423423',
            payChannel: '支付宝',
            status: '审核中,发放中,已发放，审核不通过',
            time: 1581534690,
            withdrawAmount: '13.45',
          },
          {
            payAccount: '23423423',
            payChannel: '支付宝',
            status: '审核中,发放中,已发放，审核不通过',
            time: 1581214690,
            withdrawAmount: '100.45',
          },
        ],
      });
      return res;
    },
    *getMyPromotions({ payload }, { put, call }) {
      const res = yield call(myPromotions, payload);
      yield put({
        type: 'setMyPromotions',
        payload: [
          {
            promotionTimestamp: 1581534690,
            sourceUserId: '1234',
            sourceUserName: '张三',
            targetUserAvatarUrl: 'http://xxx.png',
            targetUserId: '4321',
            targetUserName: '李四',
          },
          {
            promotionTimestamp: 1581534690,
            sourceUserId: '1234',
            sourceUserName: '张三1',
            targetUserAvatarUrl: 'http://xxx.png',
            targetUserId: '4321',
            targetUserName: '李四1',
          },
        ],
      });
      return res;
    },
    *getMyInfo({ payload }, { put, call }) {
      const res = yield call(myInfo, payload);
      yield put({
        type: 'setMyInfo',
        payload: {
          avatarUrl: require('@/assets/icon/default.png'),
          balance: '1534.7',
          cumulativeBalance: '1523.34',
          phoneMasked: '137****4353',
          userId: 2345,
          userName: '2345',
        },
      });
      return res;
    },

    *getMyDistributions({ payload }, { put, call }) {
      const res = yield call(myDistributions, payload);
      yield put({
        type: 'setMyDistributions',
        payload: [
          {
            awardAmount: '3.45',
            gameName: '混沌之刃',
            goodName: '点卡',
            platformAmount: '3.45',
            promotionTimestamp: 1581534690,
            sourceUserId: '1234',
            sourceUserName: '张三',
            targetUserId: '4321',
            targetUserName: '李四',
            time: 1581534690,
            topUpAmount: '100.34',
          },
          {
            awardAmount: '233.45',
            gameName: '混沌之刃',
            goodName: '点卡',
            platformAmount: '2323.45',
            promotionTimestamp: 1581534690,
            sourceUserId: '1234',
            sourceUserName: '张三1',
            targetUserId: '4321',
            targetUserName: '李四',
            time: 1581534690,
            topUpAmount: '100.34',
          },
        ],
      });

      return res;
    },
  },
};
