import React, { useEffect, useState } from 'react';
import styled from './index.less';

export default props => {
  return (
    <div className={styled['info']}>
      <div className={styled['projectInfo']}>项目说明</div>
      <div className={styled['info_block1']}>
        <div>
          <h1>
            2019-nCoV 新型冠状病毒
            <br />
            波及全球大部分地区
          </h1>
        </div>
        <dl>
          <dt>
            <div>5,0000+人</div>
            <div>30+天</div>
            <div>2,0000+亿元</div>
          </dt>
          <dd>
            <div>感染人数</div>
            <div>隔离天数</div>
            <div>造成的经济损失</div>
          </dd>
        </dl>
      </div>
      <div className={styled['info_block2']}>
        <h2>
          基于以太坊区块链发行共克时艰
          <br />
          抗击新冠肺炎纪念徽章
        </h2>
        <p>
          新冠纪念徽章是我们利用区块链公开透明、不可篡改的特性，在其上发行数字电子收藏品的一次尝试，数据来源于公开信息，项目由行业爱好者志愿运营，不以盈利为目的。
        </p>
        <p>徽章仅为个人收藏和纪念所用，您简单注册即可领取徽章，也可点击分享给其他区块链爱好者。</p>
      </div>
      <div className={styled['info_block3']}>
        <div>如有疑问或想了解更多咨询,请与我们保持联系</div>
        <div className={styled['email']}>huizhang@gmail.com</div>
      </div>
    </div>
  );
};
