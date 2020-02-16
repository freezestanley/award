import React, { useEffect } from 'react';
import { connect } from 'dva';
import GameInfo from '@/components/game/GameItem';
import Header from '@/components/Header';
import RechargeProtocol from './components/protocol';
import RechargeForm from './components/form';
import RechargeNavbar from './components/navbar';
import router from 'umi/router';


import styles from './index.less';

function Recharge({ gameRegionsList = [], gameInfo, dispatch, location }) {
  // const game = props.game;
  const { gameId = '' } = location.query;

  console.log('===<>>>>>>rest', location);

  useEffect(() => {
    dispatch({
      type: 'global/getGameInfo',
      payload: {
        gameId: gameId,
      },
    });
    dispatch({
      type: 'global/getGameRegions',
      payload: {
        gameId: gameId,
      },
    });
  }, [dispatch, gameId]);

  return (
    <>
      <Header title="充值" />
      <div style={{ padding: '60px 0' }}>
        <GameInfo className={styles.game_info} data={gameInfo} />
        <RechargeForm list={gameRegionsList} className={styles.form} />
        <RechargeProtocol />
      </div>
      <RechargeNavbar gameId = {gameId} />
    </>
  );
}

export default connect(state => {
  console.log('====>regions==>', state.global);
  return state.global;
})(Recharge);
