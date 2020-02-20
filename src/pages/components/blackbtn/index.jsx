import React, { useEffect, useState, useReducer, useRef } from 'react';
import styled from './index.less';
import {Toast } from 'zarm';

export default (props) => {
    // const [Dabled, setDisabled] = useState(props.disabled)
    // useEffect(()=>{
    //     setDisabled(props.disabled)
    // }, [props.disabled])
  return (
    <div 
        className={styled['blackbtn']} 
        onClick={props.disabled ? () => {} : (e) => props.clickhandle()}
        style={{background:props.disabled ? '#eee' : '#000'}}
  >{props.txt}</div>
  )
}