import React from 'react';
import { useHistory } from 'react-router';
import ROUTER from '@src/common/constants/router';

import Button from '@src/common/components/Button';

import './index.less';

export default function ResumeAction() {
  const history = useHistory();

  // 返回
  const goBack = () => history.push(ROUTER.root);
  const handleExport = () => {};

  return (
    <div styleName="actions">
      <div styleName="back" onClick={goBack}>
        返回
      </div>
      <Button size="middle" className="export-btn" onClick={handleExport}>
        导出PDF
      </Button>
    </div>
  );
}
