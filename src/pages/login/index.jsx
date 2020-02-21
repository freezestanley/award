import React, { useEffect, useState, useReducer, useRef } from 'react';
import styled from './index.less';
import Close from '../components/close';
import router from 'umi/router';
import { Toast } from 'zarm';
import { connect } from 'dva';

const GetCodePhone = props => {
  const phoneRef = useRef();
  const [checkType, setCheckType] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState();
  const phoneChange = e => {
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
          onChange={e => phoneChange(e)}
        />
      </div>

      <div
        className={`${styled['login_send']}`}
        onClick={!checkType ? () => {} : e => props.sendHandler(phoneNumber)}
        style={{ background: !checkType ? '#eee' : '#000' }}
      >
        发送验证码
      </div>
    </div>
  );
};

const SubmitCode = props => {
  const [checkType, setCheckType] = useState(false);
  const [send, setSend] = useState(true);
  const [intval, setIntval] = useState();
  const [checkCode, setCheckCode] = useState();
  const [txt, setTxt] = useState('获取验证码');
  const [firstVeri, setFirstVeri] = useState(false);
  const timerRef = useRef(0);
  let id,
    num = 60;
  useEffect(() => {
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);
  const changeHandler = e => {
    let va = e.target.value.trim();
    if (firstVeri) {
      setCheckType(!/^[0-9a-zA-Z]{6}$/.test(va) ? false : true);
    }
    setCheckCode(va);
  };
  const sendHandler = e => {
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
        setTxt(`重新发送${num}`);
      }
    }, 1000);
    timerRef.current = id;
    props.verifyHandler();
  };

  return (
    <div>
      <div className={styled['login_box']}>
        <input
          className={styled['login_code']}
          placeholder="请输入验证码"
          maxLength="6"
          type="text"
          onChange={e => changeHandler(e)}
        />
        <div
          className={styled['login_resend']}
          style={{ background: !send ? '#eee' : '#fff' }}
          onClick={!send ? () => {} : e => sendHandler(e)}
        >
          {txt}
        </div>
      </div>
      <div
        className={styled['login_send']}
        onClick={!checkType ? () => {} : e => props.clickhandle(checkCode)}
        style={{ background: !checkType ? '#eee' : '#000' }}
      >
        确认领取
      </div>
    </div>
  );
};
const Login = props => {
  const [type, setType] = useState(true);
  const [usePhone, setUsePhone] = useState();

  //   const checkhandle = () => {
  //     service.login(phone).then(res => {});
  //     setType(false);
  //   };
  //   const [count, dispath] = useReducer((state, action) => {}, 0);

  const phoneChange = e => {};
  const sendHandler = e => {
    props.dispatch({
      type: 'login/getMyTopUps',
      payload: {
        phone: e,
      },
    });

    setType(false);
  };
  const clickhandle = e => {
    debugger;
    props.dispatch({
      type: 'login/submitVert',
      payload: {
        phone: props.login.phone,
        verify_code: e,
      },
      callback: res => {
        debugger;
        console.log(res);
        router.push('/receive');
      },
    });
  }; //

  const verifyHandler = e => {
    props.dispatch({
      type: 'login/getverify',
      payload: {
        phone: props.login.phone,
      },
    });

    setType(false);
  };
  return (
    <div className={styled['login']}>
      <Close />
      <div className={styled['login_title']}>手机动态码登陆</div>
      <div className={styled['login_title1']}>未注册的手机号验证后将自动创建新账号</div>
      {type ? (
        <GetCodePhone phoneChange={e => phoneChange(e)} sendHandler={e => sendHandler(e)} />
      ) : (
        <SubmitCode clickhandle={e => clickhandle(e)} verifyHandler={e => verifyHandler(e)} />
      )}
      {console.log(props)}
    </div>
  );
};
export default connect(state => state)(Login);
