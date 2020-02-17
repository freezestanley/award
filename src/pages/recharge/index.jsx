import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import GameInfo from '@/components/game/GameItem';
import Header from '@/components/Header';
import RechargeProtocol from './components/protocol';
import RechargeForm from './components/form';
import RechargeNavbar from './components/navbar';
import { GAME_RATIO } from '@/utils/game';
// import router from 'umi/router';
import { createOrder, accountInRegion } from '@/services/user';

import styles from './index.less';

function Recharge({ gameRegionsList = [], gameInfo, dispatch, location }) {
  // const game = props.game;
  // console.log('=====>>>.router', location);
  const { gameId = '' } = location.query;
  const { discountRatePercent = 1, coinRate = 1 } = gameInfo;
  const [state, setState] = useState({
    priceAmount: 0,
    gameUsername: '',
    gameRegion: '',
    topUpAmount: '',
  });

  const [exists, setExists] = useState(true);

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

  const sendValue = (value, tag) => {
    setState({
      ...state,
      [tag]: value,
    });
  };

  const handleSubmit = () => {
    let params = {
      ...state,
      priceAmount: state.topUpAmount * (Number(discountRatePercent) / GAME_RATIO),
      dedupCode: Math.floor(Math.random() * 100000000000),
      payChannel: '1',
      gameId: gameId,
      coinAmount: (state.topUpAmount / GAME_RATIO) * coinRate,
    };

    accountInRegion({
      gameId: gameId,
      gameRegion: state.gameRegion,
      gameUsername: state.gameUsername,
    }).then(res => {
      // console.log('验证账号收否存在===》', res);
      const { respCode, content } = res;
      if (respCode === 0) {
        if (content.exists) {
          createOrder(params).then(res => {
            // console.log('[70] index.jsx: ', res);
            const newWindow = window.open('', '_self');
            newWindow.document.write(res);
            newWindow.focus();
          });
          setExists(true);
        } else {
          // createOrder(params).then(res => {});
          setExists(false);
        }
      }
    });
  };

  // console.log(state);

  return (
    <>
      <Header title="充值" />
      <div style={{ padding: '60px 0' }}>
        <GameInfo className={styles.game_info} data={gameInfo} />
        <RechargeForm
          exists={exists}
          coinAmount={(state.topUpAmount / GAME_RATIO) * coinRate}
          sendValue={sendValue}
          list={gameRegionsList}
          className={styles.form}
          location={location}
          setExists={setExists}
        />
        <RechargeProtocol />
      </div>
      <RechargeNavbar
        handleSubmit={handleSubmit}
        priceAmount={state.topUpAmount * (Number(discountRatePercent) / GAME_RATIO)}
        gameId={gameId}
        topUpAmount={state.topUpAmount}
      />
    </>
  );
}

export default connect(state => {
  return state.global;
})(Recharge);
