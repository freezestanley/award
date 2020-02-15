const warnIcon = require('@/assets/icon/warn.svg');

export const gameList = [
  { name: '混沌之刃', img: require('@/assets/game/1.png'), discount: 8.5 },
  { name: '皇室战争', img: require('@/assets/game/2.png'), discount: 8.5 },
  { name: '荒野乱斗', img: require('@/assets/game/3.png'), discount: 8.5 },
  { name: '新仙剑情缘', img: require('@/assets/game/4.png'), discount: 8.8 },
  { name: '崩坏3rd', img: require('@/assets/game/5.png'), discount: 9 },
  { name: '阴阳师', img: require('@/assets/game/6.png'), discount: 7.8 },
  { name: '明日之后', img: require('@/assets/game/7.png'), discount: 9.8 },
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
