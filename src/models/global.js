export default {
  namespace: 'global',
  state: {
    game: null,
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
        payload: {
          game: payload,
        },
      });
    },
  },
};
