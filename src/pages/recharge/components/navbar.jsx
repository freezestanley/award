import React from 'react';
import router from 'umi/router';
import { checkLogin } from '@/utils/tools';
import styles from './index.less';
import { promotionLink } from '@/services/user.js';
const shareIcon = require('@/assets/icon/share.svg');

export default function RechargeNavbar({  priceAmount =0, handleSubmit }) {
  const handleRecharge = () => {
    handleSubmit()
    // checkLogin(() => {
    //   router.push('/recharge/result');
    // });
  };
  const handleShare = () => {
    const uid = window.sessionStorage.getItem("user")||"";
    promotionLink({hackuid: uid, shareUrl: encodeURIComponent("/")}).then(res => {

      console.log("分享链接===>", res)
      // alert(gameId);
    });
  };
  return (
    <div className={styles.navbar}>
      <div className="left">
        <p className="t1">
          应付金额<span>{priceAmount}元</span>
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
