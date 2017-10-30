import React from "react";
import {CardHome} from "../components/Card.jsx";
import "./Home.css";
import {browserHistory} from "react-router";
import Select from "react-select";
import api from "../api.js";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      suggestions: [],
      suggestionsVisible: true,
      active: null,
      searchResults: [],
      filter: {value: "All", label: "All"}
    };
    this.countries = [
      {type: "country", name: "Chile", continent: "South America", id: "sachl", flickr_link: "https://flic.kr/p/g2TM9U"},
      {type: "country", name: "USA", continent: "North America", id: "nausa", flickr_link: "https://flic.kr/p/8CZkZ7"},
      {type: "country", name: "Italy", continent: "Europe", id: "euita", flickr_link: "https://flic.kr/p/gonJ3Y"},
      {type: "country", name: "Vietnam", continent: "Asia", id: "asvnm", flickr_link: ""},
      {type: "country", name: "Azerbaijan", continent: "Asia", id: "asaze", flickr_link: ""}
    ];
    this.products = [
      {type: "product", name: "Wine", category: "Foodstuffs", id: "042204", flickr_link: "https://flic.kr/p/a7awbU"},
      {type: "product", name: "Sheep and Goats", category: "Animal Products", id: "010104", flickr_link: null},
      {type: "product", name: "Fork-Lifts", category: "Machines", id: "168427", flickr_link: "https://flic.kr/p/6ybFaY"},
      {type: "product", name: "Coffee", category: "Foodstuffs", id: "020901", flickr_link: "https://flic.kr/p/aiHENe"},
      {type: "product", name: "Computers", category: "Machines", id: "168471", flickr_link: "https://flic.kr/p/4jcppM"},
      {type: "product", name: "Electrical Transformers", category: "Machines", id: "168504", flickr_link: "https://flic.kr/p/6Bfnmw"}
    ];
    this.companies = [
      {type: "company", name: "Alk Trading LLC", id: "alk-trading-llc", logo: "https://storage.googleapis.com/mm-company/company/company223-6_primary_logo_on_color2_5000.png"},
      {type: "company", name: "Apu Café", id: "apu-sas", logo: "https://storage.googleapis.com/mm-company/company/company222-logo-apu.png"},
      {type: "company", name: "Azexporter", id: "azexporter", logo: "https://storage.googleapis.com/mm-company/company/company184-home-banner-shipping.jpg"},
      {type: "company", name: "OSSA Productos Orgánicos", id: "ossa-productos-organicos", logo: "https://storage.googleapis.com/mm-company/company/company198-ossa-2.jpg"},
      {type: "company", name: "Sidick General Trading", id: "sidick-general-trading-m-sdn-bhd", logo: "https://storage.googleapis.com/mm-company/company/company195-fb-cover.jpg"},
      {type: "company", name: "W3 Holding Trading Corp.", id: "w3-holding-trading-corp", logo: "https://storage.googleapis.com/mm-company/company/company162-logo-w3h-origami-02-copy.png"},
      {type: "company", name: "TFO Canada", id: "ca_42795", logo: "https://d3pl7mm70gk6ic.cloudfront.net/sites/default/files/styles/mobile_full_width/public/company-42795-1478811748.png"}
    ];
  }

  selectSuggestion = suggestion => {
    const type = suggestion.profile_type === "connectamericas"
      ? "company"
      : suggestion.profile_type;
    browserHistory.push(`/${type}/${suggestion.id}`);
  }

  search = (searchTerm, filter) => {
    // this.props.setSearch({keyword: this.state.keyword, filter: this.state.selected.value});
    // this.props.fetchSearch(this.state.keyword, this.state.selected.value.toLowerCase());
    // this.props.activateSearch();
    api.get(`/api/search/${filter}/${searchTerm}`)
      .then(response => {
        this.setState({searchResults: response.data});
      })
      .catch(response => {
        console.log("err:", response);
      });
  }

  hover = button => {
    this.setState({active: button});
  }

  selectDropDown = item => {
    this.setState({selected: item});
  }

  handleChange = e => {
    this.setState({
      suggestionsVisible: true,
      keyword: e.target.value
    });
    const {filter} = this.state;

    // Only run the search if the user has typed MORE than 2 characters,
    // otherwise this returns way too many results and feels laggy.
    //  - else
    // clear the results but submitting an empty string
    if (e.target.value.length > 2) {
      this.search(e.target.value, filter.value.toLowerCase());
    }
    else {
      this.search("", filter.value.toLowerCase());
    }
  }

  selectSuggestion = suggestion => {
    const type = suggestion.profile_type === "connectamericas"
      ? "company"
      : suggestion.profile_type;
    browserHistory.push(`/${type}/${suggestion.id}`);
  }

  render() {
    const {filter, searchResults} = this.state;
    const options = [
      {value: "All", label: "All"},
      {value: "Company", label: "Companies"},
      {value: "Country", label: "Countries"},
      {value: "Product", label: "Products"}
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
                <img src="/images/icons/logos/orange-market-logo.svg"></img>
              </div>
              <p className="tagline">Market for exported and imported goods.</p>
            </div>
            <div className="search-wrapper">
              <div className="search-input-wrapper">
                <input onChange={this.handleChange} value={this.state.keyword} className="search-input" placeholder="Enter a Search" type="text" />
                {searchResults.length > 0
                  ? <ul ref="area" className="suggestions-wrapper">
                    {searchResults.map((suggestion, i) => {
                      return <li key={i} onClick={this.selectSuggestion.bind(this, suggestion)} className="dropdown-item">
                        <img className="icon" src={suggestion.profile_type === "Country"
                          ? "/images/icons/icon-country-yellow.svg"
                          : suggestion.profile_type === "Product"
                            ? "/images/icons/icon-product-yellow.svg"
                            : "/images/icons/icon-company-yellow.svg"}/>
                        <p>{`${suggestion.name}  |
                      ${suggestion.profile_type === "connectamericas" ? "company" : suggestion.profile_type}`}</p>
                      </li>;
                    })}
                  </ul>
                  : null}
              </div>
              <Select
                optionClassName={"dropdown-option"}
                arrowRenderer={() => <span className="chevron bottom"></span>}
                clearable={false}
                searchable={false}
                name="form-field-name"
                value={filter}
                options={options}
                onChange={item => {
                  this.setState({filter: item});
                }}
              />
            </div>

            <div className="logos-wrapper">
              <p>Created in Collaboration</p>
              <div className="img-wrapper">
                <a href="https://connectamericas.com/" rel="noopener noreferrer" target="_blank"><img className="connect" src="/images/icons/logos/connectAmericasLogo.png" alt="IADB Connect Americas Logo" /></a>
                <a href="https://www.media.mit.edu/groups/collective-learning/overview/" rel="noopener noreferrer" target="_blank"><img className="collective-learning" src="/images/icons/logos/collective-learning.png" alt="Collective Learning Logo" /></a>
                <a href="https://www.media.mit.edu/" rel="noopener noreferrer" target="_blank"><img className="media-lab" src="/images/icons/logos/mit-media-lab.png" alt="MIT Media Lab Logo" /></a>
                <a href="http://www.datawheel.us/" rel="noopener noreferrer" target="_blank"><img className="datawheel" src="/images/icons/logos/datawheel.png" alt="Datawheel Logo" /></a>
              </div>
            </div>
            <div className="grid-wrapper">
              <div className="countries row">
                <h3>Countries</h3>
                {this.countries.map(c => <CardHome key={c.id} content={c} />)}
              </div>
              <div className="products row">
                <h3>Prdoucts</h3>
                {this.products.map(p => <CardHome key={p.id} content={p} />)}
              </div>
              <div className="companies row">
                <h3>companies</h3>
                {this.companies.map(c => <CardHome key={c.id} content={c} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
