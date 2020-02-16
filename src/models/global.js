import { gameList, gameInfo, gameRegions } from '../services/global.js';
import { gameList1 } from '@/utils/game';
export default {
  namespace: 'global',
  state: {
    game: null,
    gameList: [
      {
        gameName: '混沌之刃',
        logoPicUrl: require('@/assets/game/1.png'),
        discountRatePercent: 8.5,
        gameId: 121,
      },
      {
        gameName: '皇室战争',
        logoPicUrl: require('@/assets/game/2.png'),
        discountRatePercent: 8.5,
        gameId: 1232,
      },
      {
        gameName: '荒野乱斗',
        logoPicUrl: require('@/assets/game/3.png'),
        discountRatePercent: 8.5,
        gameId: 1152,
      },
    ],
    gameInfo: {},
    gameRegionsList: [],
  },
  reducers: {
    setState(state, { payload }) {
      return { ...state, ...payload };
    },
    setGameList(state, { payload }) {
      return { ...state, gameList: payload };
    },
    setGameInfo(state, { payload }) {
      return { ...state, gameInfo: payload };
    },
    setGameRegionsList(state, { payload }) {
      return { ...state, gameRegionsList: payload };
    },
  },
  effects: {
    *setGame({ payload }, { put }) {
      yield put({
        type: 'setState',
        payload: {
          game: payload,
        },
      });
    },
    *gameList({ payload }, { put, call }) {
      // console.log()
      const res = yield call(gameList, payload);
      const { list = [] } = res;
      console.log('res===>>>>', gameList1);
      // cosnt {list} = res;
      yield put({
        type: 'setGameList',
        payload: gameList1,
      });
      return res;
    },
    *getGameInfo({ payload }, { put, call }) {
      // console.log()
      const res = yield call(gameInfo, payload);
      console.log('res===>>>>', gameList1);
      // const {content} = res
      yield put({
        type: 'setGameInfo',
        payload: {
          coinRate: '1000',
          coinUnit: '钻石',
          shareAwardPercent: '1.1',
          gameName: '混沌之刃',
          logoPicUrl: require('@/assets/game/1.png'),
          discountRatePercent: 8.5,
          gameId: 121,
        },
      });
      return res;
    },
    *getGameRegions({ payload }, { put, call }) {
      // console.log()
      const res = yield call(gameRegions, payload);
      console.log('res===>>>>', res);
      // const {content} = res
      yield put({
        type: 'setGameRegionsList',
        payload: [
          {
            value: '1',
            label: '混沌1区',
          },
          {
            value: '2',
            label: '混沌2区',
          },
          {
            value: '3',
            label: '混沌3区',
          },
          {
            value: '4',
            label: '混沌4区',
          },
          {
            value: '5',
            label: '混沌5区',
          },
        ],
      });
      return res;
    },
  },
};
