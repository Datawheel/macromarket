import React from "react";
import {fetchSearch} from "../actions/searchActions";
import {connect} from "react-redux";
import Card from "./Card.jsx";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: this.props.keyword || "",
      filters: [this.props.filters] || [],
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
  }

  selectFilter = filter => {
    if (!this.state.filters.includes(filter)) {
      this.state.filters.push(filter);
    }
    else {
      const index = this.state.filters.indexOf(filter);
      this.state.filters.splice(index, 1);
    }
    this.forceUpdate();
  }

  search = () => {
    this.props.fetchSearch(this.state.searchTerm);
  }

  componentWillMount = () => {
    if (this.props.keyword) {
      this.props.fetchSearch(this.props.keyword);
    }
  }

  displayResults = () => {
    const results = this.props.results;
    if (results.length > 0) {
      return (
        <div className="result-wrapper">{results.map(result => {
          return <Card content={result}/>;
        })
      }
        </div>
      );
    }
    else {
      return <p>No results.</p>;
    }
  }

  render() {
    return (
      <div className="content-wrapper overlay">
        <div className="search-container">
          <div className="search-wrapper">
            <input placeholder="Search" className="search-input" value={this.state.searchTerm} onChange={this.handleChange} type="text"></input>
            <img onClick={this.search} className="search-icon" src="./assets/icons/icon-search-white.svg"/>
            <div className="filter-wrapper">
              <p className="label">FILTER</p>
              <div className="filter-icons-wrapper">
                <div onMouseOut={this.mouseOut} onMouseOver={this.mouseOver.bind(this, "Place")} onClick={this.selectFilter.bind(this, "Place")} className="filter-icon-wrapper">
                  <div className={this.state.hover === "Place"
                    ? "arrow-box place tool-tip visible"
                    : "arrow-box place tool-tip"}>
                    <p>place</p>
                  </div>
                  {this.state.filters.includes("Place")
                    ? <img src="./assets/icons/icon-country-yellow.svg"/>
                    : <img src="./assets/icons/icon-country-black.svg"/>
                  }
                </div>
                <div onMouseOut={this.mouseOut} onMouseOver={this.mouseOver.bind(this, "Product")} onClick={this.selectFilter.bind(this, "Product")} className="filter-icon-wrapper">
                  <div className={this.state.hover === "Product"
                    ? "arrow-box tool-tip product visible"
                    : "arrow-box product tool-tip"}>
                    <p>product</p>
                  </div>
                  {this.state.filters.includes("Product")
                    ? <img src="./assets/icons/icon-product-yellow.svg"/>
                    : <img src="./assets/icons/icon-product-black.svg"/>}
                </div>
                <div onMouseOut={this.mouseOut} onMouseOver={this.mouseOver.bind(this, "Company")} onClick={this.selectFilter.bind(this, "Company")} className="filter-icon-wrapper">
                  <div className={this.state.hover === "Company"
                    ? "arrow-box company tool-tip visible"
                    : "arrow-box company tool-tip"}>
                    <p>company</p>
                  </div>
                  {this.state.filters.includes("Company")
                    ? <img src="./assets/icons/icon-company-yellow.svg"/>
                    : <img src="./assets/icons/icon-company-black.svg"/>}
                </div>
                <div onMouseOut={this.mouseOut} onMouseOver={this.mouseOver.bind(this, "Transport")} onClick={this.selectFilter.bind(this, "Transport")} className="filter-icon-wrapper">
                  <div className={this.state.hover === "Transport"
                    ? "arrow-box transport tool-tip visible"
                    : "arrow-box transport tool-tip"}>
                    <p>transportation</p>
                  </div>
                  {this.state.filters.includes("Transport")
                    ? <img src="./assets/icons/icon-transport-yellow.svg"/>
                    : <img src="./assets/icons/icon-transport-black.svg"/>}
                </div>
                <div className="filter-icon-wrapper">
                  <p className={this.state.filters.length === 0
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
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSearch: query => {
      dispatch(fetchSearch(query));
    }
  };
};

const mapStateToProps = state => {
  return {results: state.search.results, loading: state.search.loading, error: state.search.error, keyword: state.search.keyword, filters: state.search.filters};
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
