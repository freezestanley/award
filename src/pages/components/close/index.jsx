import React, { useEffect, useState } from 'react';
import styled from './index.less';
import router from 'umi/router';
import cookie from '@/utils/cookie';
export default (props) => {
	const clickhandle = () => {
		let token = cookie.get('token');
		if (token) {
			router.push('/receive');
		} else {
			router.push('/');
		}
	};
	return <b className={styled['close']} onClick={clickhandle} />;
};
