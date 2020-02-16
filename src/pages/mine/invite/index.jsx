import React, { useEffect } from 'react';
import Header from '@/components/Header';
import { connect } from 'dva';
import styles from './index.less';

function MineInvite({ myPromotions = [], dispatch }) {
  const uid = sessionStorage.getItem('user') || '';
  useEffect(() => {
    dispatch({
      type: 'user/getMyPromotions',
      payload: {
        hackuid: uid,
        page: 1,
        limit: 1000,
      },
    });
  }, [dispatch, uid]);

  return (
    <>
      <Header title="我邀请的人" />
      <div style={{ padding: '60px 0 30px' }} className={styles.invite}>
        {myPromotions.map((item, key) => {
          return (
            <div key={key} className="item">
              <div>
                <img src={item.targetUserAvatarUrl} alt={item.targetUserName} />
                <span>{item.targetUserName}</span>
              </div>
              <time>{item.promotionTimestamp}</time>
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
})(MineInvite);
