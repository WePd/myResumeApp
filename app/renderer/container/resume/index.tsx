import React from 'react';

import ResumeAction from './ResumeAction';
import ResumeContent from './ResumeContent';
import ResumeToolBars from './ResumeToolBars';

import './index.css';

function Resume() {
  return (
    <div className="container">
      <div className="header">
        <ResumeAction />
      </div>
      <div className="content">
        <ResumeContent />
      </div>
      <div className="toolbar">
        <ResumeToolBars />
      </div>
    </div>
  );
}
export default Resume;
