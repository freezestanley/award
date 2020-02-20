import React, { useEffect } from 'react';
import { connect } from 'dva';
import { toThousands, formatDate } from '@/utils/tools';
import Header from '@/components/Header';
import DataLoading from '@/components/status/DataLoading';
import NoData from '@/components/status/NoData';
import { cashStatus } from '@/utils/game';

import styles from './index.less';

function MineCommission({ myWithdraws = [], dispatch, loading }) {
  useEffect(() => {
    dispatch({
      type: 'user/getMyWithdraws',
      payload: {
        page: 1,
        limit: 1000,
      },
    });
  }, [dispatch]);

  if (loading) return <DataLoading />;

  return (
    <>
      <Header title="提现记录" />
      <div style={{ padding: '60px 0 30px' }} className={styles.commission}>
        {myWithdraws.length === 0 && <NoData />}
        {myWithdraws.map((item, key) => {
          return (
            <div key={key} className="item">
              <div className="info">
                <span>支付宝账号 {item.payAccount}</span>
                <i>{toThousands(item.withdrawAmount)}元</i>
              </div>
              <div className="order">
                <time>{formatDate(item.time, 'YYYY-MM-DD HH:mm:ss')}</time>
                {/* <span>{item.status}</span> */}
                <span>{cashStatus[item.status]}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default connect(state => state.user)(MineCommission);
