import React from 'react';
import { Collapse } from 'zarm';
// import { formatNumber } from '@/utils/tools';
// import { cashStatus } from '@/utils/game';
import Header from '@/components/Header';

import styles from './index.less';

function InfoItem({ name, value }) {
  return (
    <div className="order-item">
      <span>{name}</span>
      <span>{value}</span>
    </div>
  );
}

function GameInfo({ data = {} }) {
  return (
    <div className={styles.gameinfo}>
      <img src={data.img} alt="avatar" />
      <div className="txt">
        <div>
          <span>{data.name}</span>
          <time>{data.time}</time>
        </div>
      </div>
      <span className="gb">
        到账 <i>{data.num}钻石</i>
      </span>
    </div>
  );
}

const testData = {
  img: require('@/assets/game/1.png'),
  name: '混沌之刃',
  time: '2020-02-10',
  num: 10000,
};

export default function MineCommission({
  data = [
    {
      account: '39384149531',
      num: 124,
      status: 2,
      date: '2020-02-13',
    },
    {
      account: '93948301922',
      num: 1234,
      status: 3,
      date: '2020-02-10',
    },
    {
      account: '49384923323',
      num: 302,
      status: 1,
      date: '2020-02-09',
    },
  ],
}) {
  return (
    <>
      <Header title="我的充值" />
      <div style={{ padding: '60px 0 30px' }} className={styles.record}>
        <Collapse animated defaultActiveKey={'0'}>
          {data.map((item, idx) => {
            return (
              <Collapse.Item key={idx} className="item" title={<GameInfo data={testData} />}>
                <div className="order">
                  <InfoItem name="订单号" value="xxxx" />
                  <InfoItem name="游戏账号" value="xxxx" />
                  <InfoItem name="所在区服" value="xxxx" />
                  <InfoItem name="充值金额" value="xxxx" />
                  <InfoItem name="实际付款" value="xxxx" />
                  <InfoItem name="到账游戏币" value="xxxx" />
                </div>
              </Collapse.Item>
            );
          })}
        </Collapse>
      </div>
    </>
  );
}
