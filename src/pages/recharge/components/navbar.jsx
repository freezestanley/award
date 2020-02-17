import React from 'react';
import router from 'umi/router';
import copy from 'copy-to-clipboard';
import { Toast } from 'zarm';
import { checkLogin } from '@/utils/tools';
import styles from './index.less';
import { promotionLink } from '@/services/user';
const shareIcon = require('@/assets/icon/share.svg');

export default function RechargeNavbar({ priceAmount = 0, handleSubmit, topUpAmount }) {
  const handleRecharge = () => {
    handleSubmit();
    // checkLogin(() => {
    //   router.push('/recharge/result');
    // });
  };
  const handleShare = () => {
    const uid = window.sessionStorage.getItem('user') || '';
    promotionLink({ hackuid: uid, shareUrl: window.location.origin }).then(res => {
      // console.log('分享链接===>', res);
      // alert(gameId);
      copy(`这里给游戏充值最低三折，同样消费加倍快乐，打折传送门: ${res.content.promotionLink}`);
      Toast.show(`分享内容已经复制到剪贴板，去分享`);
    });
  };
  return (
    <div className={styles.navbar}>
      <div className="left">
        <p className="t1">
          应付金额<span>{priceAmount.toFixed(2)}元</span>
        </p>
        <p className="t2">
          已省<span>{(topUpAmount - priceAmount).toFixed(2)}元</span>
        </p>
        <img className="share" onClick={handleShare} src={shareIcon} alt="share" />
      </div>
      <div className="right" onClick={handleRecharge}>
        <span>充值</span>
      </div>
    </div>
  );
}
