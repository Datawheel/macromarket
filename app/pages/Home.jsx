import React from "react";
import {connect} from "react-redux";
import {fetchCountries} from "../actions/countriesActions";
import {fetchCompanies} from "../actions/companiesActions";
import {fetchUnNestedProducts} from "../actions/productsActions";
import {fetchSearch, setSearch} from "../actions/searchActions";
import {CardHome} from "../components/Card.jsx";
import "./Home.css";
import Select from 'react-select';



class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {
        value: 'all',
        label: 'All'
      },
      keyword: "",
      suggestions: [],
      suggestionsVisible: true,
      active: null
    };
  }

  componentWillMount() {
    this.props.fetchCountries();
    this.props.fetchProductsForSearch();
    this.props.fetchCompanies();
  }

  handleChange = e => {
    const suggestions = [];
    this.setState({suggestionsVisible: true});
    this.setState({keyword: e.target.value});
    const length = e.target.value.length;
    if (length && this.props.countries && this.props.products && this.props.companies) {
      Object.keys(this.props.countries).map(continent => {
        this.props.countries[continent].values.map(country => {
          if (country.name.slice(0, length).toLowerCase() === e.target.value.toLowerCase()) {
            suggestions.push({type: "Country", name: country.name});
          }
        })
      });
      this.props.products[e.target.value.toLowerCase().substring(0, 1)].values.map(product => {
        if (product.name.slice(0, length).toLowerCase() === e.target.value.toLowerCase()) {
          suggestions.push({type: "Product", name: product.name});
        }
      });
      this.props.companies.map(company => {
        if (company.name.slice(0, length).toLowerCase() === e.target.value.toLowerCase()) {
          suggestions.push({type: "Company", name: company.name});
        }
      });
    }

    suggestions.sort(function(name1, name2) {
      const a = name1.name.toLowerCase();
      const b = name2.name.toLowerCase();
      if (a < b)
        return -1;
      if (a > b)
        return 1;
      return 0;
    });
    this.setState({suggestions});
  }

  selectSuggestion = suggestion => {
    this.setState({keyword: suggestion.name});
    this.setState({suggestionsVisible: false});
  }

  search = () => {
    this.props.setSearch({keyword: this.state.keyword, filter: this.state.selected});
    this.props.activateSearch();
  }

  hover = button => {
    this.setState({active: button});
  }

  selectDropDown = item => {
    console.log(item);
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
        value: 'all',
        label: 'All'
      }, {
        value: 'companies',
        label: 'Companies'
      }, {
        value: 'countries',
        label: 'Countries'
      }
      , {
        value: 'products',
        label: 'Products'
      }
    ];

    return (
      <div className="home">
        <div className="content-wrapper">
          <div className="header-wrapper">
            <div className="oec-logo-wrapper">
              <img src="/images/icons/white-oec-logo.svg"></img>
            </div>
            <img src="/images/icons/orange-market-logo.svg"></img>
            <p className="tagline">Market for exported and imported goods.</p>
          </div>
          <div className="search-wrapper">
            <div className="search-input-wrapper">
              <input onChange={this.handleChange} value={this.state.keyword} className="search-input" placeholder="Enter a Search" type="text"></input>
              {this.state.suggestions.length > 0 && this.state.suggestionsVisible
                ? <ul className="suggestions-wrapper">
                    {this.state.suggestions.map(suggestion => {
                      return <li onClick={this.selectSuggestion.bind(this, suggestion)} className="dropdown-item">
                        <img className="icon" src={suggestion.type === "Country"
                          ? "/images/icons/icon-country-yellow.svg"
                          : suggestion.type === "Product"
                            ? "/images/icons/icon-product-yellow.svg"
                            : "/images/icons/icon-company-yellow.svg"}/>
                        <p>{`${suggestion.name}  |
                        ${suggestion.type}`}</p>
                      </li>;
                    })}
                  </ul>
                : null}</div>
              <Select arrowRenderer={this.arrowRenderer} clearable={false} searchable={false} name="form-field-name" value={this.state.selected.value} options={options} onChange={this.selectDropDown}/>
          </div>
          <button onClick={this.search} className="search-button">Search</button >
          <div className="cta-buttons-wrapper">
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
          </div>
          <div className="logos-wrapper">
            <p>Created in Collaboration</p>
            <div className="img-wrapper">
              <img className="connect" src="/images/icons/logos/connectAmericasLogo.png"></img>
              <img className="mit" src="/images/icons/logos/mit.png"></img>
              <img className="datawheel" src="/images/icons/logos/datawheel.png"></img>
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
                id: "042204",
                flickr_link: "https://flic.kr/p/a7awbU"
              }}/>
              <CardHome content={{
                type: "product",
                name: "Electronic printed circuts",
                id: "16853400",
                flickr_link: null
              }}/>
              <CardHome content={{
                type: "product",
                name: "Plastic pipes",
                id: "073917",
                flickr_link: "https://flic.kr/p/6ybFaY"
              }}/>
            </div>
            <div className="companies row">
              <h3>companies</h3>
              <CardHome content={{
                type: "company",
                name: "Al - Tayyab Enterprises",
                id: "3",
                logo: "https://sabrina-test.s3.amazonaws.com/1490390523547.jpg"
              }}/>
              <CardHome content={{
                type: "company",
                name: "Salmon and Pork",
                id: "1",
                logo: "https://sabrina-test.s3.amazonaws.com/1489691935730.jpg"
              }}/>
              <CardHome content={{
                type: "company",
                name: "Sabrina's Sheeps",
                id: "2",
                logo: "https://sabrina-test.s3.amazonaws.com/1489508350507.jpg"
              }}/>
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
