import React from 'react';
import router from 'umi/router';
import { checkLogin } from '@/utils/tools';

import styles from './index.less';

export default function Navbar() {
  const handleMine = () => {
    checkLogin(() => {
      router.push('/mine');
    });
  };
  return (
    <div className={styles.navbar}>
      <div className="left" onClick={() => router.push('/')}>
        <img src={require('./game.svg')} alt="Game" />
      </div>
      <div onClick={handleMine}>
        <img src={require('./me.svg')} alt="Me" />
      </div>
    </div>
  );
}
