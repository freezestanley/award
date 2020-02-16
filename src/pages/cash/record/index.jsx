import React, { useEffect } from 'react';
import { formatNumber, formatDate } from '@/utils/tools';
import { cashStatus } from '@/utils/game';
import Header from '@/components/Header';
import { connect } from 'dva';

import styles from './index.less';

function MineCommission({ myWithdraws = [], dispatch }) {
  useEffect(() => {
    dispatch({
      type: 'user/getMyWithdraws',
      payload: {
        page: 1,
        limit: 1000,
      },
    });
  }, [dispatch]);

  return (
    <>
      <Header title="提现记录" />
      <div style={{ padding: '60px 0 30px' }} className={styles.commission}>
        {myWithdraws.map((item, key) => {
          return (
            <div key={key} className="item">
              <div className="info">
                <span>支付宝账号 {item.payAccount}</span>
                <i>{formatNumber(item.withdrawAmount)}元</i>
              </div>
              <div className="order">
                <time>{formatDate(item.time)}</time>
                <span>{cashStatus[item.status]}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default connect(state => {
  // console.log('===>state==>', state);
  return state.user;
})(MineCommission);
