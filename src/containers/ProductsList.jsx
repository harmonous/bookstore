import React from 'react';
import { connect } from 'react-redux';
import PageHeader from '../components/PageHeader';
import PageContent from '../components/PageContent';
import Products from '../components/Products';
import { fetchProductsList } from '../actions/products';

class ProductsList extends React.Component {
  constructor() {
    super();
    this.products = false;
    this.categoryID = false;
  }

  componentWillMount() {
    this.categoryID = this.props.match.params.categoryID;
    this.props.getProductsList(this.categoryID);
  }

  componentWillUpdate(nextProps) {
    if (
      this.categoryID !== nextProps.match.params.categoryID
    ) {
      this.categoryID = nextProps.match.params.categoryID;
      nextProps.getProductsList(this.categoryID);
    }
  }

  render() {
    if (!this.categoryID) {
      return <div>Loading</div>;
    }
    const {
      isPending,
      isSuccess,
      isFailure,
      productsList,
      categories,
    } = this.props.products;
    let CategoryTitle = 'category Page';
    if (categories.length > 0) {
      const cloneCategories = [...categories];
      const category = cloneCategories.filter(el => (el.category_id === +this.categoryID))[0];
      CategoryTitle = category.title;
    }

    const productsProps = {
      products: productsList,
      isPending,
      isSuccess,
      isFailure,
    };
    return (
      <div id="products-list">
        <PageHeader title={CategoryTitle} />
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

const mapDispatchToProps = dispatch => ({
  getProductsList: categoryID => dispatch(fetchProductsList({ categoryID })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
