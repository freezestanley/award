import React, { useReducer } from 'react';
import { Input, Cell, Select } from 'zarm';
import cns from 'classnames';
import styles from './index.less';

export default function RechargeForm(props) {
  const [state, setState] = useReducer((o, n) => ({ ...o, ...n }), {
    area: '',
  });
  const hanldeFindAccount = () => {
    alert('[7] form.jsx: FindAccount');
  };
  return (
    <div className={cns(styles.form, props.className)}>
      <h3>充值信息</h3>
      <Cell
        title="游戏账号"
        description={
          <span className="find" onClick={hanldeFindAccount}>
            如何查账号
          </span>
        }
      >
        <Input
          type="text"
          placeholder="请输入游戏账号"
          // value={this.state.inputValue}
          // onChange={this.handleInputChange}
        />
      </Cell>
      <Cell title="所在区服">
        <Select
          // value={value}
          dataSource={[
            { label: 'xxx', value: 1 },
            { label: 'as', value: 2 },
            { label: 'df', value: 3 },
            { label: 'fgg', value: 4 },
          ]}
          onOk={selected => {
            console.log('Select onOk: ', selected);
            setState({
              area: selected.map(item => item.value),
            });
          }}
        />
      </Cell>
      <Cell title="充值金额">
        <Input
          type="text"
          placeholder="请输入充值金额"
          // value={this.state.inputValue}
          // onChange={this.handleInputChange}
        />
      </Cell>
      <p className="game-currency">
        到账<span>xx</span>
        <i>钻石</i>
      </p>
    </div>
  );
}
