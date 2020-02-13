import React, { useEffect, useState, useRef } from 'react';
import cns from 'classnames';
import { Button } from 'zarm';

export default ({ className, onClick, duration = 30 }) => {
  const [count, setCount] = useState(duration);
  const [delay] = useState(1000);
  const [isRunning, setIsRunning] = useState(false);
  const [txt, setTxt] = useState('获取验证码');
  const [disabled, setDisabled] = useState(false);

  useInterval(
    () => {
      setTxt(`${count}s后重新发送`);
      setCount(count - 1);
      setDisabled(true);
      if (count === 0) {
        setIsRunning(false);
        setDisabled(false);
        setTxt('重新发送');
      }
    },
    isRunning ? delay : null,
  );

  const handleRun = () => {
    setIsRunning(true);
    setCount(duration);
  };

  return (
    <Button className={cns(className, 'send-code')} size="sm" disabled={disabled}>
      {disabled ? txt : <span onClick={handleRun}>{txt}</span>}
    </Button>
  );
};

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
