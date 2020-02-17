import { gameList, gameInfo, gameRegions } from '@/services/global.js';
// import { gameList1 } from '@/utils/game';

function mapRegionsList(ary = []) {
  return ary.map(item => ({
    label: item.regionName,
    value: item.regionId,
  }));
}

export default {
  namespace: 'global',
  state: {
    game: null,
    gameList: [],
    gameInfo: {},
    gameRegionsList: [],
    loading: true,
  },
  reducers: {
    setState(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {
    *setGame({ payload }, { put }) {
      yield put({
        type: 'setState',
        payload: { game: payload },
      });
    },
    *gameList({ payload }, { put, call }) {
      const res = yield call(gameList, payload);
      const { list = [] } = res;
      yield put({
        type: 'setState',
        payload: { gameList: list, loading: false },
      });
      return res;
    },
    *getGameInfo({ payload }, { put, call }) {
      const res = yield call(gameInfo, payload);
      const { content } = res;
      yield put({
        type: 'setState',
        payload: { gameInfo: content },
      });
      return res;
    },
    *getGameRegions({ payload }, { put, call }) {
      const res = yield call(gameRegions, payload);
      const { list } = res;
      yield put({
        type: 'setState',
        payload: { gameRegionsList: mapRegionsList(list) },
      });
      return res;
    },
  },
};
