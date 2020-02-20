import React, { useEffect, useState } from 'react';
import styled from './index.less';

export default (props) => {
  return (
    <div className={styled['award_txt']}>
        发放期限:<br/>2020.2.1 00:00:00 - 2020.4.1 23:59.59
    </div>
  )
}