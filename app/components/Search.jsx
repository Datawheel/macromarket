import React from "react";
import Card from "components/Card.jsx";
import "./Search.css";
import api from "helpers/api.js";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: "",
      results: [],
      query: "",
      loading: false,
      error: null,
      filter: "all"
    };
    // create a ref to store the textInput DOM element
    this.searchInput = null;

    this.setTextInputRef = element => {
      this.searchInput = element;
    };

    this.focusTextInput = () => {
      // Focus the text input using the raw DOM API
      if (this.searchInput) this.searchInput.focus();
    };
  }

  componentDidUpdate = prevProps => {
    const {searchActive: prevSearchActive} = prevProps;
    const {searchActive} = this.props;
    if (prevSearchActive === false && searchActive === true) {
      document.addEventListener("keydown", this.escFunc, false);
      // this.focusTextInput();
    }
    if (prevSearchActive === true && searchActive === false) {
      document.removeEventListener("keydown", this.escFunc, false);
    }
  }

  escFunc = event => {
    if (event.keyCode === 27) {
      this.props.toggleSearch(false);
    }
  }

  mouseOver = filter => {
    this.setState({hover: filter});
  }

  mouseOut = () => {
    this.setState({hover: ""});
  }

  handleChange = event => {
    // Only run the search if the user has typed MORE than 2 characters,
    // otherwise this returns way too many results and feels laggy.
    //  - else
    // clear the results but submitting an empty string
    // this.props.setSearch({keyword: event.target.value, filter: this.props.filter});
    const query = event.target.value;
    const {filter} = this.state;
    this.setState({query});
    if (query.length > 2) {
      this.search(query, filter);
    }
    else {
      this.setState({results: []});
    }
  }

  selectFilter = filter => {
    const {query} = this.state;
    this.setState({filter});
    this.search(query, filter.toLowerCase());
  }

  search = (query, filter) => {
    // this.props.fetchSearch(this.state.query, this.props.filter.toLowerCase());
    api.get(`/api/search/${filter.toLowerCase()}/${query}`)
      .then(response => {
        // dispatch(receiveSearch(response.data));
        this.setState({results: response.data});
      })
      .catch(response => {
        console.log("error!", response);
      });
  }

  displayResults = () => {
    const {query, results} = this.state;
    if (results.length !== 0) {
      return (
        <div className="fade-in result-wrapper">
          {results.map(result => <Card products={this.props.products} key={result.id} content={result}/>)}
        </div>
      );
    }
    else {
      return (
        <div>
          {query.length < 3 ? null : <div className="fade-in search-no-results"><p>No results.</p></div>}
        </div>
      );
    }
  }

  render() {
    const {filter, query, results} = this.state;

    return (
      <div className={this.props.searchActive ? "fade-in content-wrapper overlay" : "hidden content-wrapper overlay" }>
        <div onClick={() => this.props.toggleSearch(false)} className="delete">
          <img src="/images/icons/icon-close-white.svg"/>
        </div>
        <div className="overlay-inner">
          <div className="search-container">
            <div className="search-wrapper">
              <input
                // ref={this.setTextInputRef}
                placeholder="Search"
                className="search-input"
                value={query}
                onChange={this.handleChange}
                type="text"
              />
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
                    {filter === "Country"
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
                    {filter === "Product"
                      ? <img src="/images/icons/icon-product-yellow.svg"/>
                      : <img src="/images/icons/icon-product-black.svg"/>}
                  </div>
                  <div onMouseOut={this.mouseOut} onMouseOver={this.mouseOver.bind(this, "Company")} onClick={this.selectFilter.bind(this, "Company")} className="filter-icon-wrapper">
                    <div className={this.state.hover === "Company"
                      ? "arrow-box company tool-tip visible"
                      : "arrow-box company tool-tip"}>
                      <p>company</p>
                    </div>
                    {filter === "Company"
                      ? <img src="/images/icons/icon-company-yellow.svg"/>
                      : <img src="/images/icons/icon-company-black.svg"/>}
                  </div>
                  <div onClick={this.selectFilter.bind(this, "All")} className="filter-icon-wrapper">
                    <p className={filter === "All"
                      ? "selected"
                      : null}>all</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {results
            ? this.displayResults()
            : null}
        </div>
      </div>
    );
  }
}

export default Search;
