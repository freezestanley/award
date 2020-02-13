import React, { useReducer } from 'react';
import { Input, Toast } from 'zarm';
import * as service from '@/services/global';
import router from 'umi/router';
import Header from '@/components/Header';
import Button from '@/components/Button';
import SendCode from './components/SendCode';

import styles from './index.less';

const rules = {
  phone: '请输入手机号',
  verificationCode: '请输入验证码',
};

export default function Login() {
  const [state, setState] = useReducer((o, n) => ({ ...o, ...n }), {
    loading: false,
    form: {
      phone: '',
      verificationCode: '',
    },
  });
  // const handleLogin = () => {
  //   window.sessionStorage.setItem(
  //     'user',
  //     JSON.stringify({ phone: '1239349012', name: '盎司902ksjdss' }),
  //   );
  //   router.push('/');
  // };
  const handleLogin = () => {
    let flag = false;
    Object.keys(state.form).forEach(key => {
      if (!state.form[key] && !flag) {
        flag = true;
        Toast.show(rules[key]);
      }
    });
    if (!flag) {
      console.log('[29] signup.jsx: ', 'submit');
      service.login(state.form).then(res => {
        // console.log('[33] index.jsx: ', res);
        if (res.data.respCode === 0) {
          window.sessionStorage.setItem('user', JSON.stringify(res.data.data));
          router.push('/');
        } else {
          Toast.show(res.data.respMsg);
        }
      });
    }
  };
  const handleChange = (val, key) => {
    setState({ form: { ...state.form, [key]: val } });
  };
  return (
    <>
      <Header title="手机号登录" />
      <div style={{ padding: '60px 0 30px' }} className={styles.login}>
        <Input
          className="phone"
          placeholder="请输入手机号"
          onChange={e => handleChange(e, 'phone')}
        />
        <div className="code-control">
          <Input
            className="code"
            placeholder="请输入验证码"
            onChange={e => handleChange(e, 'verificationCode')}
          />
          <SendCode />
        </div>
      </div>
      <Button onClick={handleLogin}>登录</Button>
    </>
  );
}
