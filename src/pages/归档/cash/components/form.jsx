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
    let msg = '';
    switch (true) {
      case state.withdrawAmount < 1:
        msg = '单次提现金额最少1元';
        break;
      case state.withdrawAmount > 200:
        msg = '单次提现上限200元';
        break;
      case state.withdrawAmount > props.balance:
        msg = '提现金额超过当前佣金，请重新输入';
        break;
      case !state.payAccount:
        msg = '请输入收款的支付宝账号';
        break;
      case state.payAccount !== state.payAccount1:
        msg = '您两次输入的账号不同，请重新输入';
        break;
      default:
        break;
    }
    if (msg) {
      return Toast.show(msg);
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
