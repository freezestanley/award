import React from 'react';
import { formatNumber } from '@/utils/tools';
import { cashStatus } from '@/utils/game';
import Header from '@/components/Header';

import styles from './index.less';

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
      <Header title="提现记录" />
      <div style={{ padding: '60px 0 30px' }} className={styles.commission}>
        {data.map(item => {
          return (
            <div key={item.account} className="item">
              <div className="info">
                <span>支付宝账号 {item.account}</span>
                <i>{formatNumber(item.num)}元</i>
              </div>
              <div className="order">
                <time>{item.date}</time>
                <span>{cashStatus[item.status]}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
