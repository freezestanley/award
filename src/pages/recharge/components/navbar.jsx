import React from 'react';
import router from 'umi/router';
import copy from 'copy-to-clipboard';
import { checkLogin } from '@/utils/tools';
import styles from './index.less';

const shareIcon = require('@/assets/icon/share.svg');

export default function RechargeNavbar() {
  const handleRecharge = () => {
    checkLogin(() => {
      router.push('/recharge/result');
    });
  };
  const handleShare = () => {
    // alert('Share');
    // TODO: 接口返回分享链接
    // 分享到微信，微博，QQ等
    copy('这里给游戏充值最低3折，同样消费加倍快乐，打折传送门：http://xxx.com');
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
