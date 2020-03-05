import React, { useEffect, useState } from 'react';
import styled from './index.less';
import Close from '../components/close';
import router from 'umi/router';
import Copy from 'copy-to-clipboard';
import { Toast } from 'zarm';
import * as Service from '@/services';
import { connect } from 'dva';

export default (props) => {
	const clickhandle = () => {
		Service.pay_done().then((res) => {
			if (res.data.code === 0) {
				router.push('/pay');
			}
		});
	};
	const [ qrcode, setQrcode ] = useState();
	const [ link, setLink ] = useState();
	const [ unit, setUnit ] = useState();
	useEffect(() => {
		Service.pay_address().then((res) => {
			if (res.data.code === 0) {
				setLink(res.data.data.address);
				setQrcode(res.data.data.qr_url);
				setUnit(res.data.data.fee);
			}
		});
	}, []);

	const clipboard = () => {
		Copy(link, {
			debug: true,
			message: 'Press #{key} to copy'
		});
		Toast.show('请粘贴分享给他人');
	};

	return (
		<div className={styled['payment']}>
			<Close />
			<div className={styled['login_title']}>支付中</div>
			<div className={styled['payment_content']}>
				区块徽章项目目前由爱好者志愿运营，无商业化收入，因此，转出徽章时需要您向以下地址支付
				<span>{unit}</span>,以覆盖区块链转账费用
			</div>
			<div className={styled['shadow_box']}>
				<div className={styled['payment_link']}>
					{link}
					<div className={styled['copy_link']} onClick={clipboard}>
						复制地址
					</div>
				</div>

				<img className={styled['payment_qr']} src={qrcode} />
				<div className={styled['payment_qrtxt']}>长按保存收款二维码</div>
			</div>

			<div className={styled['pay_done']} onClick={clickhandle}>
				支付完成
			</div>
		</div>
	);
};
