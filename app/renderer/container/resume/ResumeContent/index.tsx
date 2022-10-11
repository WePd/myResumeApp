import React from 'react';
import './index.less';

import * as UseTemplateList from './UseTemplate';
import ScrollBox from '@src/common/components/ScrollBox';

export default function ResumeContent() {
  const HEADER_ACTION_HEIGHT = 92;
  const height = document.body.clientHeight;

  return (
    <ScrollBox maxHeight={height - HEADER_ACTION_HEIGHT}>
      <UseTemplateList.TemplateOne />
    </ScrollBox>
  );
}
