import React from 'react';
import './PageContent.scss';

export default function (props) {
  const { children } = props;
  return (
    <div id="page-content" className="page-content">
      <div className="page-content--wrapper">
        {children}
      </div>
    </div>
  );
}
