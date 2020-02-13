import React from 'react';
import { Input } from 'zarm';
import router from 'umi/router';
import Header from '@/components/Header';
import Button from '@/components/Button';
import SendCode from './components/SendCode';

import styles from './index.less';

export default function Login() {
  const handleLogin = () => {
    router.push('/');
  };
  return (
    <>
      <Header title="手机号登录" />
      <div style={{ padding: '60px 0 30px' }} className={styles.login}>
        <Input className="phone" />
        <div className="code-control">
          <Input className="code" />
          <SendCode />
        </div>
      </div>
      <Button onClick={handleLogin}>登录</Button>
    </>
  );
}
