import React from 'react';
import Button from '@src/common/components/Button';

import './index.less';

function Resume() {
  const handleClick = () => {
    console.log(123);

  }
  return (
    <div>
      <h2>简历模块</h2>
      <Button children="点击" border={ true} onClick={handleClick}/>
    </div>
  );
}
export default Resume;
