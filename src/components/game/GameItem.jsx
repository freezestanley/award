import React from 'react';
import cns from 'classnames';
import styles from './index.less';

export default function GameInfo({ data, className }) {
  if (!data) return null;
  return (
    <div className={cns(styles.gameInfo, className)}>
      <img src={data.logoPicUrl} alt={data.gameName} />
      <div className="text">
        <div>
          <div className="name">{data.gameName}</div>
          <div className="desc">
            充值<span>{data.discountRatePercent}折</span>
          </div>
        </div>
      </div>
    </div>
  );
}
