import React from 'react';
import './PageHeader.scss';
import CategoriesContainer from '../containers/CategoriesContainer';

export default function (props) {
  const { title, children } = props;
  return (
    <header id="page-header" className="page-header">
      <div className="page-header--wrapper">
        <div className="page-header--heading">
          <h1>{title}</h1>
          {children}
        </div>
        <div className="page-header--categories">
          <CategoriesContainer />
        </div>
      </div>
    </header>
  );
}
