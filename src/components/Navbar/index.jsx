import React from 'react';
import router from 'umi/router';
import { checkLogin } from '@/utils/tools';

import styles from './index.less';

export default function Navbar({ active = 'index' }) {
  const handleMine = () => {
    checkLogin(() => {
      router.push('/mine');
    });
  };
  const curr = active === 'index';
  return (
    <div className={styles.navbar}>
      <div className="left" onClick={() => router.push('/')}>
        <img src={require(curr ? './icon/game-active.svg' : './icon/game.svg')} alt="Game" />
      </div>
      <div onClick={handleMine}>
        <img src={require(!curr ? './icon/me-active.svg' : './icon/me.svg')} alt="Mine" />
      </div>
    </div>
  );
}
