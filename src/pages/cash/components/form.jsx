import React, { useReducer } from 'react';
import cns from 'classnames';
import { Input, Cell } from 'zarm';
import Button from '@/components/Button';

import styles from './index.less';

export default function CashForm(props) {
  const [state, setState] = useReducer((o, n) => ({ ...o, ...n }), {
    account: '',
    area: '',
    amount: 0,
    options: [],
  });
  return (
    <div className={cns(styles.form, props.className)}>
      <h3>提现信息</h3>
      <Cell title="提现金额">
        <Input
          type="text"
          placeholder="单次提现上限200元"
          onChange={e => setState({ account: e })}
        />
      </Cell>
      <Cell title="支付宝账号">
        <Input type="text" placeholder="请输入收款的支付宝账号" />
      </Cell>
      <Cell title="确认账号">
        <Input type="text" placeholder="请再次输入收款的支付宝账号" />
      </Cell>

      <Button style={{ marginTop: 30 }}>提交</Button>
    </div>
  );
}
