import React from 'react';
import { connect } from 'dva';
import Header from '@/components/Header';
import { formatNumber } from '@/utils/tools';
import RechargeProtocol from './components/protocol';
import CashForm from './components/form';

import styles from './index.less';

function Cash({ location }) {
  const { balance = 0 } = location.query;

  return (
    <>
      <Header title="提现" />
      <div style={{ padding: '60px 0' }}>
        <div className={styles.amount}>
          <p className="ants-amount">{formatNumber(balance)}</p>
          <p className="desc">当前佣金(元)</p>
        </div>
        <CashForm className={styles.form} />
        <RechargeProtocol />
      </div>
    </>
  );
}

export default connect(state => state.global)(Cash);
