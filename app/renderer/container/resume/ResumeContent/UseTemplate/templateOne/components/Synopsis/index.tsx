/**
 * @desc 简单介绍
 * @author pengdaokuan
 */
import React from 'react';
import './index.less';

function Synopsis() {
  return (
    <div styleName="content">
      <p styleName="name">MikMK</p>
      <p styleName="job">全栈工程师</p>
      <p styleName="summary">
        {[
          'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
          'cccccccccccccccccccccc，github blog 300+ star',
          '具xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx。',
          'mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm',
        ].join('，')}
      </p>
    </div>
  );
}

export default Synopsis;
