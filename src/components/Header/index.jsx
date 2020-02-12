import React from 'react';
import { Icon } from 'zarm';
import styled from './index.less';

export default ({ children, href, onBack }) => {
  const handleGoBack = () => {
    onBack && onBack();
    if (!href) window.history.back();
  }
  const iconBtn = (
    <div className="goback" onClick={handleGoBack}>
      <Icon type="arrow-left" style={{ fontSize: '0.2rem', verticalAlign: '-0.06rem' }} />
    </div>
  )
  return (
    <div className={styled['header']}>
      {href ? <a href={href}>{iconBtn}</a> : iconBtn}
      <div className="head-title">{children}</div>
    </div>
  );
}