import React, { useEffect, useState } from 'react';
import styled from './index.less';
import Close from '../components/close';
import * as Service from '@/services';

export default (props) => {
	const [ info, setInfo ] = useState({
		rece: null,
		payer: null,
		eth: null,
		time: null,
		type: null
	});
	useEffect(() => {
		Service.userStatus().then((res) => {
			if (res.data.code === 0) {
				setInfo({
					rece: res.data.data.receipt_address,
					payer: res.data.data.payer,
					eth: res.data.data.fee,
					type: res.data.data.tx_type,
					time: res.data.data.tx_time
				});
			}
		});
	}, []);

	return (
		<div className={styled['pay']}>
			<Close />
			<div className={styled['login_title']}>支付中</div>
			<ul className={styled['pay_table']}>
				<li>
					<div>收款方</div>
					<div>{info.rece}</div>
				</li>
				<li>
					<div>付款方</div>
					<div>{info.payer}</div>
				</li>
				<li>
					<div>转出手续费</div>
					<div>{info.eth}</div>
				</li>
				<li>
					<div>交易类型</div>
					<div>{info.type}</div>
				</li>
				<li>
					<div>交易时间</div>
					<div>{info.time}</div>
				</li>
			</ul>

			<div className={styled['pay_call']}>如有疑问，请联系：service@mem</div>
		</div>
	);
};
