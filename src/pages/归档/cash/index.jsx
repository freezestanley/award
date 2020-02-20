import React from 'react';
import { connect } from 'dva';
import Header from '@/components/Header';
import { toThousands } from '@/utils/tools';
import RechargeProtocol from './components/protocol';
import CashForm from './components/form';

import styles from './index.less';

function Cash({ location }) {
  const balance = window.sessionStorage.getItem('balance') || 0;

  return (
    <>
      <Header title="提现" />
      <div style={{ padding: '60px 0' }}>
        <div className={styles.amount}>
          <p className="ants-amount">{toThousands(balance)}</p>
          <p className="desc">当前佣金(元)</p>
        </div>
        <CashForm className={styles.form} balance={balance} />
        <RechargeProtocol />
      </div>
    </>
  );
}

export default connect(state => state.global)(Cash);
