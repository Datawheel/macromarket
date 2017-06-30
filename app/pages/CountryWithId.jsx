import React from "react";
import Sidebar from "components/Sidebar";
import {Link} from "react-router";
import {connect} from "react-redux";
import {fetchCountry} from '../actions/countryActions';
import {fetchProducts} from '../actions/productsActions';
import {fetchTradesByCountry} from "../actions/tradesActions";
import {fetchCaTradesByCountry} from "../actions/tradesActions";
import {Card} from "../components/Card.jsx";
import "./Detailed.css";
import "../components/Dropdown.css";
import Select from "react-select";
import Dropdown from "../components/Dropdown";
import {fetchData} from "datawheel-canon";
import {url} from "../api";
import CountryHeader from "../components/CountryHeader"

class CountryWithId extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "all",
      product: {
        label: "All",
        value: "all"
      }
    };
  }

  componentWillMount() {
    const id = this.props.params.countryWithId;
    this.props.fetchProducts();
    this.props.fetchCountry(id);
    this.props.fetchTradesByCountry(id);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.params.countryWithId !== this.props.params.countryWithId) {
      const id = newProps.params.countryWithId
      this.props.fetchProducts();
      this.props.fetchTradesByCountry(id);
      this.props.fetchCountry(id);
      this.removeSelection();
    }
  }

  handleOptionChange = selectedOption => {
    this.setState({selectedOption});
  }

  arrowRenderer = () => {
    return (
      <span className="chevron bottom"></span>
    );
  }

  filterCompanies(trades) {
    const seen = [];
    const filteredResult = [];
    for (let i = 0; i < trades.length; i++) {
      const trade = trades[i];
      let unique = true;


      //if it is NOT a connectamericas company
      if(trade.id.toString().slice(0, 3) !== "ca_") {
        unique = !seen.includes(trade.company_id);
      }



      const tradeFlow = this.state.selectedOption === "all" ||  trade.trade_flow === `${this.state.selectedOption}`;
      const product = this.state.product.value === "all" || (trade.product_id ? this.state.product.value === trade.product_id.slice(0,4) : false);

      if (tradeFlow && product && unique) {
        console.log(trade);
        if(trade.company_id) {seen.push(trade.company_id);}
        filteredResult.push(trade);
      }
    }
    console.log(filteredResult)
    return filteredResult;
  }

  compare(a, b, attr) {
      if (a[attr] < b[attr]) {
        return -1;
      }
      if (a[attr] > b[attr]) {
        return 1;
      }
      return 0;
    }


  removeSelection = () => {
    this.setState({
      product: {
        label: "All",
        value: "all"
      },
      selectedOption: "all"
    });
  }

  selectDropDown = item => {
    this.setState({product: item});
  }

  render() {
    const {loading, error, products, trades, caTrades, tradesLoading, caTradesLoading} = this.props;
    const {country, countryData, importData, exportData} = this.props.data;

    if (!country || !products) {
      return (
        <div className="detailed-content-wrapper blue-loading">
          <div>loading..</div>
        </div>
      );
    }

    const dropDownProducts = [];

    products.sort((a,b) => this.compare(a, b, "name"));
    products.map(category => {
      let first = true;
      category.values.sort((a,b) => this.compare(a, b, "name"));
      category.values.map(product => {
        dropDownProducts.push({categoryId: category.key, name: category.name, value: product.key, label: product.name, first});
        first = false;
      });
    });

    if (error) {
      return (
        <div className="detailed-content-wrapper">
          <h2>Error</h2>
          <p>Please refresh the page.</p>
        </div>
      );
    }

    let allTrades;
    if (caTrades && trades) {
      allTrades = caTrades.concat(trades);
    }



    return (
      <div className="detailed-content-wrapper country">
        <CountryHeader country={country} importData={importData} exportData={exportData} products={products} countryData={countryData || null}/>
        <div className="filter-wrapper">
          <div className="filter export-import">
            <label className="label radio-label">
              <input className="radio" onChange={this.handleOptionChange.bind(this, "exports")} type="radio" value="exports" checked={this.state.selectedOption === "exports"}/>
              <p>Exports</p>
            </label>
            <label className="label radio-label">
              <input className="radio" onChange={this.handleOptionChange.bind(this, "imports")} type="radio" value="imports" checked={this.state.selectedOption === "imports"}/>
              <p>Imports</p>
            </label>
          </div>
          <div className="filter">
            <div className="label">
              <span><img src="/images/icons/icon-product-grey.svg"/></span>
              <p>Filter Products</p>
            </div>
            <Dropdown removeSelection={this.removeSelection} clearable={true} type="products" select={this.selectDropDown} value={this.state.product.value} options={dropDownProducts}></Dropdown>
          </div>
          <div className="filter button-wrapper">
            <button className="clear-filters" onClick={this.removeSelection.bind(this)}>
              <span>
                <img src="/images/icons/icon-clear-white.svg"/>
              </span>
              Clear All Filters</button>
          </div>
        </div>
        <div className="result-wrapper-outer">
          {!allTrades
            ? <div className="result-wrapper loading-wrapper"><p>Loading...</p></div>
            : <div className="result-wrapper">
                {allTrades.length > 0 ? allTrades.map((trade, index) => {
                  if (!trade.profile_type) {
                    const content = trade.Company;
                    content.profile_type = "company";
                    if ((trade.trade_flow === `${this.state.selectedOption}` || this.state.selectedOption === "all") && (this.state.product.value === "all" || this.state.product.value === trade.product_id.slice(0, 2))) {
                      return <Card key={index} content={content}/>;
                    }
                  } else {
                    if (this.state.selectedOption === "all" && this.state.product.value === "all") {
                      return <Card key={index} content={trade}/>;
                    }
                  }
                }) : <div className="result-wrapper no-companies">
                  <p>There are no companies listed. Be the first one!</p>
                  <Link to={"/settings/product"}>
                    <button className="list-company">List Your Company</button>
                  </Link>
                </div>}
              </div>
          }
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCountry: id => {
      dispatch(fetchCountry(id))
    },
    fetchProducts: () => {
      dispatch(fetchProducts());
    },
    fetchTradesByCountry: id => {
      dispatch(fetchTradesByCountry(id));
    },
    fetchCaTradesByCountry: id => {
      dispatch(fetchCaTradesByCountry(id));
    }
  };
}

const countryUrl = `${url}/api/countries/<countryWithId>`;

CountryWithId.preneed = [fetchData("country", countryUrl, res => res)];

CountryWithId.need = [fetchData("countryData", "http://atlas.media.mit.edu/hs92/export/2015/<country.id_3char>/all/all/", res => {
    const response = res.data[0];

    const importId = response.top_export_hs4.slice(2, response.length);
    const exportId = response.top_import_hs4.slice(2, response.length);
    response.import = importId;
    response.export = exportId;
    return response;

  })];

CountryWithId.postneed = [
  fetchData("importData", "http://atlas.media.mit.edu/hs92/import/2015/all/all/<countryData.import>/", res => res.data[0]),
  fetchData("exportData", "http://atlas.media.mit.edu/hs92/import/2015/all/all/<countryData.export>/", res => res.data[0])
];

const mapStateToProps = state => {
  return {
    data: state.data,
    country: state.countryProfile.country,
    loading: state.countryProfile.loading,
    error: state.countryProfile.error || null,
    products: state.products.products,
    trades: state.trades.trades,
    tradesLoading: state.trades.loading,
    caTrades: state.trades.caTrades,
    caTradesLoading: state.trades.loading,
    tradesError: state.trades.error
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryWithId)
