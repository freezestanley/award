import React from 'react';
import Header from '@/components/Header';

import styles from './index.less';

export default function MineInvite({
  data = [
    {
      name: '39384149531',
      date: '2020-02-13',
    },
    {
      name: '93948301922',
      date: '2020-02-10',
    },
    {
      name: '49384923323',
      date: '2020-02-09',
    },
  ],
}) {
  return (
    <>
      <Header title="我邀请的人" />
      <div style={{ padding: '60px 0 30px' }} className={styles.invite}>
        {data.map(item => {
          return (
            <div key={item.name} className="item">
              <div>
                <img src={require('@/assets/icon/default.png')} alt="avatar" />
                <span>{item.name}</span>
              </div>
              <time>{item.date}</time>
            </div>
          );
        })}
      </div>
    </>
  );
}
