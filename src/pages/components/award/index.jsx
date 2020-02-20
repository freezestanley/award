import React, { useEffect, useState } from 'react';
import styled from './index.less';
import Num from '../num';
import * as Service from '@/services';

export default (props) => {
	const [ person, setPerson ] = useState(0);
	useEffect(
		() => {
			Service.getPerson().then((res) => {
				if (res.data.code === 0) {
					setPerson(res.data.data.total);
				}
			});
		},
		[ person ]
	);
	return (
		<div className={styled['award']}>
			<div className={styled['award_content']}>
				<div className={styled['award_org']}>组织名称</div>
				{props.title}
				<div className={styled['award_num']}>
					<Num txt={person} />
					<span>人领取</span>
				</div>
				<div className={styled['award_tips']}>公开透明 不可篡改 永久留存</div>
				<div className={styled['award_ruby']} />
				<div className={styled['award_tips1']}>基于以太坊区块链发行</div>
				{props.children}
			</div>
		</div>
	);
};
