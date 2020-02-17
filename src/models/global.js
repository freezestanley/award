import { gameList, gameInfo, gameRegions } from '../services/global.js';
import { gameList1 } from '@/utils/game';

function mapRegionsList(ary = []) {
  return ary.map(item => {
    return {
      label: item.regionName,
      value: item.regionId,
    };
  });
}
export default {
  namespace: 'global',
  state: {
    game: null,
    gameList: [],
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
      const res = yield call(gameList, payload);
      const { list = [] } = res;
      yield put({
        type: 'setGameList',
        payload: list,
      });
      return res;
    },
    *getGameInfo({ payload }, { put, call }) {
      const res = yield call(gameInfo, payload);
      const { content } = res;
      yield put({
        type: 'setGameInfo',
        payload: content,
      });
      return res;
    },
    *getGameRegions({ payload }, { put, call }) {
      const res = yield call(gameRegions, payload);
      const { list } = res;
      yield put({
        type: 'setGameRegionsList',
        payload: mapRegionsList(list),
      });
      return res;
    },
  },
};
