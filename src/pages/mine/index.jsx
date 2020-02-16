import React, { useReducer, useEffect } from 'react';
import { Cell, Modal, Toast } from 'zarm';
import copy from 'copy-to-clipboard';
import router from 'umi/router';
import Button from '@/components/Button';
import Navbar from '@/components/Navbar';
import { getUserInfo, formatNumber, toThousands } from '@/utils/tools';
import { connect } from 'dva';

import styles from './index.less';

function MenuTitle({ img, name }) {
  return (
    <span>
      <img style={{ verticalAlign: '-4px', marginRight: 8 }} src={img} alt="icon" />
      <span>{name}</span>
    </span>
  );
}

function Mine({ userInfo = {}, dispatch }) {
  const [state, setState] = useReducer((o, n) => ({ ...o, ...n }), {
    visible: false,
  });
  console.log('[5] index.jsx: ', getUserInfo());
  const data = getUserInfo();

  useEffect(() => {
    if (!data) {
      router.push('/login');
      return null;
    } else {
      dispatch({
        type: 'user/getMyInfo',
        payload: {},
      });
    }
  }, [data, dispatch]);

  const handleModal = () => {
    setState({ visible: true });
  };
  const handleESC = () => {
    window.sessionStorage.clear();
    router.push('/');
  };
  const handleCopy = () => {
    copy('ants001');
    Toast.show('复制成功，请前往微信添加');
  };

  // console.log();
  console.log('===>state==>用户信息', userInfo);

  return (
    <div className={styles.mine}>
      <div className="user">
        <img src={userInfo.avatarUrl} alt="avatar" />
        <div>
          <p className="name">{userInfo.userName}</p>
          <p className="phone">{userInfo.phoneMasked}</p>
        </div>
        <img className="esc" onClick={handleESC} src={require('@/assets/icon/esc.svg')} alt="ESC" />
      </div>
      <div className="wallet">
        <div className="w1" onClick={() => router.push('/cash')}>
          <p className="amount">{toThousands(userInfo.balance)}</p>
          <p className="txt extractable">可提现佣金(元)</p>
        </div>
        <div onClick={() => router.push('/mine/commission')}>
          <p className="amount">{toThousands(userInfo.cumulativeBalance)}</p>
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
        <p style={{ marginBottom: 30 }}>ants001</p>
        <Button onClick={handleCopy}>复制微信号</Button>
      </Modal>
      <Navbar active="mine" />
    </div>
  );
}

export default connect(state => {
  return state.user;
})(Mine);
