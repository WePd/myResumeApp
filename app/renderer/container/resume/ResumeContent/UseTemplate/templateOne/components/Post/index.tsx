/**
 * @desc 在校经历
 * @author pengdaokuan
 */
import './index.less';
import React from 'react';

function Post() {
  return (
    <div styleName="content">
      <p styleName="label">在校经历 Post</p>
      <ul styleName="list">
        <li styleName="flex">
          <div styleName="left">
            <p>2016.09-2017.09</p>
            <p>文艺部会长</p>
          </div>
          <div styleName="right">
            <p>校团委学生会</p>
            <p>
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            </p>
          </div>
        </li>
        <li styleName="flex">
          <div styleName="left">
            <p>2017.09-2019.04</p>
            <p>前端工程师</p>
          </div>
          <div styleName="right">
            <p>xxxx大学网络中心</p>
            <p>
              xxxxxxxxxxxxxxxxxxx场，采用Vue.js主导开发，并与湖南xxx科技有限公司合作，主导开发该公司官网及后台管理
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Post;
