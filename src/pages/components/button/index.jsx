import React, { useEffect, useState } from 'react';
import styled from './index.less';
import router from 'umi/router';

export default (props) => {
  const [Disabled, setDisabled] = useState(props.disabled);
  return (
      <div className={`${Disabled ? styled['award_get_disabled']: styled['award_get']}`}
        onClick={props.clickhandle}>
        {props.txt}
        
      </div>
  )
}