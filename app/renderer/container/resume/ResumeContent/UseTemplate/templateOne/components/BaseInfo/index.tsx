/**
 * @desc 基本信息
 * @author pengdaokuan
 */
import React from 'react';
import '../../../styles/template-one.less';

function BaseInfo() {
  return (
    <div styleName="container">
      <p styleName="title">基本信息 Basic</p>
      <ul styleName="content">
        <li>院校：成都瞎说大学</li>
        <li>专业：CS</li>
        <li>学历：本科</li>
        <li>学年：2015.09 - 2019.06</li>
        <li>籍贯：成都</li>
      </ul>
    </div>
  );
}

export default BaseInfo;
