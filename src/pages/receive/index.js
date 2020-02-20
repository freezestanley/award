import { Toast } from 'zarm';
import { useState, useEffect } from 'react';
import styled from './index.less';
import cn from 'classnames';
import router from 'umi/router';
import Award from '../components/award';
import Button from '../components/button';
import Footer from '../components/footer';
import * as Service from '@/services';
import { connect } from 'dva';

const Tag = props => (
  <div className={styled['title']}>
    成功领取了“抗击新冠肺炎纪念徽章”
    <br /> 作为 共度时艰 证明
  </div>
);

function PayOutPut(props) {
  const clickhandle = () => router.push('/eth');
  const [qrcode, setQrcode] = useState();
  const [userType, setUserType] = useState();
  const [link, setLink] = useState();
  const [eth, setEth] = useState();
  let token = props.login ? props.login.token || '' : '';
  useEffect(() => {
    Service.rece_qrcode().then(res => {
      if (res.data.code === 0) {
        setQrcode(res.data.data);
      }
    });

    Service.userStatus(token).then(res => {
      if (res.data.code === 0) {
        setUserType(res.data.data.status);
        if (res.data.data.status === 2) {
          Service.goto_look().then(res => {
            if (res.data.code === 0) {
              setLink(res.data.data);
            }
          });
          Service.pay_address().then(res => {
            if (res.data.code === 0) {
              setEth(res.data.data.address);
            }
          });
        }
      }
    });
  }, [token]);

  return (
    <div className={styled['output']}>
      <div className={styled['output_content']}>
        <Award title={<Tag />} />
        {userType === 0 ? (
          <>
            <img className={styled['qrcode']} src={qrcode} />
            <div className={styled['shareqrcode']}>长按保存分享二维码</div>
            <div style={{ textAlign: 'center' }}>
              <Button txt="转出到我的ETH钱包" clickhandle={clickhandle} />
            </div>
          </>
        ) : null}

        {userType === 1 ? (
          <>
            <img className={styled['qrcode']} src={qrcode} />
            <div className={styled['shareqrcode']}>长按保存分享二维码</div>
            <div style={{ textAlign: 'center' }}>
              <Button txt="支付验证中" disabled />
            </div>
          </>
        ) : null}

        {userType === 2 ? (
          <>
            <div className={styled['eth_money']}>
              <div>徽章已转出到 ETH 钱包</div>
              <div>"0xish0xish0xish0xish0xish0xish0xish0xish0xish0xish0xish0xish0xish0xish"</div>
            </div>
            <div className={styled['eth_address']}>
              前往查看：
              <a src={link}>{link}</a>
            </div>
          </>
        ) : null}
      </div>
      <Footer />
    </div>
  );
}
export default connect(state => state)(PayOutPut);
