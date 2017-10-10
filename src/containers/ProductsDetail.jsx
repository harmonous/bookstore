import React from 'react';
import { connect } from 'react-redux';

import { fetchProductsDetail } from '../actions/products';

import PageHeader from '../components/PageHeader';
import PageContent from '../components/PageContent';
import ProductsSingle from '../components/ProductsSingle';

class ProductsDetail extends React.Component {
  constructor() {
    super();
    this.product = false;
  }
  componentDidMount() {
    const { productID } = this.props.match.params;
    this.props.getProductsDetail(productID);
  }
  render() {
    const productProps = {
      product: this.props.products.productsDetail,
      isPending: this.props.products.isPending,
      isSuccess: this.props.products.isSuccess,
      isFailure: this.props.products.isFailure,
    };
    return (
      <div id="products-detail">
        <PageHeader title={productProps.product.title} />
        <PageContent>
          <ProductsSingle {...productProps} />
        </PageContent>
      </div>
    );
  }
}

const mapStateToProps = ({ products }) => ({ products });

const mapDispatchToProps = dispatch => ({
  getProductsDetail: productID => dispatch(fetchProductsDetail({ productID })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsDetail);
