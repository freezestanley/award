import React, { useEffect } from 'react';
import Header from '@/components/Header';
import { connect } from 'dva';
import styles from './index.less';

function MineInvite({ myPromotions = [], dispatch }) {
  useEffect(() => {
    dispatch({
      type: 'user/getMyPromotions',
      payload: {},
    });
  }, [dispatch]);

  return (
    <>
      <Header title="我邀请的人" />
      <div style={{ padding: '60px 0 30px' }} className={styles.invite}>
        {myPromotions.map(item => {
          return (
            <div key={item.sourceUserName} className="item">
              <div>
                <img src={require('@/assets/icon/default.png')} alt="avatar" />
                <span>{item.sourceUserName}</span>
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
