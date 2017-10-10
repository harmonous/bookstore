import React from 'react';
import { connect } from 'react-redux';
import PageHeader from '../components/PageHeader';
import PageContent from '../components/PageContent';
import Products from '../components/Products';

class ProductsRecent extends React.Component {
  render() {
    const productsProps = {
      products: this.props.products.productsRecent,
      isPending: this.props.products.isPending,
      isSuccess: this.props.products.isSuccess,
      isFailure: this.props.products.isFailure,
    };

    return (
      <div id="products-recent">
        <PageHeader title="Hello world" />
        <PageContent>
          <Products {...productsProps} />
        </PageContent>
      </div>
    );
  }
}

function mapStateToProps({ products }) {
  return { products };
}

export default connect(mapStateToProps)(ProductsRecent);
