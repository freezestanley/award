import { Toast } from 'zarm';
import { useState, useEffect } from 'react';
import styled from './index.less';
import cn from 'classnames';
import router from 'umi/router';
import Info from './components/main/info';
import Award from './components/award';
import Button from './components/button';
import Footer from './components/footer';
import cookie from '@/utils/cookie';

const Title = () => <div className={styled['award_title']}>抗击新冠肺炎纪念徽章</div>;

export default function() {
	const clickhandle = () => router.push('/login');
	let token = cookie.get('token');
	// if (token) {
	// 	router.push('/receive');
	// } else {
	// 	router.push('/');
	// }
	useEffect(
		() => {
			if (token) {
				router.push('/receive');
			} else {
				router.push('/');
			}
		},
		[ token ]
	);

	return (
		<div className={styled['page']}>
			<Award title={<Title />}>
				<div style={{ textAlign: 'center' }}>
					<Button clickhandle={clickhandle} txt="免 费 领 取" />
				</div>
				<Footer />
			</Award>
			<Info />
		</div>
	);
}
