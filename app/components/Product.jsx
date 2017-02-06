import React from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import {fetchProducts} from '../actions/productsActions';

class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchProducts();
  }

  render() {
    const {products, loading, error} = this.props;
    if(loading || !products){
      return (
        <div className="detailed-content-wrapper">
          <div>loading...</div>
        </div>
      )
    }

    if(error){
      return (
        <div className="detailed-content-wrapper">
          <h2>Error</h2>
          <p>Please refresh the page.</p>
        </div>
      )
    }

    return (<div><p>List of Products </p>

      {products.map((product) => {
        return(
        <Link key={product.id} to={'/product/' + product.id}>
          <p>{product.name}</p>
        </Link> );
      })}
    </div>);
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => {
      dispatch(fetchProducts())
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.products.products,
    loading: state.products.loading,
    error: state.products.error || null
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
