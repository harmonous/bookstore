import React from 'react';

import './Products.scss';
import ProductsItem from './ProductsItem';

export default function (props) {
  const { products, isPending, isFailure } = props;
  if (isPending) {
    return (
      <div id="products" className="products is-pending">
        Loading products...
      </div>
    );
  } else if (isFailure) {
    return (
      <div id="products" className="products is-failure">
        Loading products...
      </div>
    );
  }
  return (
    <div id="products" className="products is-success">
      {products.map(product => (
        <ProductsItem
          key={product.product_id}
          product={product}
        />
      ))}
    </div>
  );
}
