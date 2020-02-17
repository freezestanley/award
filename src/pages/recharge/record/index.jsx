import React, { useEffect } from 'react';
import { Collapse } from 'zarm';
import { formatDate } from '@/utils/tools';
// import { cashStatus } from '@/utils/game';
import Header from '@/components/Header';
import { connect } from 'dva';
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
      <img src={data.gameLogoUrl} alt="avatar" />
      <div className="txt">
        <div>
          <span>{data.gameName}</span>
          <time>{data.time}</time>
        </div>
      </div>
      <span className="gb">
        到账 <i>{data.coinAmount}钻石</i>
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

function MineCommission({ dispatch, user, global }) {
  const { myTopUps = [] } = user;
  // console.log('[44] index.jsx: ', global);
  useEffect(() => {
    dispatch({
      type: 'user/getMyTopUps',
      payload: {
        page: 1,
        limit: 1000,
      },
    });
  }, [dispatch]);
  return (
    <>
      <Header title="我的充值" />
      <div style={{ padding: '60px 0 30px' }} className={styles.record}>
        <Collapse animated defaultActiveKey={'0'}>
          {myTopUps.map((item, idx) => {
            return (
              <Collapse.Item
                key={idx}
                className="item"
                title={
                  <GameInfo
                    data={{
                      ...item,
                      // ...testData,
                      // coinAmount: item.coinAmount,
                      time: formatDate(item.time),
                    }}
                  />
                }
              >
                <div className="order">
                  <InfoItem name="订单号" value={item.orderId} />
                  <InfoItem name="游戏账号" value={item.gameUsername} />
                  <InfoItem name="所在区服" value={item.gameRegion} />
                  <InfoItem name="充值金额" value={item.topUpAmount} />
                  <InfoItem name="实际付款" value={item.priceAmount} />
                  <InfoItem name="到账游戏币" value={item.coinAmount} />
                </div>
              </Collapse.Item>
            );
          })}
        </Collapse>
      </div>
    </>
  );
}

export default connect(state => state)(MineCommission);
