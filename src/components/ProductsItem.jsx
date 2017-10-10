import React from 'react';
import { Link } from 'react-router-dom';

import './ProductsItem.scss';
/* eslint-disable jsx-a11y/anchor-is-valid */
export default function ({ product }) {
  return (
    <article id="products-item" className="products-item">
      <Link to={`/product/${product.product_id}`}>
        <div className="products-item--object">
          <img className="products-item--thumbnail" src={product.thumbnail} alt="product.title" />
          <div className="products-item--float">
            <div className="products-item--price">{product.price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')}₫</div>
          </div>
        </div>
        <div className="products-item--body">
          <h4 className="products-item--title">{product.title}</h4>
        </div>
      </Link>
    </article>
  );
}
