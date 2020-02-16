import React from 'react';
import router from 'umi/router';
import { checkLogin } from '@/utils/tools';
import styles from './index.less';
import { promotionLink } from '@/services/user.js';
const shareIcon = require('@/assets/icon/share.svg');

export default function RechargeNavbar({  topUpAmount=0,priceAmount =0, handleSubmit }) {
  const handleRecharge = () => {
    handleSubmit()
    // checkLogin(() => {
    //   router.push('/recharge/result');
    // });
  };
  const handleShare = () => {

    promotionLink({ shareUrl: encodeURIComponent(window.location.origin)}).then(res => {

      console.log("分享链接===>", res)
      const {respCode,content} =res

      if(respCode===0){
        if(content["promotionLink"]){

        }
      }

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
          已省<span>{topUpAmount-priceAmount}元</span>
        </p>
        <img className="share" onClick={handleShare} src={shareIcon} alt="share" />
      </div>
      <div className="right" onClick={handleRecharge}>
        <span>充值</span>
      </div>
    </div>
  );
}
