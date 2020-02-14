import React from 'react';
import cns from 'classnames';
import styles from './index.less';

export default function GameInfo({ data, className }) {
  if (!data) return null;
  return (
    <div className={cns(styles.gameInfo, className)}>
      <img src={data.img} alt={data.name} />
      <div className="text">
        <div>
          <div className="name">{data.name}</div>
          <div className="desc">
            充值<span>{data.discount}折</span>
          </div>
        </div>
      </div>
    </div>
  );
}
