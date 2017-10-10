import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Categories from '../components/Categories';

const mapStateToProps = ({ products }) => ({ categories: [...products.categories] });

export default withRouter(connect(mapStateToProps)(Categories));
