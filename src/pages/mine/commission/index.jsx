import React from 'react';
import { formatNumber } from '@/utils/tools';
import Header from '@/components/Header';

import styles from './index.less';

export default function MineCommission({
  data = [
    {
      name: 'xxx',
      num: 124,
      order: 'JSKJAKSKAXNSS',
      date: '2020-02-13',
    },
    {
      name: 'dlskdas',
      num: 1234,
      order: 'LKSLKAJSJAKKS',
      date: '2020-02-10',
    },
    {
      name: 'rioerios',
      num: 302,
      order: 'FGUJGWJSNSJAS',
      date: '2020-02-09',
    },
  ],
}) {
  return (
    <>
      <Header title="佣金明细" />
      <div style={{ padding: '60px 0 30px' }} className={styles.commission}>
        {data.map(item => {
          return (
            <div key={item.order} className="item">
              <div className="info">
                <span>{item.name}</span>
                <span>
                  佣金<i>{formatNumber(item.num)}元</i>
                </span>
              </div>
              <div className="order">
                <span>订单号 {item.order}</span>
                <time>{item.date}</time>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
