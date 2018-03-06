import React from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import Card from "../components/Card.jsx";
import AnchorList from "../components/AnchorList.jsx";
import Dropdown from "../components/Dropdown";
import {fetchData} from "datawheel-canon";
import {url} from "../api";
import CountryHeader from "../components/CountryHeader";
import {nest} from "d3-collection";
import "./Detailed.css";
import "../components/Dropdown.css";
import {ascending} from "d3-array";

import Helmet from "react-helmet";
import header from "../helmet.js";

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

  handleOptionChange = selectedOption => {
    this.setState({selectedOption});
  }

  arrowRenderer = () => <span className="chevron bottom"></span>;
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

  introParagraph = () => {
    const {country, trades} = this.props.data;

    const tradesByCompany = nest().key(d => d.company_id).entries(trades).map(c => c.values[0].Company);
    const exportsByProduct = nest().key(d => d.product_id).entries(trades.filter(t => t.trade_flow === "exports")).map(c => c.values[0].Product);
    const importsByProduct = nest().key(d => d.product_id).entries(trades.filter(t => t.trade_flow === "imports")).map(c => c.values[0].Product);

    const numCompanies = tradesByCompany.length;
    return numCompanies
      ? <p>
          <span>The following is a list of all the companies that export or import products or services from {country.name}. </span>
          {
            numCompanies === 1
              ? <span>There is one company exporting or importing from {country.name} named <AnchorList items={tradesByCompany.slice(0, 3)} name={c => c.name} url={c => `/company/${c.slug}`}/>.&nbsp;</span>
              : <span>There are {tradesByCompany.length} companies exporting and importing from {country.name} including <AnchorList items={tradesByCompany.slice(0, 3)} name={c => c.name} url={c => `/company/${c.slug}`}/>.&nbsp;</span>
          }
          {
            exportsByProduct.length
              ? exportsByProduct.length === 1
                ? <span>{
                      numCompanies === 1
                        ? <span>This company exports one product</span>
                        : <span>These companies export one product</span>
                    }, <AnchorList items={exportsByProduct.slice(0, 3)} name={c => c.name} url={c => `/product/${c.id}`}/>.&nbsp;</span>
                : <span>{
                      numCompanies === 1
                        ? <span>This company exports {exportsByProduct.length} products</span>
                        : <span>These companies export {exportsByProduct.length} products</span>
                    } including <AnchorList items={exportsByProduct.slice(0, 3)} name={c => c.name} url={c => `/product/${c.id}`}/>.&nbsp;</span>
              : null
          }
          {
            importsByProduct.length
              ? importsByProduct.length === 1
                ? <span>They import one product,
                    <AnchorList items={exportsByProduct.slice(0, 3)} name={c => c.name} url={c => `/product/${c.id}`}/>.&nbsp;</span>
                : <span>They import {importsByProduct.length} products including <AnchorList items={importsByProduct.slice(0, 3)} name={c => c.name} url={c => `/product/${c.id}`}/>.&nbsp;</span>
              : null
          }
        </p>
      : null;
  }

  render() {
    const {loading, error, products, trades, caTrades} = this.props;
    const {country, countryData, importData, exportData} = this.props.data;

    if (!country || !products) {
      return (<div className="detailed-content-wrapper blue-loading">
        <div>loading..</div>
      </div>);
    }

    if (country.error) {
      return (<div className="error-404">
        <div className="error-gif"></div>
        <p>OOPS! There's nothing here. But checkout the following pages that are here:</p>
      </div>);
    }

    const dropDownProducts = [];

    products.sort((a, b) => this.compare(a, b, "name"));
    products.map(category => {
      let first = true;
      category.values.sort((a, b) => this.compare(a, b, "name"));
      category.values.map(product => {
        dropDownProducts.push({categoryId: category.key, name: category.name, value: product.key, label: product.name, first});
        first = false;
      });
    });

    if (error) {
      return (<div className="detailed-content-wrapper">
        <h2>Error</h2>
        <p>Please refresh the page.</p>
      </div>);
    }
    let allTrades;
    if (caTrades && trades) {
      // filter out duplicate countries
      allTrades = trades.filter((trade, index, self) => self.findIndex(t => t.company_id === trade.company_id) === index).concat(caTrades);
    }

    return (<div className="detailed-content-wrapper country">
      <Helmet title={`${header.title} - ${country.name}`}/>
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
        <div className="intro-text">
          <section>
            {trades && this.introParagraph()}
          </section>
        </div>
        {
          !allTrades
            ? <div className="result-wrapper loading-wrapper">
                <p>Loading...</p>
              </div>
            : <div className="result-wrapper">
                {
                  allTrades.length > 0
                    ? allTrades.map(trade => {
                      if (!trade.profile_type) {
                        const content = trade.Company;
                        content.profile_type = "company";
                        if ((trade.trade_flow === `${this.state.selectedOption}` || this.state.selectedOption === "all") && (this.state.product.value === "all" || this.state.product.value === trade.product_id.slice(0, 2))) {
                          return <Card key={trade.id} content={content}/>;
                        }
                      } else {
                        if (this.state.selectedOption === "all" && this.state.product.value === "all") {
                          return <Card key={trade.id} content={trade}/>;
                        }
                      }
                    })
                    : <div className="result-wrapper no-companies">
                        <p>There are no companies listed. Be the first one!</p>
                        <Link to={"/settings"}>
                          <button className="list-company">List Your Company</button>
                        </Link>
                      </div>
                }
              </div>
        }
      </div>
    </div>);
  }
}

CountryWithId.preneed = [
  fetchData("country", `${url}/api/countries/<countryWithId>`, res => res),
  fetchData("products", `${url}/api/products`, res => {
    return nest().key(d => d.id.substring(0, 2)).sortKeys(ascending).key(d => d.id.substring(2, 4)).sortKeys(ascending).key(d => d.id.substring(4, 6)).sortKeys(ascending).entries(res).map(d => {
      const myHs2 = d.values.shift();
      const myNewValues = d.values.map(dd => {
        const myHs4 = dd.values.shift();
        const innerValues = dd.values.map(ddd => {
          const myHs6 = ddd.values.shift();
          return {key: ddd.key, values: ddd.values, name: myHs6.name};
        });
        return {key: dd.key, values: innerValues, name: myHs4.values[0].name};
      });
      const returnData = {
        key: d.key,
        values: myNewValues,
        name: myHs2.values[0].values[0].name

      };

      return returnData;
    });
  })
];

CountryWithId.need = [
  fetchData("trades", `${url}/api/trades/country/<country.id>`, res => res),
  fetchData("caTrades", `${url}/api/trades/ca_country/<country.id_ca>`, res => res),
  fetchData("countryData", "https://atlas.media.mit.edu/hs92/export/2015/<country.id_3char>/all/all/", res => {
    const response = res.data[0];

    const importId = response.top_export_hs4.slice(2, response.length);
    const exportId = response.top_import_hs4.slice(2, response.length);
    response.import = importId;
    response.export = exportId;
    return response;

  })
];

CountryWithId.postneed = [
  fetchData("importData", "https://atlas.media.mit.edu/hs92/import/2015/all/all/<countryData.import>/", res => res.data[0]),
  fetchData("exportData", "https://atlas.media.mit.edu/hs92/import/2015/all/all/<countryData.export>/", res => res.data[0])
];

const mapStateToProps = state => {
  return {
    data: state.data,
    country: state.countryProfile.country,
    loading: state.countryProfile.loading,
    error: state.countryProfile.error || null,
    products: state.data.products,
    trades: state.data.trades,
    caTrades: state.data.caTrades,
    tradesError: state.trades.error
  };
};

export default connect(mapStateToProps)(CountryWithId);
