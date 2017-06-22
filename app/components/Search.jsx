import React from "react";
import {fetchSearch} from "../actions/searchActions";
import {fetchProducts} from "../actions/productsActions";
import {connect} from "react-redux";
import {Card} from "./Card.jsx";
import "./Search.css";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: this.props.keyword || "",
      filter: this.props.filter || "All",
      hover: ""
    };
  }

  mouseOver = filter => {
    this.setState({hover: filter});
  }

  mouseOut = () => {
    this.setState({hover: ""});
  }

  handleChange = event => {
    this.setState({searchTerm: event.target.value});
    // Only run the search if the user has typed MORE than 2 characters,
    // otherwise this returns way too many results and feels laggy.
    //  - else
    // clear the results but submitting an empty string
    if (event.target.value.length > 2) {
      this.props.fetchSearch(event.target.value, this.state.filter.toLowerCase());
    } else {
      this.props.fetchSearch("", this.state.filter.toLowerCase());
    }
  }

  selectFilter = filter => {
    this.setState({filter});
    this.props.fetchSearch(this.state.searchTerm, filter.toLowerCase());
  }

  search = () => {
    this.props.fetchSearch(this.state.searchTerm, this.state.filter.toLowerCase());
  }

  componentDidMount() {
    // this.props.fetchProducts();
    if (this.props.keyword) {
      this.props.fetchSearch(this.state.searchTerm, this.state.filter.toLowerCase());
    }

  }

  displayResults = () => {
    const {results} = this.props;
    if (results.length > 0) {
      return (
        <div className="fade-in result-wrapper">
          {results.map(result => <Card products={this.props.products} key={result.id} content={result}/>)}
        </div>
      );
    } else {
      return (
        <div>
        {this.state.searchTerm.length < 3 ? null : <div className="fade-in search-no-results"><p>No results.</p></div>}</div>
      );
    }
  }

  render() {
    return (
      <div className={this.props.searchActive ? "fade-in content-wrapper overlay" : "hidden content-wrapper overlay" }>
        <div onClick={this.props.toggleSearch}className="delete"><img src="/images/icons/icon-close-white.svg"/></div>
        <div className="overlay-inner">
          <div className="search-container">
            <div className="search-wrapper">
              <input ref="search" placeholder="Search" className="search-input" value={this.state.searchTerm} onChange={this.handleChange} type="text"></input>
              <img onClick={this.search} className="search-icon" src="/images/icons/icon-search-white.svg"/>
              <div className="filter-wrapper">
                <p className="label">FILTER</p>
                <div className="filter-icons-wrapper">
                  <div onMouseOut={this.mouseOut} onMouseOver={this.mouseOver.bind(this, "Country")} onClick={this.selectFilter.bind(this, "Country")} className="filter-icon-wrapper">
                    <div className={this.state.hover === "Country"
                      ? "arrow-box place tool-tip visible"
                      : "arrow-box place tool-tip"}>
                      <p>place</p>
                    </div>
                    {this.state.filter === "Country"
                      ? <img src="/images/icons/icon-country-yellow.svg"/>
                      : <img src="/images/icons/icon-country-black.svg"/>
                    }
                  </div>
                  <div onMouseOut={this.mouseOut} onMouseOver={this.mouseOver.bind(this, "Product")} onClick={this.selectFilter.bind(this, "Product")} className="filter-icon-wrapper">
                    <div className={this.state.hover === "Product"
                      ? "arrow-box tool-tip product visible"
                      : "arrow-box product tool-tip"}>
                      <p>product</p>
                    </div>
                    {this.state.filter === "Product"
                      ? <img src="/images/icons/icon-product-yellow.svg"/>
                      : <img src="/images/icons/icon-product-black.svg"/>}
                  </div>
                  <div onMouseOut={this.mouseOut} onMouseOver={this.mouseOver.bind(this, "Company")} onClick={this.selectFilter.bind(this, "Company")} className="filter-icon-wrapper">
                    <div className={this.state.hover === "Company"
                      ? "arrow-box company tool-tip visible"
                      : "arrow-box company tool-tip"}>
                      <p>company</p>
                    </div>
                    {this.state.filter === "Company"
                      ? <img src="/images/icons/icon-company-yellow.svg"/>
                      : <img src="/images/icons/icon-company-black.svg"/>}
                  </div>
                  <div onMouseOut={this.mouseOut} onMouseOver={this.mouseOver.bind(this, "Transport")} onClick={this.selectFilter.bind(this, "Transport")} className="filter-icon-wrapper">
                    <div className={this.state.hover === "Transport"
                      ? "arrow-box transport tool-tip visible"
                      : "arrow-box transport tool-tip"}>
                      <p>transportation</p>
                    </div>
                    {this.state.filter === "Transport"
                      ? <img src="/images/icons/icon-transport-yellow.svg"/>
                      : <img src="/images/icons/icon-transport-black.svg"/>}
                  </div>
                  <div onClick={this.selectFilter.bind(this, "All")} className="filter-icon-wrapper">
                    <p className={this.state.filter === "All"
                      ? "selected"
                      : null}>all</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {this.props.results
            ? this.displayResults()
            : null}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSearch: (query, filter) => {
      dispatch(fetchSearch(query, filter));
    },
    fetchProducts: () => {
      dispatch(fetchProducts());
    }
  };
};

const mapStateToProps = state => {
  return {
    results: state.search.results,
    loading: state.search.loading,
    error: state.search.error,
    keyword: state.search.keyword,
    filter: state.search.filter,
    products: state.products.products
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
