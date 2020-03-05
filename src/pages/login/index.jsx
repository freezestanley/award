import React, { useEffect, useState, useReducer, useRef } from 'react';
import styled from './index.less';
import Close from '../components/close';
import router from 'umi/router';
import { Toast } from 'zarm';
import { connect } from 'dva';

const GetCodePhone = (props) => {
	const phoneRef = useRef();
	const [ checkType, setCheckType ] = useState(false);
	const [ phoneNumber, setPhoneNumber ] = useState();
	const phoneChange = (e) => {
		let va = e.target.value.trim();
		setCheckType(!/^1[3456789]\d{9}$/.test(va) ? false : true);
		props.phoneChange(va);
		setPhoneNumber(va);
	};
	return (
		<div>
			<div className={styled['login_box']}>
				<input
					className={styled['login_input']}
					placeholder="手机号"
					type="text"
					ref={phoneRef}
					maxLength="11"
					onChange={(e) => phoneChange(e)}
				/>
			</div>

			{/* <div
				className={`${styled['login_send']}`}
				onClick={!checkType ? () => {} : (e) => props.sendHandler(phoneNumber)}
				style={{ background: !checkType ? '#eee' : '#000' }}
			>
				发送验证码
			</div> */}
		</div>
	);
};

const SubmitCode = (props) => {
	const [ checkType, setCheckType ] = useState(false);
	const [ send, setSend ] = useState(false);
	const [ phone, setPhone ] = useState();
	const [ checkCode, setCheckCode ] = useState();
	const [ txt, setTxt ] = useState('获取验证码');
	const [ firstVeri, setFirstVeri ] = useState(false);
	const timerRef = useRef(0);
	const phoneRef = useRef();

	let id,
		num = 60 * 5;
	useEffect(() => {
		return () => {
			clearInterval(timerRef.current);
		};
	}, []);
	const changeHandler = (e) => {
		let va = e.target.value.trim();
		if (firstVeri) {
			setCheckType(!/^[0-9a-zA-Z]{6}$/.test(va) ? false : true);
		}
		setCheckCode(va);
	};
	const sendHandler = (e) => {
		setSend(false);
		setFirstVeri(true);
		id = setInterval(() => {
			num--;
			if (num < 0) {
				clearInterval(id);
				num = 60;
				setTxt('获取验证码');
				setSend(true);
			} else {
				let m = Math.floor(num / 60);
				let s = num % 60;

				setTxt(`重新发送${m <= 0 ? '' : m + '分'}${s + '秒'}`);
			}
		}, 1000);
		timerRef.current = id;
		props.verifyHandler(phone);
	};
	const phoneChange = (e) => {
		let va = e.target.value.trim();
		setSend(!/^1[3456789]\d{9}$/.test(va) ? false : true);
		setPhone(va);
	};

	return (
		<div>
			<div className={styled['login_box']}>
				<input
					className={styled['login_input']}
					placeholder="手机号"
					type="text"
					ref={phoneRef}
					maxLength="11"
					onChange={(e) => phoneChange(e)}
				/>

				<input
					className={styled['login_code']}
					placeholder="请输入验证码"
					maxLength="6"
					type="text"
					onChange={(e) => changeHandler(e)}
				/>
				<div
					className={styled['login_resend']}
					style={{ background: !send ? '#eee' : '#fff' }}
					onClick={!send ? () => {} : (e) => sendHandler(e)}
				>
					{txt}
				</div>
			</div>
			<div
				className={styled['login_send']}
				onClick={!checkType ? () => {} : (e) => props.clickhandle(checkCode, phone)}
				style={{ background: !checkType ? '#eee' : '#000' }}
			>
				确认领取
			</div>
		</div>
	);
};
const Login = (props) => {
	const [ type, setType ] = useState(true);
	const [ usePhone, setUsePhone ] = useState();

	//   const checkhandle = () => {
	//     service.login(phone).then(res => {});
	//     setType(false);
	//   };
	//   const [count, dispath] = useReducer((state, action) => {}, 0);

	const phoneChange = (e) => {};
	const sendHandler = (e) => {
		props.dispatch({
			type: 'login/getMyTopUps',
			payload: {
				phone: e
			}
		});

		setType(false);
	};
	const clickhandle = (e, b) => {
		debugger;
		props.dispatch({
			type: 'login/submitVert',
			payload: {
				phone: b,
				verify_code: e
			},
			callback: (res) => {
				debugger;
				console.log(res);
				router.push('/receive');
			}
		});
	}; //

	const verifyHandler = (e) => {
		props.dispatch({
			type: 'login/getverify',
			payload: {
				phone: e
			}
		});

		setType(false);
	};
	return (
		<div className={styled['login']}>
			<Close />
			<div className={styled['login_title']}>手机动态码登陆</div>
			<div className={styled['login_title1']}>未注册的手机号验证后将自动创建新账号</div>

			{/* <GetCodePhone phoneChange={(e) => phoneChange(e)} sendHandler={(e) => sendHandler(e)} /> */}

			<SubmitCode clickhandle={(e, b) => clickhandle(e, b)} verifyHandler={(e) => verifyHandler(e)} />

			{console.log(props)}
		</div>
	);
};
export default connect((state) => state)(Login);
