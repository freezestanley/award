import React from 'react';
import styles from './index.less';

export default function DataLoading({ content = 'loading...' }) {
  return <div className={styles.loading}>{content}</div>;
}
