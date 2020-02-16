import React, { useEffect } from 'react';
import GameInfo from '@/components/game/GameItem';
import { connect } from 'dva';
import Navbar from '@/components/Navbar';
// import { gameList } from '@/utils/game';
import router from 'umi/router';
import styles from './index.less';

function Home({ dispatch, gameList = [] }) {
  const handleRecharge = data => {
    console.log('===========>>>>data', data);
    router.push(`/${data.gameName}/recharge?gameId=${data.gameId}`);
  };

  useEffect(() => {
    dispatch({
      type: 'global/gameList',
      payload: {
        page: 1,
        limit: 100,
      },
    });
  }, [dispatch]);
  return (
    <>
      <div className={styles.normal}>
        {gameList.length &&
          gameList.map((item, idx) => (
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
