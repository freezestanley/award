const warnIcon = require('@/assets/icon/warn.svg');

export const gameList1 = [
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
  {
    gameName: '新仙剑情缘',
    logoPicUrl: require('@/assets/game/4.png'),
    discountRatePercent: 8.8,
    gameId: 5412,
  },
  {
    gameName: '崩坏3rd',
    logoPicUrl: require('@/assets/game/5.png'),
    discountRatePercent: 9,
    gameId: 1219,
  },
  {
    gameName: '阴阳师',
    logoPicUrl: require('@/assets/game/6.png'),
    discountRatePercent: 7.8,
    gameId: 15432,
  },
  {
    gameName: '明日之后',
    logoPicUrl: require('@/assets/game/7.png'),
    discountRatePercent: 9.8,
    gameId: 132,
  },
];

export const cashStatus = {
  '1': '审核中',
  '2': '已发放',
  '3': (
    <span>
      <img width={12} style={{ verticalAlign: -2, marginRight: 4 }} src={warnIcon} alt="warn" />
      审核不通过(原因请联系客服)
    </span>
  ),
};

export const GAME_RATIO = 100;
