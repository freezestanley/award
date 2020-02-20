import React, { useEffect, useState } from 'react';
import styled from './index.less';

export default props => {
  const [value, setValue] = useState(props.txt.toString());
  useEffect(() => {
    setValue(props.txt.toString());
  }, [props.txt]);
  return (
    <span className={styled['num']}>
      {value.split('').map((item, index) => (
        <b key={index}>{item}</b>
      ))}
    </span>
  );
};
