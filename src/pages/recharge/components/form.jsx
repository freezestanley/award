import React, { useRef, useReducer } from 'react';
import { Input, Cell, Select } from 'zarm';
import cns from 'classnames';
import FindID from './find_id';

import styles from './index.less';

export default function RechargeForm(props) {
  const modalRef = useRef(null);
  const [state, setState] = useReducer((o, n) => ({ ...o, ...n }), {
    init: false,
    exist: false,
    account: '',
    area: '',
    amount: 0,
    options: [],
  });
  const hanldeFindAccount = () => {
    if (modalRef.current) {
      modalRef.current.show();
    }
  };
  const getAccount = () => {
    setState({
      init: false,
    });
    // api
    setState({
      exist: Math.random() > 0.5,
    });
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
          onBlur={getAccount}
          placeholder="请输入游戏账号"
          onChange={e => setState({ account: e })}
        />
      </Cell>
      {state.init || (!state.exist && <span className="id-error">该游戏无此账号，请重新输入</span>)}
      <Cell title="所在区服">
        <Select
          // value={value}
          placeholder="请选择游戏区服"
          dataSource={props.list}
          onOk={selected => {
            // console.log('Select onOk: ', selected);
            // let val = selected.map(item => item.value);
            // console.log('[40] form.jsx: ', val);
            setState({
              area: selected[0].value,
            });
          }}
        />
      </Cell>
      <Cell title="充值金额(元)">
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
      <FindID ref={modalRef} url={require('@/assets/game/1.png')} />
    </div>
  );
}
