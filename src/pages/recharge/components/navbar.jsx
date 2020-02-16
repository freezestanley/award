import React from 'react';
import router from 'umi/router';
import { checkLogin } from '@/utils/tools';
import styles from './index.less';
import { promotionLink } from '@/services/user.js';
const shareIcon = require('@/assets/icon/share.svg');

export default function RechargeNavbar({ gameId = '' }) {
  const handleRecharge = () => {
    checkLogin(() => {
      router.push('/recharge/result');
    });
  };
  const handleShare = () => {
    promotionLink().then(res => {
      alert(gameId);
    });
  };
  return (
    <div className={styles.navbar}>
      <div className="left">
        <p className="t1">
          应付金额<span>xx元</span>
        </p>
        <p className="t2">
          已省<span>xx元</span>
        </p>
        <img className="share" onClick={handleShare} src={shareIcon} alt="share" />
      </div>
      <div className="right" onClick={handleRecharge}>
        <span>充值</span>
      </div>
    </div>
  );
}
