import React from 'react';
import cns from 'classnames';
import styles from './index.less';

export default function RechargeProtocol(props) {
  return (
    <div className={cns(styles.protocol, props.className)}>
      <h3>充值说明</h3>
      <p>1. 游戏账号和该账号所在的区服都必须填写正确</p>
      <p>2. 付款成功后将自动充进游戏</p>
      <p>3. 有任何疑问请联系客服</p>
    </div>
  );
}
