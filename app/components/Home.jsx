import React from "react";
import FilterDropdown from "./FilterDropdown.jsx";
import {connect} from "react-redux";
import {fetchCountries} from "../actions/countriesActions";
import {fetchProducts} from "../actions/productsActions";
import {toggleSearch, fetchSearch, setSearch} from "../actions/searchActions";
import exportIcon from "../img/icons/icon-export.svg";
import importIcon from "../img/icons/icon-import.svg";
import oecWhite from "../img/icons/white-oec-logo.svg";
import marketYellow from "../img/icons/orange-market-logo.svg";
import transportIconGold from "../img/icons/icon-transport.svg";
import placeYellow from "../img/icons/icon-country-yellow.svg";
import europe from "../img/icons/continents/icon-europe.svg";
import northAmerica from "../img/icons/continents/icon-north-america.svg";
import southAmerica from "../img/icons/continents/icon-south-america.svg";
import usaFlag from "../img/icons/flags/usa-flag.svg";
import chileFlag from "../img/icons/flags/chile-flag.svg";
import italyFlag from "../img/icons/flags/italy-flag.svg";

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
      suggestionsVisible: true,
      active: null
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
    this.props.setSearch({keyword: this.state.keyword, filters: this.state.selected});
    this.props.toggleSearch();
  }
  hover = button => {
    this.setState({active: button});
  }

  render() {
    return (
      <div className="home">
        <div className="content-wrapper">
          <div className="header-wrapper">
            <div className="oec-logo-wrapper">
            <img src={oecWhite}></img></div>
            <img src={marketYellow}></img>
            <p className="tagline">Market for exported and imported goods.</p>
          </div>
          <div className="search-wrapper">
            <div className="search-input-wrapper">
              <input onChange={this.handleChange} value={this.state.keyword} className="search-input" placeholder="Enter a Search" type="text"></input>
              {this.state.suggestions.length > 0 && this.state.suggestionsVisible
                ? <ul className="suggestions-wrapper">
                    {this.state.suggestions.map(suggestion => {
                      return <li onClick={this.selectSuggestion.bind(this, suggestion)} className="dropdown-item">
                        <img className="icon" src={placeYellow}/>
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
            <div onMouseOver={this.hover.bind(this, 0)} onMouseOut={this.hover.bind(this, null)}  className=
              {this.state.active === 0 ? "cta-button cta-button-selected" : "cta-button"}>
              <div className="text-wrapper">
                <img className="icon" src={importIcon}/>
                <div className="text-inner">
                  <h2>I import</h2>
                  <p>View the marketplace.</p>
                  <span className="chevron right"></span>
                </div>
              </div>
            </div>
            <div onMouseOver={this.hover.bind(this, 1)} onMouseOut={this.hover.bind(this, null)}  className=
              {this.state.active === 1 ? "cta-button cta-button-selected" : "cta-button"}>
              <div className="text-wrapper">
                <img className="icon" src={exportIcon}/>
                <div className="text-inner">
                  <h2>I export</h2>
                  <p>Offer my products.</p>
                  <span className="chevron right"></span>
                </div>
              </div>
            </div>
            <div onMouseOver={this.hover.bind(this, 2)} onMouseOut={this.hover.bind(this, null)} className=
              {this.state.active === 2 ? "cta-button cta-button-selected" : "cta-button"}>
              <div className="text-wrapper">
                <img className="icon transport" src={transportIconGold}/>
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
                    <img src={southAmerica}/>
                  </div>
                </div>
                <div className="text-wrapper">
                <div className="yellow-line"></div>
                <img className="flag" src={chileFlag}/>
                <p className="category">Country - South America</p>
                <p className="name">Chile</p></div>
              </div>
              <div className="card">
                <div className="image-wrapper">
                  <div className="na-icon-wrapper icon-wrapper">
                    <img src={northAmerica}/>
                  </div>
                </div>
                <div className="text-wrapper">
                <div className="yellow-line"></div>
                  <img className="flag" src={usaFlag}/>
                <p className="category">Country - North America</p>
                <p className="name">USA</p></div>

              </div>
              <div className="card">
                <div className="image-wrapper">
                  <div className="e-icon-wrapper icon-wrapper">
                    <img src={europe}/>
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
    },
    fetchSearch: () => {
      dispatch(fetchSearch());
    },
    setSearch: query => {
      dispatch(setSearch(query));
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
