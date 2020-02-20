
import { Toast } from 'zarm';
import { useState } from 'react';
import styled from './index.less';
import cn from 'classnames';
import router from 'umi/router';
import Award from '../components/award';
import Button from '../components/button';
import Footer from '../components/footer';

const Tag = props => <div className={styled['title']}>成功领取了“抗击新冠肺炎纪念徽章”<br/> 作为 共度时艰 证明</div>

export default function () {
  return (
    <div className={styled['outputed']}>
      <div className={styled['outputed_content']}>
        <Award title={<Tag/>}>
        </Award>
        <div className={styled['eth_money']}>
          <div>徽章已转出到 ETH 钱包</div>
          <div>"0xish0xish0xish0xish0xish0xish0xish0xish0xish0xish0xish0xish0xish0xish"</div>
        </div>
        <div className={styled['eth_address']}>
          前往查看：
          <a>https://lanhuapp.com/web/#/item/project/board/detail?pid=84bebbcd-536d-4246-8234-34a2a9738990&activeSectionId=d49f7790-e955-4cfe-b00c-9455f7834f61&teamId=61621a1c-4d44-402d-9643-7a9293a5837c&project_id=84bebbcd-536d-4246-8234-34a2a9738990&image_id=2078ef1b-16d8-411c-8e73-bfb5a143b072</a></div>
      </div>
      <Footer/>
    </div>
  );
}
