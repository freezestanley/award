import React, { useEffect } from 'react';
import GameInfo from '@/components/game/GameItem';
import { connect } from 'dva';
import Navbar from '@/components/Navbar';
import { Query } from '@/utils/tools';
import DataLoading from '@/components/status/DataLoading';
import NoData from '@/components/status/NoData';
// import { gameList } from '@/utils/game';
import router from 'umi/router';
import styles from './index.less';

function Home({ dispatch, gameList = [], loading }) {
  const handleRecharge = data => {
    router.push(`/recharge?gameId=${data.gameId}`);
  };

  useEffect(() => {
    const pid = Query.get('promotorId');
    if (pid) window.sessionStorage.setItem('promotorId', pid);
    // promotorId
    dispatch({
      type: 'global/gameList',
      payload: {
        page: 1,
        limit: 1000,
      },
    });
  }, [dispatch]);
  if (loading) return <DataLoading />;
  return (
    <>
      <div className={styles.normal}>
        {gameList.length === 0 && <NoData />}
        {gameList.map((item, idx) => (
          <div key={idx} className={styles.item}>
            <GameInfo data={item} />
            <button onClick={() => handleRecharge(item)}>充值</button>
          </div>
        ))}
      </div>
      <Navbar />
    </>
  );
}

export default connect(state => {
  // console.log('===>state==>', state);
  return state.global;
})(Home);
