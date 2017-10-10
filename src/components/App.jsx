import React from 'react';
import { Route } from 'react-router-dom';

import ProductsRecent from '../containers/ProductsRecent';
import ProductsList from '../containers/ProductsList';
import ProductsDetail from '../containers/ProductsDetail';

import './App.scss';

export default function () {
  return (
    <div id="app">
      <Route exact path="/" component={ProductsRecent} />
      <Route path="/category/:categoryID" component={ProductsList} />
      <Route path="/product/:productID" component={ProductsDetail} />
    </div>
  );
}
