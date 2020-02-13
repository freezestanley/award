import React from 'react';
import { Icon } from 'zarm';
import styles from './index.less';

export default ({ children, title, href, onBack, onClose }) => {
  const handleGoBack = () => {
    onBack && onBack();
    if (!href) window.history.back();
  };
  const iconBtn = (
    <div className="goback" onClick={handleGoBack}>
      <Icon type="arrow-left" style={{ fontSize: '0.2rem', verticalAlign: '-0.06rem' }} />
    </div>
  );
  const isClose = typeof onClose === 'function';
  return (
    <div className={styles.header}>
      <div>
        {isClose ? null : href ? <a href={href}>{iconBtn}</a> : iconBtn}
        {isClose && (
          <span className={styles.close} onClick={onClose}>
            <img src={require('./close.svg')} alt="" />
          </span>
        )}
        <div className="head-title">{children || title}</div>
      </div>
    </div>
  );
};
