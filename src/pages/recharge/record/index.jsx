import React, { useEffect } from 'react';
import { Collapse } from 'zarm';
import numeral from 'numeral';
import { toThousands, formatDate } from '@/utils/tools';
// import { orderStatus } from '@/utils/game';
import Header from '@/components/Header';
import DataLoading from '@/components/status/DataLoading';
import NoData from '@/components/status/NoData';
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
        <span>{data.status}</span>
        <br />
        <i>
          {data.coinAmount}
          {data.coinUnit}
        </i>
      </span>
    </div>
  );
}

// const testData = {
//   img: require('@/assets/game/1.png'),
//   name: '混沌之刃',
//   time: '2020-02-10',
//   num: 10000,
// };

function MineCommission({ dispatch, user, global, ...rest }) {
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
  if (rest.loading.models.user) return <DataLoading />;
  return (
    <>
      <Header title="我的充值" />
      <div style={{ padding: '60px 0 30px' }} className={styles.record}>
        {myTopUps.length === 0 ? (
          <NoData />
        ) : (
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
                        time: formatDate(item.time, 'YYYY-MM-DD HH:mm:ss'),
                      }}
                    />
                  }
                >
                  <div className="order">
                    <InfoItem name="订单号" value={item.orderId} />
                    <InfoItem name="游戏账号" value={item.gameUsername} />
                    <InfoItem name="所在区服" value={item.gameRegion} />
                    <InfoItem name="充值金额" value={`${toThousands(item.topUpAmount)}元`} />
                    <InfoItem name="充值状态" value={item.status} />
                    <InfoItem name="实际付款" value={`${toThousands(item.priceAmount)}元`} />
                    <InfoItem
                      name="游戏币"
                      value={`${numeral(item.coinAmount).format('0,0')}${item.coinUnit}`}
                    />
                  </div>
                </Collapse.Item>
              );
            })}
          </Collapse>
        )}
      </div>
    </>
  );
}

export default connect(state => state)(MineCommission);
