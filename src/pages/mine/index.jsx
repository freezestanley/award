import React, { useReducer } from 'react';
import { Cell, Modal, Toast } from 'zarm';
import copy from 'copy-to-clipboard';
import router from 'umi/router';
import Button from '@/components/Button';
import Navbar from '@/components/Navbar';
import { getUserInfo, formatNumber } from '@/utils/tools';

import styles from './index.less';

function MenuTitle({ img, name }) {
  return (
    <span>
      <img style={{ verticalAlign: '-4px', marginRight: 8 }} src={img} alt="icon" />
      <span>{name}</span>
    </span>
  );
}

export default function Mine() {
  const [state, setState] = useReducer((o, n) => ({ ...o, ...n }), {
    visible: false,
  });
  console.log('[5] index.jsx: ', getUserInfo());
  const data = getUserInfo();
  if (!data) {
    router.push('/login');
    return null;
  }
  const handleModal = () => {
    setState({ visible: true });
  };
  const handleESC = () => {
    window.sessionStorage.clear();
    router.push('/');
  };
  const handleCopy = () => {
    copy('ants001');
    Toast.show('复制成功，请前往微信粘贴搜索');
  };
  return (
    <div className={styles.mine}>
      <div className="user">
        <img src={require('@/assets/icon/default.png')} alt="avatar" />
        <div>
          <p className="name">{data.name}</p>
          <p className="phone">{data.phone}</p>
        </div>
        <img className="esc" onClick={handleESC} src={require('@/assets/icon/esc.svg')} alt="ESC" />
      </div>
      <div className="wallet">
        <div className="w1" onClick={() => router.push('/cash')}>
          <p className="amount">{formatNumber(12043)}</p>
          <p className="txt extractable">可提现佣金(元)</p>
        </div>
        <div onClick={() => router.push('/mine/commission')}>
          <p className="amount">{formatNumber(512434.23)}</p>
          <p className="txt total">累计佣金(元)</p>
        </div>
      </div>
      <Cell
        hasArrow
        title={<MenuTitle name="我的充值" img={require('@/assets/icon/recharge.svg')} />}
        onClick={() => router.push('/recharge/record')}
      />
      <Cell
        hasArrow
        title={<MenuTitle name="提现记录" img={require('@/assets/icon/time.svg')} />}
        onClick={() => router.push('/cash/record')}
      />
      <Cell
        hasArrow
        title={<MenuTitle name="我邀请的人" img={require('@/assets/icon/invite.svg')} />}
        onClick={() => router.push('/mine/invite')}
      />
      <Cell
        title={<MenuTitle name="联系客服" img={require('@/assets/icon/wechat.svg')} />}
        onClick={handleModal}
      />
      <Modal
        className={styles.modal}
        visible={state.visible}
        title="请添加客服微信"
        closable
        maskClosable
        onCancel={() => setState({ visible: false })}
      >
        <p>请添加客服微信：ants001，进行充值问题咨询或反馈~</p>
        <Button onClick={handleCopy}>复制微信号</Button>
      </Modal>
      <Navbar active="mine" />
    </div>
  );
}
