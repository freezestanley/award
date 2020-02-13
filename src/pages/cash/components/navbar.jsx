import React from 'react';
import router from 'umi/router';
import { checkLogin } from '@/utils/tools';
import styles from './index.less';

export default function RechargeNavbar() {
  const handleRecharge = () => {
    checkLogin(() => {
      router.push('/recharge/result');
    });
  };
  return (
    <div className={styles.navbar}>
      <div className="left" onClick={() => console.log('[12] navbar.jsx: ', 123)}>
        <p className="t1">
          应付金额<span>xx元</span>
        </p>
        <p className="t2">
          已省<span>xx元</span>
        </p>
      </div>
      <div className="right" onClick={handleRecharge}>
        <span>充值</span>
      </div>
    </div>
  );
}
