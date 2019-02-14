import React from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import Card from "components/Card.jsx";
import AnchorList from "components/AnchorList.jsx";
import ProductDropdown from "components/ProductDropdown";
import {fetchData} from "@datawheel/canon-core";
import {url} from "helpers/api.js";
import CountryHeader from "components/CountryHeader";
import {nest} from "d3-collection";
import "./Detailed.css";
import {Button, ButtonGroup} from "@blueprintjs/core";

import Helmet from "react-helmet";
import header from "helpers/helmet.js";

class CountryWithId extends React.Component {
  constructor(props) {
    super(props);

    this.productsWithTrades = [];
    if (props.countryTrades) {
      this.productsWithTrades = nest()
        .key(d => d.product_id)
        .entries(props.countryTrades.filter(t => t.product_id))
        .map(c => ({count: new Set(c.values.map(d => d.company_id)).size, ...c.values[0].Product}))
        .sort((a, b) => b.count - a.count);
      // prepend "all" as default selected option
      this.productsWithTrades.unshift({name: "All", id: "all"});
    }

    this.state = {
      selectedOption: "all",
      product: {name: "All Products", id: "all"},
      filteredTrades: props.countryTrades || [],
      tradeFlow: null
    };
  }

  arrowRenderer = () => <span className="chevron bottom"></span>;

  filterTrades = () => {
    const {product, tradeFlow} = this.state;
    const {countryTrades} = this.props.data;
    // const filteredTrades = product.id === "all" ? trades : trades.filter(trade => trade.product_id === product.id);
    const filteredTrades = countryTrades.filter(trade => {
      if (product.id !== "all" && tradeFlow) {
        return trade.product_id === product.id && trade.trade_flow === tradeFlow;
      }
      if (product.id !== "all" && !tradeFlow) {
        return trade.product_id === product.id;
      }
      if (tradeFlow) {
        return trade.trade_flow === tradeFlow;
      }
      return true;
    });

    this.setState({filteredTrades});
  }

  selectDropDown = product => {
    this.setState({product}, this.filterTrades);
  }

  changeTradeFlow = tradeFlow => {
    this.setState({tradeFlow}, this.filterTrades);
  }

  introParagraph = () => {
    const {country, countryTrades} = this.props.data;

    if (!countryTrades) return <div></div>;
    if (!countryTrades.length) return <div></div>;

    const tradesByCompany = nest().key(d => d.company_id).entries(countryTrades).map(c => c.values[0].Company);
    const exportsByProduct = nest().key(d => d.product_id).entries(countryTrades.filter(t => t.trade_flow === "exports")).map(c => c.values[0].Product);
    const importsByProduct = nest().key(d => d.product_id).entries(countryTrades.filter(t => t.trade_flow === "imports")).map(c => c.values[0].Product);

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
    const {error, products, countryTrades, caTrades} = this.props;
    const {country, countryData, importData, exportData} = this.props.data;
    const {filteredTrades, product, tradeFlow} = this.state;

    if (!country || !products) {
      return <div className="detailed-content-wrapper blue-loading">
        <div>loading..</div>
      </div>;
    }

    if (country.error) {
      return <div className="error-404">
        <div className="error-gif"></div>
        <p>OOPS! There's nothing here. But checkout the following pages that are here:</p>
      </div>;
    }

    if (error) {
      return <div className="detailed-content-wrapper">
        <h2>Error</h2>
        <p>Please refresh the page.</p>
      </div>;
    }

    let companies = nest()
      .key(d => d.company_id)
      .entries(filteredTrades)
      .map(c => ({products: [...new Set(c.values.map(d => d.product_id.substring(0, 2)))], ...c.values[0]}));

    if (product.id === "all" && !tradeFlow) {
      companies = companies.concat(caTrades);
    }

    return <div className="detailed-content-wrapper country">
      <Helmet title={`${header.title} - ${country.name}`}/>
      <CountryHeader country={country} importData={importData} exportData={exportData} products={products} countryData={countryData || null}/>

      <div className="filter-bg">
        <div className="filter-wrapper">

          <div className="filter">
            <div className="label trade-flow-label">
              <p>Trade Flow</p>
            </div>
            <ButtonGroup className="bp3-dark">
              <Button onClick={() => this.changeTradeFlow(null)} active={tradeFlow ? false : true} icon="arrows-horizontal">All</Button>
              <Button onClick={() => this.changeTradeFlow("exports")} active={tradeFlow === "exports" ? true : false} icon="arrow-right">Export</Button>
              <Button onClick={() => this.changeTradeFlow("imports")} active={tradeFlow === "imports" ? true : false} icon="arrow-left">Import</Button>
            </ButtonGroup>
          </div>

          <div className="filter">
            <div className="label country-dropdown-label">
              <p>Product</p>
            </div>
            <ProductDropdown data={this.productsWithTrades} handleSelection={this.selectDropDown} selectedItem={product} />
          </div>
        </div>
      </div>

      <div>
        <div className="result-wrapper-outer">
          <div className="intro-text">
            <section>
              {countryTrades && this.introParagraph()}
            </section>
          </div>
          {companies.length
            ? <div className="result-wrapper">
              {companies.map(trade => <Card key={trade.id} products={trade.products} content={trade.Company ? {profile_type: "company", ...trade.Company} : {...trade}} />)}
            </div>
            : <div className="result-wrapper no-companies">
              <p>There are no companies listed. Be the first one!</p>
              <Link to={"/settings"}>
                <button className="list-company">List Your Company</button>
              </Link>
            </div>}
        </div>
      </div>

    </div>;
  }
}

CountryWithId.preneed = [
  fetchData("country", `${url}/api/countries/<countryWithId>`, res => res),
  fetchData("products", `${url}/api/products`, res => res)
];

CountryWithId.need = [
  fetchData("countryTrades", "/api/trades/country/<country.id>", res => res),
  fetchData("caTrades", "/api/trades/ca_country/<country.id_ca>", res => res),
  fetchData("countryData", "https://atlas.media.mit.edu/hs92/export/2015/<country.id_3char>/all/all/", res => {
    const response = res.data[0];

    const importId = response.top_import_hs4.slice(2, response.length);
    const exportId = response.top_export_hs4.slice(2, response.length);
    response.import = importId;
    response.export = exportId;
    return response;

  })
];

CountryWithId.postneed = [
  fetchData("importData", "https://atlas.media.mit.edu/hs92/import/2017/all/all/<countryData.import>/", res => res.data[0]),
  fetchData("exportData", "https://atlas.media.mit.edu/hs92/import/2017/all/all/<countryData.export>/", res => res.data[0])
];

const mapStateToProps = state => ({
  data: state.data,
  country: state.countryProfile.country,
  loading: state.countryProfile.loading,
  error: state.countryProfile.error || null,
  products: state.data.products,
  countryTrades: state.data.countryTrades,
  caTrades: state.data.caTrades,
  tradesError: state.trades.error
});

export default connect(mapStateToProps)(CountryWithId);
