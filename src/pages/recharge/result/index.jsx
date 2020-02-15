import React from 'react';
import router from 'umi/router';
import Header from '@/components/Header';
import Button from '@/components/Button';
import OkIcon from '@/assets/icon/ok.svg';
import FailIcon from '@/assets/icon/fail.svg';
import styles from './index.less';

export default function Result({ isOk = true, data = '100钻石' }) {
  return (
    <div className={styles.result}>
      <Header title="充值结果" onClose={() => router.push('/')} />
      <div className="icon" style={{ paddingTop: 90 }}>
        <img src={isOk ? OkIcon : FailIcon} alt="result" />
        <p>{isOk ? '充值成功' : '充值失败'}</p>
        {isOk && <p>{data}</p>}
      </div>
      {isOk ? (
        <Button onClick={() => router.push('/recharge/record')}>查看充值</Button>
      ) : (
        <Button>返回首页</Button>
      )}
    </div>
  );
}
