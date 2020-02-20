import React, { useEffect } from 'react';
import Header from '@/components/Header';
import DataLoading from '@/components/status/DataLoading';
import NoData from '@/components/status/NoData';
import { formatDate } from '@/utils/tools';
import { connect } from 'dva';
import styles from './index.less';

function MineInvite({ myPromotions = [], dispatch, loading }) {
  useEffect(() => {
    dispatch({
      type: 'user/getMyPromotions',
      payload: {
        page: 1,
        limit: 1000,
      },
    });
  }, [dispatch]);

  // console.log('[18] index.jsx: ', loading);
  if (loading) return <DataLoading />;

  return (
    <>
      <Header title="我邀请的人" />
      <div style={{ padding: '60px 0 30px' }} className={styles.invite}>
        {myPromotions.length === 0 && <NoData />}
        {myPromotions.map((item, key) => {
          return (
            <div key={key} className="item">
              <div>
                {/* <img src={item.targetUserAvatarUrl} alt={item.targetUserName} /> */}
                <img src={require('@/assets/icon/default.png')} alt={item.targetUserName} />
                <span>{item.targetUserName}</span>
              </div>
              <time>{formatDate(item.promotionTimestamp, 'YYYY-MM-DD HH:mm:ss')}</time>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default connect(state => state.user)(MineInvite);
