import React, { useEffect } from 'react';
import { formatNumber } from '@/utils/tools';
import Header from '@/components/Header';
import NoData from '@/components/status/NoData';
import DataLoading from '@/components/status/DataLoading';
import { connect } from 'dva';
import styles from './index.less';

function MineCommission({ myDistributions = [], dispatch, loading }) {
  useEffect(() => {
    dispatch({
      type: 'user/getMyDistributions',
      payload: {
        page: 1,
        limit: 1000,
      },
    });
  }, [dispatch]);

  if (loading) return <DataLoading />;

  return (
    <>
      <Header title="佣金明细" />
      <div style={{ padding: '60px 0 30px' }} className={styles.commission}>
        {myDistributions.length === 0 && <NoData />}
        {myDistributions.map((item, key) => {
          return (
            <div key={key} className="item">
              <div className="info">
                <span>{item.sourceUserName}</span>
                <span>
                  佣金<i>{formatNumber(item.platformAmount)}元</i>
                </span>
              </div>
              <div className="order">
                <span>订单号 {item.platformAmount}</span>
                <time>{item.time}</time>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default connect(state => state.user)(MineCommission);
