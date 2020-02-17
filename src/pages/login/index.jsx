import React, { useReducer } from 'react';
import { Input, Toast } from 'zarm';
import * as service from '@/services/global';
import router from 'umi/router';
import { Query } from '@/utils/tools';
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
  const handleLogin = () => {
    // const { gameId } = window.location.search;
    const gameId = Query.get('gameId');
    const pid = window.sessionStorage.getItem('promotorId') || '';
    let flag = false;
    Object.keys(state.form).forEach(key => {
      if (!state.form[key] && !flag) {
        flag = true;
        Toast.show(rules[key]);
      }
    });

    if (!flag) {
      if (!/^1\d{10}$/.test(state.form.phone)) {
        return Toast.show('手机号码格式错误');
      }
      // console.log('[29] signup.jsx: ', 'submit');
      service.login({ ...state.form, promoterUserId: pid }).then(res => {
        const { content, respMsg = '' } = res;
        if (content && content['uid']) {
          Toast.show('登录成功');
          window.sessionStorage.setItem('user', JSON.stringify(content['uid']));
          router.push(gameId ? `/recharge?gameId=${gameId}` : '/');
        } else {
          Toast.show(respMsg);
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
