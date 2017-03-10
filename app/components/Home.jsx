import React from "react";
import FilterDropdown from "./FilterDropdown.jsx";
import {connect} from "react-redux";
import {fetchCountries} from "../actions/countriesActions";
import {fetchProducts} from "../actions/productsActions";
import {toggleSearch, fetchSearch} from "../actions/searchActions";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: [
        "All", "Country", "Product", "Company", "Transporter"
      ],
      selected: "All",
      keyword: "",
      suggestions: [],
      suggestionsVisible: true
    };
  }

  componentWillMount() {
    this.props.fetchCountries();
    this.props.fetchProducts();
  }

  selectDropDown = item => {
    this.setState({selected: item});
  }

  handleChange = e => {
    const suggestions = [];
    this.setState({suggestionsVisible: true});
    this.setState({keyword: e.target.value});
    const length = e.target.value.length;
    if (length) {
      this.props.countries.map(country => {
        if (country.name.slice(0, length).toLowerCase() === e.target.value.toLowerCase()) {
          suggestions.push({type: "Country", name: country.name});
        }
      });
    }
    this.setState({suggestions});
  }

  selectSuggestion = suggestion => {
    this.setState({keyword: suggestion.name});
    this.setState({suggestionsVisible: false});
  }

  search = () => {
    this.props.toggleSearch();
  }

  render() {
    return (
      <div className="home">
        <div className="content-wrapper">
          <div className="header-wrapper">
            <div className="oec-logo-wrapper">
            <img src="./assets/icons/white-oec-logo.svg"></img></div>
            <img src="./assets/icons/orange-market-logo.svg"></img>
            <p className="tagline">Market for exported and imported goods.</p>
          </div>
          <div className="search-wrapper">
            <div className="search-input-wrapper">
              <input onChange={this.handleChange} value={this.state.keyword} className="search-input" placeholder="Enter a Search" type="text"></input>
              {this.state.suggestions.length > 0 && this.state.suggestionsVisible
                ? <ul className="suggestions-wrapper">
                    {this.state.suggestions.map(suggestion => {
                      return <li onClick={this.selectSuggestion.bind(this, suggestion)} className="dropdown-item">
                        <img className="icon" src="./assets/icons/icon-country-yellow.svg"/>
                        <p>{`${suggestion.name}  |
                        ${suggestion.type}`}</p>
                      </li>;
                    })}
                  </ul>
                : null}</div>
            <FilterDropdown select={this.selectDropDown} selected={this.state.selected} items={this.state.filters}/>
          </div>
          <button onClick={this.search} className="search-button">Search</button >
          <div className="cta-buttons-wrapper">
            <div className="cta-button">
              <div className="text-wrapper">
                <img className="icon" src="./assets/icons/icon-import.svg"/>
                <div className="text-inner">
                  <h2>I import</h2>
                  <p>View the marketplace.</p>
                  <span className="chevron right"></span>
                </div>
              </div>
            </div>
            <div className="cta-button">
              <div className="text-wrapper">
                <img className="icon" src="./assets/icons/icon-export.svg"/>
                <div className="text-inner">
                  <h2>I export</h2>
                  <p>Offer my products.</p>
                  <span className="chevron right"></span>
                </div>
              </div>
            </div>
            <div className="cta-button">
              <div className="text-wrapper">
                <img className="icon transport" src="./assets/icons/icon-transport.svg"/>
                <div className="text-inner">
                  <h2>I transport</h2>
                  <p>Offer my services.</p>
                  <span className="chevron right"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-wrapper">
            <div className="countries row">
              <h3>Countries</h3>
              <div className="card">
                <div className="image-wrapper">
                  <div className="sa-icon-wrapper icon-wrapper">
                    <img src="./assets/icons/icon-south-america.svg"/>
                  </div>
                </div>
                <div className="text-wrapper">
                <div className="yellow-line"></div>
                <img className="flag" src="./assets/icons/flags/chile-flag.svg"/>
                <p className="category">Country - South America</p>
                <p className="name">Chile</p></div>
              </div>
              <div className="card">
                <div className="image-wrapper">
                  <div className="na-icon-wrapper icon-wrapper">
                    <img src="./assets/icons/icon-north-america.svg"/>
                  </div>
                </div>
                <div className="text-wrapper">
                <div className="yellow-line"></div>
                  <img className="flag" src="./assets/icons/flags/usa-flag.svg"/>
                <p className="category">Country - North America</p>
                <p className="name">USA</p></div>

              </div>
              <div className="card">
                <div className="image-wrapper">
                  <div className="e-icon-wrapper icon-wrapper">
                    <img src="./assets/icons/icon-europe.svg"/>
                  </div>
                </div>
                <div className="text-wrapper">
                <div className="yellow-line"></div>
                <p className="category">Country - Europe</p>
                <p className="name">Italy</p></div>

              </div>
            </div>
            <div className="products row">
                <h3>Prdoucts</h3>
                  <div className="card">
                    <div className="image-wrapper">
                      <div className="sa-icon-wrapper icon-wrapper">
                        <img src="./assets/icons/icon-south-america.svg"/>
                      </div>
                    </div>
                    <div className="text-wrapper">
                    <div className="yellow-line"></div>
                    <p className="category">Country - South America</p>
                    <p className="name">Chile</p></div>
                  </div>
                  <div className="card">
                    <div className="image-wrapper">
                      <div className="sa-icon-wrapper icon-wrapper">
                        <img src="./assets/icons/icon-south-america.svg"/>
                      </div>
                    </div>
                    <div className="text-wrapper">
                    <div className="yellow-line"></div>
                    <p className="category">Country - South America</p>
                    <p className="name">Chile</p></div>
                  </div>
                  <div className="card">
                    <div className="image-wrapper">
                      <div className="sa-icon-wrapper icon-wrapper">
                        <img src="./assets/icons/icon-south-america.svg"/>
                      </div>
                    </div>
                    <div className="text-wrapper">
                    <div className="yellow-line"></div>
                    <p className="category">Country - South America</p>
                    <p className="name">Chile</p></div>
                  </div>
            </div>
            <div className="companies row">
                <h3>companies</h3>
                  <div className="card">
                    <div className="image-wrapper">
                      <div className="sa-icon-wrapper icon-wrapper">
                        <img src="./assets/icons/icon-south-america.svg"/>
                      </div>
                    </div>
                    <div className="text-wrapper">
                    <div className="yellow-line"></div>
                    <p className="category">Country - South America</p>
                    <p className="name">Chile</p></div>
                  </div>
                  <div className="card">
                    <div className="image-wrapper">
                      <div className="sa-icon-wrapper icon-wrapper">
                        <img src="./assets/icons/icon-south-america.svg"/>
                      </div>
                    </div>
                    <div className="text-wrapper">
                    <div className="yellow-line"></div>
                    <p className="category">Country - South America</p>
                    <p className="name">Chile</p></div>
                  </div>
                  <div className="card">
                    <div className="image-wrapper">
                      <div className="sa-icon-wrapper icon-wrapper">
                        <img src="./assets/icons/icon-south-america.svg"/>
                      </div>
                    </div>
                    <div className="text-wrapper">
                    <div className="yellow-line"></div>
                    <p className="category">Country - South America</p>
                    <p className="name">Chile</p></div>
                  </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCountries: () => {
      dispatch(fetchCountries());
    },
    fetchProducts: () => {
      dispatch(fetchProducts());
    },
    toggleSearch: () => {
      dispatch(toggleSearch());
    }
  };
};

const mapStateToProps = state => {
  return {
    countries: state.countries.countries,
    loadingCountries: state.countries.loading,
    errorCountries: state.countries.error,
    products: state.products.products,
    loadingProducts: state.products.loading,
    errorProducts: state.products.error,
    searchVisible: state.search.visible
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
