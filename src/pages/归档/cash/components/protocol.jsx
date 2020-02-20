import React from 'react';
import cns from 'classnames';
import styles from './index.less';

export default function RechargeProtocol(props) {
  return (
    <div className={cns(styles.protocol, props.className)}>
      <h3>提现说明</h3>
      <p>
        1. 单次提现金额最少<span>1</span>元，最多<span>200</span>元，次数不限
      </p>
      <p>
        2. 提现后<span>24小时内</span>完成审核，审核通过后直接放到支付宝账户
      </p>
      <p>
        3. 为确保提现成功，请输入自己的<span>正确支付宝账号</span>
      </p>
    </div>
  );
}
