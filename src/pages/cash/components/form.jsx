import React, { useReducer } from 'react';
import cns from 'classnames';
import { Input, Cell, Toast } from 'zarm';
import Button from '@/components/Button';
import { createWithdraw } from '@/services/user.js';
import styles from './index.less';
import router from 'umi/router';

export default function CashForm(props) {
  const [state, setState] = useReducer((o, n) => ({ ...o, ...n }), {
    account: '',
    area: '',
    options: [],
    withdrawAmount: '',
    payAccount: '',
    payAccount1: '',
  });

  const handleChange = (e, tag) => {
    setState({
      ...state,
      [tag]: e,
    });
  };
  const handleClick = () => {
    if (state.withdrawAmount < 1) {
      return Toast.show('单次提现金额最少1元');
    }
    if (!state.payAccount) {
      return Toast.show('请输入收款的支付宝账号');
    }
    if (state.payAccount !== state.payAccount1) {
      Toast.show('您两次输入的账号不同，请重新输入');
    } else {
      let params = {
        dedupCode: Math.random(),
        payAccount: state.payAccount,
        payChannel: '1',
        withdrawAmount: state.withdrawAmount,
      };

      if (state.payAccount + '' && state.withdrawAmount + '') {
        createWithdraw(params).then(res => {
          if (res) {
            const { respCode } = res;
            if (respCode === 0) {
              router.push('/cash/review');
            }
          }
        });
      }
    }
  };
  return (
    <div className={cns(styles.form, props.className)}>
      <h3>提现信息</h3>
      <Cell title="提现金额">
        <Input
          type="text"
          placeholder="单次提现上限200元"
          onChange={e => handleChange(e, 'withdrawAmount')}
        />
      </Cell>
      <Cell title="支付宝账号">
        <Input
          onChange={e => handleChange(e, 'payAccount')}
          type="text"
          placeholder="请输入收款的支付宝账号"
        />
      </Cell>
      <Cell title="确认账号">
        <Input
          onChange={e => handleChange(e, 'payAccount1')}
          type="text"
          placeholder="请再次输入收款的支付宝账号"
          onBlur={e => {
            if (state.payAccount !== e) {
              Toast.show('您两次输入的账号不同，请重新输入');
            }
          }}
        />
      </Cell>

      <Button onClick={e => handleClick()} style={{ marginTop: 30 }}>
        提交
      </Button>
    </div>
  );
}
