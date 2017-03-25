import React from "react";
import {fetchSearch} from "../actions/searchActions";
import {connect} from "react-redux";
import {Card} from "./Card.jsx";
import countryBlack from "../img/icons/icon-country-black.svg";
import countryYellow from "../img/icons/icon-country-yellow.svg";
import productYellow from "../img/icons/icon-product-yellow.svg";
import productBlack from "../img/icons/icon-product-black.svg";
import companyYellow from "../img/icons/icon-company-yellow.svg";
import companyBlack from "../img/icons/icon-company-black.svg";
import transportYellow from "../img/icons/icon-transport-yellow.svg";
import transportBlack from "../img/icons/icon-transport-black.svg";
import search from "../img/icons/icon-search-white.svg";

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
    }
    else {
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

  componentWillMount = () => {
    if (this.props.keyword) {
      this.props.fetchSearch(this.props.keyword);
    }
  }

  componentDidMount() {
    this.refs.search.focus();
  }

  displayResults = () => {
    const {results} = this.props;
    if (results.length > 0) {
      return (
        <div className="result-wrapper">
          {results.map(result => <Card key={result.id} content={result} />)}
        </div>
      );
    } else {
      return (<p>No results.</p>);
    }
  }

  render() {
    return (
      <div className="content-wrapper overlay">
        <div className="overlay-inner">
          <div className="search-container">
            <div className="search-wrapper">
              <input ref="search" placeholder="Search" className="search-input" value={this.state.searchTerm} onChange={this.handleChange} type="text"></input>
              <img onClick={this.search} className="search-icon" src={search}/>
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
                      ? <img src={countryYellow}/>
                      : <img src={countryBlack}/>
                    }
                  </div>
                  <div onMouseOut={this.mouseOut} onMouseOver={this.mouseOver.bind(this, "Product")} onClick={this.selectFilter.bind(this, "Product")} className="filter-icon-wrapper">
                    <div className={this.state.hover === "Product"
                      ? "arrow-box tool-tip product visible"
                      : "arrow-box product tool-tip"}>
                      <p>product</p>
                    </div>
                    {this.state.filter === "Product"
                      ? <img src={productYellow}/>
                      : <img src={productBlack}/>}
                  </div>
                  <div onMouseOut={this.mouseOut} onMouseOver={this.mouseOver.bind(this, "Company")} onClick={this.selectFilter.bind(this, "Company")} className="filter-icon-wrapper">
                    <div className={this.state.hover === "Company"
                      ? "arrow-box company tool-tip visible"
                      : "arrow-box company tool-tip"}>
                      <p>company</p>
                    </div>
                    {this.state.filter === "Company"
                      ? <img src={companyYellow}/>
                      : <img src={companyBlack}/>}
                  </div>
                  <div onMouseOut={this.mouseOut} onMouseOver={this.mouseOver.bind(this, "Transport")} onClick={this.selectFilter.bind(this, "Transport")} className="filter-icon-wrapper">
                    <div className={this.state.hover === "Transport"
                      ? "arrow-box transport tool-tip visible"
                      : "arrow-box transport tool-tip"}>
                      <p>transportation</p>
                    </div>
                    {this.state.filter === "Transport"
                      ? <img src={transportYellow}/>
                      : <img src={transportBlack}/>}
                  </div>
                  <div className="filter-icon-wrapper">
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
    }
  };
};

const mapStateToProps = state => {
  return {
    results: state.search.results,
    loading: state.search.loading,
    error: state.search.error,
    keyword: state.search.keyword,
    filter: state.search.filter
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
