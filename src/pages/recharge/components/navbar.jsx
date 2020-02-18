import React, { useEffect, useState } from 'react';
import router from 'umi/router';
import * as copy from 'copy-to-clipboard';
import { Toast } from 'zarm';
import cookie from '@/utils/cookie';
import styles from './index.less';
import { promotionLink } from '@/services/user';
const shareIcon = require('@/assets/icon/share.svg');

export default function RechargeNavbar({ gameId, priceAmount = 0, handleSubmit, topUpAmount }) {
  const [text, setText] = useState('');
  // const uid = window.sessionStorage.getItem('user') || '';
  const uid = cookie.get('user');
  const handleRecharge = () => {
    if (uid) {
      handleSubmit();
    } else {
      router.push(`/login?gameId=${gameId}`);
    }
  };

  useEffect(() => {
    (async () => {
      const res = await promotionLink({ hackuid: uid, shareUrl: `${window.location.origin}/` });
      const txt = `这里给游戏充值最低三折，同样消费加倍快乐，打折传送门: ${res.content.promotionLink}`;
      setText(txt);
    })();
  }, [uid]);

  const handleShare = () => {
    if (!uid) return Toast.show('请登录后再分享');
    copy(text);
    Toast.show(`分享内容已经复制到剪贴板，去分享`);
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
