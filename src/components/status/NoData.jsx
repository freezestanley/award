import React from 'react';
import styles from './index.less';

export default function NoData() {
  return (
    <div className={styles.noData}>
      <img src={require('@/assets/icon/no-data.svg')} alt="No data" />
      <p>暂无数据</p>
    </div>
  );
}
