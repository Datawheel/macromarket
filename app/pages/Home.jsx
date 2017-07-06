import React from "react";
import {connect} from "react-redux";
import {fetchCountries} from "../actions/countriesActions";
import {fetchCompanies} from "../actions/companiesActions";
import {fetchUnNestedProducts} from "../actions/productsActions";
import {fetchSearch, setSearch} from "../actions/searchActions";
import {CardHome} from "../components/Card.jsx";
import "./Home.css";
import ReactDOM from "react-dom";
import Select from 'react-select';
import {browserHistory} from "react-router";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {
        value: 'All',
        label: 'All'
      },
      keyword: "",
      suggestions: [],
      suggestionsVisible: true,
      active: null
    };
  }

  componentDidMount() {

    this.props.fetchCountries();
    this.props.fetchProductsForSearch();
    this.props.fetchCompanies();
    // Hide dropdown block on click outside the block
    window.addEventListener("click", this.hideDropDown, false);
  }

  hideDropDown = e => {
    const area = ReactDOM.findDOMNode(this.refs.area);
    if (area) {
      if (!area.contains(e.target) && this.state.suggestionsVisible) {
        this.setState({suggestionsVisible: false})
      }
    }
  }

  handleChange = e => {
    this.setState({suggestionsVisible: true});
    this.setState({keyword: e.target.value});

    // Only run the search if the user has typed MORE than 2 characters,
    // otherwise this returns way too many results and feels laggy.
    //  - else
    // clear the results but submitting an empty string
    if (e.target.value.length > 2) {
      this.props.fetchSearch(e.target.value, this.state.selected.value.toLowerCase());
    } else {
      this.props.fetchSearch("", this.state.selected.value.toLowerCase());
    }
    // this.setState({suggestions});
  }

  selectSuggestion = suggestion => {
    const type = suggestion.profile_type === "connectamericas"
      ? "company"
      : suggestion.profile_type;
    browserHistory.push(`/${type}/${suggestion.id}`);
  }

  search = () => {
    this.props.setSearch({keyword: this.state.keyword, filter: this.state.selected.value});
    this.props.fetchSearch(this.state.keyword, this.state.selected.value.toLowerCase());
    this.props.activateSearch();
  }

  hover = button => {
    this.setState({active: button});
  }

  selectDropDown = item => {
    this.setState({selected: item});
  }

  arrowRenderer = () => {
    return (
      <span className="chevron bottom"></span>
    );
  }

  render() {
    var options = [
      {
        value: 'All',
        label: 'All'
      }, {
        value: 'Company',
        label: 'Companies'
      }, {
        value: 'Country',
        label: 'Countries'
      }, {
        value: 'Product',
        label: 'Products'
      }
    ];

    return (
      <div className="home-background">
        <div className="home">
          <div className="content-wrapper">
            <div className="header-wrapper">
              <div className="home-logo">
                <div className="oec-logo-wrapper">
                  <img className="mm-logo" src="/images/icons/logos/macro-market.svg"></img>
                </div>
              <img src="/images/icons/logos/orange-market-logo.svg"></img>  </div>
              <p className="tagline">Market for exported and imported goods.</p>
            </div>
            <div className="search-wrapper">
              <div className="search-input-wrapper">
                <input onChange={this.handleChange} value={this.state.keyword} className="search-input" placeholder="Enter a Search" type="text"></input>
                {this.props.results.length > 0 && this.state.suggestionsVisible
                  ? <ul ref="area" className="suggestions-wrapper">
                      {this.props.results.map(suggestion => {
                        return <li onClick={this.selectSuggestion.bind(this, suggestion)} className="dropdown-item">
                          <img className="icon" src={suggestion.profile_type === "Country"
                            ? "/images/icons/icon-country-yellow.svg"
                            : suggestion.profile_type === "Product"
                              ? "/images/icons/icon-product-yellow.svg"
                              : "/images/icons/icon-company-yellow.svg"}/>
                          <p>{`${suggestion.name}  |
                        ${suggestion.profile_type === "connectamericas"
                              ? "company"
                              : suggestion.profile_type}`}</p>
                        </li>;
                      })}
                    </ul>
                  : null}</div>
              <Select optionClassName={"dropdown-option"} arrowRenderer={this.arrowRenderer} clearable={false} searchable={false} name="form-field-name" value={this.state.selected.value} options={options} onChange={this.selectDropDown}/>
            </div>
            <button onClick={this.search.bind(this)} className="search-button">Search</button >
            {/*<div className="cta-buttons-wrapper">
              <div onMouseOver={this.hover.bind(this, 0)} onMouseOut={this.hover.bind(this, null)} className= {this.state.active === 0 ? "cta-button cta-button-selected" : "cta-button"}>
                <div className="text-wrapper">
                  <img className="icon" src="/images/icons/icon-import.svg"/>
                  <div className="text-inner">
                    <h2>I import</h2>
                    <p>View the marketplace.</p>
                    <span className="chevron right"></span>
                  </div>
                </div>
              </div>
              <div onMouseOver={this.hover.bind(this, 1)} onMouseOut={this.hover.bind(this, null)} className= {this.state.active === 1 ? "cta-button cta-button-selected" : "cta-button"}>
                <div className="text-wrapper">
                  <img className="icon" src="/images/icons/icon-export.svg"/>
                  <div className="text-inner">
                    <h2>I export</h2>
                    <p>Offer my products.</p>
                    <span className="chevron right"></span>
                  </div>
                </div>
              </div>
              <div onMouseOver={this.hover.bind(this, 2)} onMouseOut={this.hover.bind(this, null)} className= {this.state.active === 2 ? "cta-button cta-button-selected" : "cta-button"}>
                <div className="text-wrapper">
                  <img className="icon transport" src="/images/icons/icon-transport.svg"/>
                  <div className="text-inner">
                    <h2>I transport</h2>
                    <p>Offer my services.</p>
                    <span className="chevron right"></span>
                  </div>
                </div>
              </div>
            </div>*/}
            <div className="logos-wrapper">
              <p>Created in Collaboration</p>
              <div className="img-wrapper">
                <img className="connect" src="/images/icons/logos/connectAmericasLogo.png" alt="IADB Connect Americas Logo" />
                <img className="collective-learning" src="/images/icons/logos/collective-learning.png" alt="Collective Learning Logo" />
                <img className="media-lab" src="/images/icons/logos/mit-media-lab.png" alt="MIT Media Lab Logo" />
                <img className="datawheel" src="/images/icons/logos/datawheel.png" alt="Datawheel Logo" />
              </div>
            </div>
            <div className="grid-wrapper">
              <div className="countries row">
                <h3>Countries</h3>
                <CardHome content={{
                  type: "country",
                  name: "Chile",
                  continent: "South America",
                  id: "sachl",
                  flickr_link: "https://flic.kr/p/g2TM9U"
                }}/>
                <CardHome content={{
                  type: "country",
                  name: "USA",
                  continent: "North America",
                  id: "nausa",
                  flickr_link: "https://flic.kr/p/8CZkZ7"
                }}/>
                <CardHome content={{
                  type: "country",
                  name: "Italy",
                  continent: "Europe",
                  id: "euita",
                  flickr_link: "https://flic.kr/p/gonJ3Y"
                }}/>
              </div>
              <div className="products row">
                <h3>Prdoucts</h3>
                <CardHome content={{
                  type: "product",
                  name: "Wine",
                  category: "Foodstuffs",
                  id: "042204",
                  flickr_link: "https://flic.kr/p/a7awbU"
                }}/>
                <CardHome content={{
                  type: "product",
                  name: "Sheep and Goats",
                  category: "Animal Products",
                  id: "010104",
                  flickr_link: null
                }}/>
                <CardHome content={{
                  type: "product",
                  name: "Fork-Lifts",
                  category: "Machines",
                  id: "168427",
                  flickr_link: "https://flic.kr/p/6ybFaY"
                }}/>
              </div>
              <div className="companies row">
                <h3>companies</h3>
                <CardHome content={{
                  type: "company",
                  name: "Corporacion Stealth Sac.",
                  id: "ca_66123",
                  logo: "https://d3pl7mm70gk6ic.cloudfront.net/sites/default/files/styles/mobile_full_width/public/company-66123-1498107298.png?itok=-foEqm3s"
                }}/>
                <CardHome content={{
                  type: "company",
                  name: "TFO Canada",
                  id: "ca_42795",
                  logo: "https://d3pl7mm70gk6ic.cloudfront.net/sites/default/files/styles/mobile_full_width/public/company-42795-1478811748.png?itok=Yoc2G5W"
                }}/>
                <CardHome content={{
                  type: "company",
                  name: "Visión Desarrollo Corporativo",
                  id: "ca_20576",
                  logo: "https://d3pl7mm70gk6ic.cloudfront.net/sites/default/files/styles/mobile_full_width/public/company-20576-1460152553.png?itok=p3mAe-pg"
                }}/>
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
    fetchProductsForSearch: () => {
      dispatch(fetchUnNestedProducts());
    },
    fetchCompanies: () => {
      dispatch(fetchCompanies());
    },
    activateSearch: activeState => {
      dispatch({type: "ACTIVATE_SEARCH", data: activeState});
    },
    fetchSearch: (query, filter) => {
      dispatch(fetchSearch(query, filter));
    },
    setSearch: query => {
      dispatch(setSearch(query));
    }
  };
};

const mapStateToProps = state => {
  return {
    resultsLoading: state.search.loading,
    results: state.search.results || [],
    countries: state.countries.countries,
    loadingCountries: state.countries.loading,
    errorCountries: state.countries.error,
    companies: state.companies.companies,
    loadingCompanies: state.companies.loading,
    errorCompanies: state.companies.error,
    products: state.products.productsForSearch,
    loadingProducts: state.products.loading,
    errorProducts: state.products.error,
    searchVisible: state.search.visible
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
