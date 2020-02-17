import React, { useState, useRef, useEffect } from 'react';
import router from 'umi/router';
import { orderInfo } from '@/services/global';
import { Query } from '@/utils/tools';
import Header from '@/components/Header';
import Button from '@/components/Button';
import OkIcon from '@/assets/icon/ok.svg';
import DataLoading from '@/components/status/DataLoading';
import FailIcon from '@/assets/icon/fail.svg';
import styles from './index.less';

export default function Result({ data = '100钻石' }) {
  const [isOk, setOk] = useState(false);
  const [delay, setDelay] = useState(1500);
  const [loading, setLoading] = useState(true);
  const [amountCoin, setAmountCoin] = useState(0);
  const [count, setCount] = useState(0);
  // const {
  //   out_trade_no = '',
  //   total_amount = 1,
  //   trade_no = '',
  //   subject = '',
  // } = window.location.query;
  const oid = Query.get('out_trade_no');
  console.log('[22] index.jsx: ', oid);
  const [txt, setTxt] = useState('订单确认中，请等待...');

  // console.log('[11] index.js: ', out_trade_no);

  useInterval(
    () => {
      setCount(count + 1);
      if (count > 5) {
        setDelay(null);
        setTxt('订单确认超时，请联系客服');
      }
      orderInfo({ orderId: oid }).then(res => {
        console.log('[36] index.jsx: ', res);
        if (res.respCode === 0) {
          setOk(true);
          setLoading(false);
          setAmountCoin(res.content.amountCoin);
        }
      });
    },
    !isOk ? delay : null,
  );
  if (loading) return <DataLoading content={txt} />;
  return (
    <div className={styles.result}>
      <Header title="充值结果" onClose={() => router.push('/')} />
      <div className="icon" style={{ paddingTop: 90 }}>
        <img src={isOk ? OkIcon : FailIcon} alt="result" />
        <p>{isOk ? '充值成功' : '充值失败'}</p>
        {isOk && <p>{amountCoin}钻石</p>}
      </div>
      {isOk ? (
        <Button onClick={() => router.push('/recharge/record')}>查看充值</Button>
      ) : (
        <Button>返回首页</Button>
      )}
    </div>
  );
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
