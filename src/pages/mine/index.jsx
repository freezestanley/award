import React, { useReducer } from 'react';
import { getUserInfo } from '@/utils/tools';
import { Cell, Modal } from 'zarm';
import router from 'umi/router';

import styles from './index.less';

export default function Mine() {
  const [state, setState] = useReducer((o, n) => ({ ...o, ...n }), {
    visible: false,
  });
  console.log('[5] index.jsx: ', getUserInfo());
  const data = getUserInfo();
  const handleModal = () => {
    setState({ visible: true });
  };
  return (
    <div className={styles.mine}>
      <div className="user">
        <img src={require('@/assets/icon/default.png')} alt="avatar" />
        <div>
          <p>{data.name}</p>
          <p>{data.phone}</p>
        </div>
      </div>
      <Cell hasArrow title="我的充值" onClick={() => router.push('/')}></Cell>
      <Cell hasArrow title="提现记录" onClick={() => router.push('/')}></Cell>
      <Cell hasArrow title="我邀请的人" onClick={() => router.push('/')}></Cell>
      <Cell hasArrow title="联系客服" onClick={handleModal}></Cell>
      <Modal
        className={styles.modal}
        visible={state.visible}
        title="请添加客服微信"
        closable
        onCancel={() => setState({ visible: false })}
      >
        ants001
      </Modal>
    </div>
  );
}
