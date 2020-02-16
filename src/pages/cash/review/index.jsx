import React from 'react';
// import router from 'umi/router';
import Header from '@/components/Header';
import Button from '@/components/Button';
import OkIcon from '@/assets/icon/ok.svg';
import styles from './index.less';
import router from 'umi/router';

export default function Result({ isOk = true, data = '100钻石' }) {
  return (
    <div className={styles.result}>
      <Header title="提现审核" />
      <div className="icon" style={{ paddingTop: 90 }}>
        <img src={OkIcon} alt="review" />
        <p>提现申请提交成功</p>
        <p>请等待审核</p>
      </div>
      <Button onClick = {()=>router.push("/cash/record")}>查看提现明细</Button>
    </div>
  );
}
