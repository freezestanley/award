import React from 'react';
import router from 'umi/router';
import styles from './index.less';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className="left" onClick={() => router.push('/')}>
        <img src={require('./game.svg')} alt="Game" />
      </div>
      <div onClick={() => router.push('/me')}>
        <img src={require('./me.svg')} alt="Me" />
      </div>
    </div>
  );
}
