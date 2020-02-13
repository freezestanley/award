import React from 'react';
import cns from 'classnames';
import styles from './index.less';

export default function RechargeProtocol(props) {
  return (
    <div className={cns(styles.protocol, props.className)}>
      <h3>充值说明</h3>
      <p>
        1. 将自动充值专用平台币，请在游戏使用专用平台币支付、<span>专用平台币有效期为永久</span>
      </p>
      <p>
        2. 充值单比<span>可分多次</span>消费
      </p>
      <p>
        3. 充值多笔<span>可累计1次</span>使用
      </p>
    </div>
  );
}
