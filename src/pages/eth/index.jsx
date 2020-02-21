import React, { useEffect, useState } from 'react';
import styled from './index.less';
import Close from '../components/close';
import router from 'umi/router';
import * as Service from '@/services';
import Blackbtn from '../components/blackbtn';
import { connect } from 'dva';

const Change = props => {
  const [ethAddress, setEthAddress] = useState();
  const [distype, setDistype] = useState(true);
  const clickhandle = () => {
    console.log('---------------------');
    Service.token_address(ethAddress).then(res => {
      if (res.data.code === 0) {
        router.push('/payment');
      }
    });
  };
  const changhandle = e => {
    let va = e.target.value.trim();
    let t = /^(0x)?[a-fA-F0-9]{40}$/.test(va);
    setDistype(t ? false : true);
    setEthAddress(va);
  };
  return (
    <div className={styled['change']}>
      <Close />
      <div className={styled['login_title']}>转出纪念徽章</div>
      <div className={styled['login_title1']}>请填写你的ETH钱包地址</div>
      <textarea
        type="text"
        placeholder="输入转出地址"
        maxLength="200"
        className={styled['enter_eth']}
        onChange={e => changhandle(e)}
      />

      {/* <div 
          className={styled['confirm_out']} 
          onClick={clickhandle}
        >确认转出</div> */}

      <Blackbtn txt="确认转出" clickhandle={clickhandle} disabled={distype} />
    </div>
  );
};
export default connect(state => state)(Change);
