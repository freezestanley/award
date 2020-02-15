import React from 'react';
import { connect } from 'dva';
import GameInfo from '@/components/game/GameItem';
import Header from '@/components/Header';
import RechargeProtocol from './components/protocol';
import RechargeForm from './components/form';
import RechargeNavbar from './components/navbar';

import styles from './index.less';

function Recharge(props) {
  const game = props.game;
  return (
    <>
      <Header title="充值" />
      <div style={{ padding: '60px 0' }}>
        <GameInfo className={styles.game_info} data={game} />
        <RechargeForm className={styles.form} />
        <RechargeProtocol />
      </div>
      <RechargeNavbar />
    </>
  );
}

export default connect(state => state.global)(Recharge);
