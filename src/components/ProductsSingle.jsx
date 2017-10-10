import React from 'react';

import './ProductsSingle.scss';

export default function (props) {
  const { product, isPending, isFailure } = props;
  if (isPending) {
    return (
      <div id="products-single" className="products-single is-pending">
        Loading product...
      </div>
    );
  } else if (isFailure) {
    return (
      <div id="products-single" className="products-single is-failure">
        Loading product...
      </div>
    );
  }
  let price = '0';
  if (product.price !== undefined) {
    price = product.price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
  }
  return (
    <div id="products-single" className="products-single is-success">
      <div className="products-single--summary">
        <div className="products-single--object">
          <img src={product.thumbnail} alt={product.title} />
        </div>
        <div className="products-single--content">
          <div className="products-single--title">
            <h3 className="entry-title">{product.title}</h3>
          </div>
          <div className="products-single--price">
            {price}₫
          </div>
          <div className="products-single--add-to-cart">
            <input type="button" value="-" className="minus" />
            <input type="text" value="1" className="number" />
            <input type="button" value="+" className="plus" />
            <button className="add-to-cart">Add to cart</button>
          </div>
        </div>
      </div>
      <div className="products-single-description">
        <h3>Product description</h3>
        <div dangerouslySetInnerHTML={{ __html: product.description }} />
      </div>
    </div>
  );
}
