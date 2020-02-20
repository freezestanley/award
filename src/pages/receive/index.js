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


const Tag = (props) => (
	<div className={styled['title']}>
		成功领取了“抗击新冠肺炎纪念徽章”
		<br /> 作为 共度时艰 证明
	</div>
);

function PayOutPut(props) {
	const clickhandle = () => router.push('/eth');
	const [ qrcode, setQrcode ] = useState();
	const [ userType, setUserType ] = useState();
	let token = props.login ? props.login.token || '' : '';
	useEffect(
		() => {
			Service.getQrcode().then((res) => {
        if (res.data.code === 0) {
          setQrcode(
           res.data.data.qr_url
          );
        }
				
			});
			console.log('-------------');
			Service.userStatus(token).then((res) => {
        // cookie.set('token', token);
        if (res.data.code === 0) {
          setUserType(res.data.data.status);
        }
        
        // setUserType(1);
			});
		},
		[ token ]
	);

	return (
		<div className={styled['output']}>
			<div className={styled['output_content']}>
				<Award title={<Tag />} />
        { userType === 0 ? (
          <>
            <img className={styled['qrcode']} src={qrcode} />
            <div className={styled['shareqrcode']}>长按保存分享二维码</div>
            <div style={{ textAlign: 'center' }}>
              <Button txt="转出到我的ETH钱包" clickhandle={clickhandle} />
            </div>
          </>
        ) : null}

        { userType === 1 ? (
          <>
            <img className={styled['qrcode']} src={qrcode} />
            <div className={styled['shareqrcode']}>长按保存分享二维码</div>
            <div style={{ textAlign: 'center' }}>
              <Button txt="支付验证中" clickhandle={clickhandle} disabled/>
            </div>
          </>
        ) : null}
				
        { userType === 2 ? 
        (
          <>
            <div className={styled['eth_money']}>
              <div>徽章已转出到 ETH 钱包</div>
              <div>"0xish0xish0xish0xish0xish0xish0xish0xish0xish0xish0xish0xish0xish0xish"</div>
            </div>
            <div className={styled['eth_address']}>
              前往查看：
              <a>
                https://lanhuapp.com/web/#/item/project/board/detail?pid=84bebbcd-536d-4246-8234-34a2a9738990&activeSectionId=d49f7790-e955-4cfe-b00c-9455f7834f61&teamId=61621a1c-4d44-402d-9643-7a9293a5837c&project_id=84bebbcd-536d-4246-8234-34a2a9738990&image_id=2078ef1b-16d8-411c-8e73-bfb5a143b072
              </a>
            </div>
          </>
        ) : null }


			</div>
			<Footer />
		</div>
	);
}
export default connect((state) => state)(PayOutPut);
