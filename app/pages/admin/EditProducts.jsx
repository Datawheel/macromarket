import React from "react";
import {connect} from "react-redux";
import {Link, browserHistory} from "react-router";
import Sidebar from "../../components/Sidebar";
import {fetchData} from "datawheel-canon";
import api, {url} from "../../api";
import {Intent, Position, Toaster} from "@blueprintjs/core";
import "./Admin.css";
import "./Settings.css";
import ProductBrowse from "./ProductBrowse";
import TradeEdit from "./TradeEdit";
import ProductSearch from "./ProductSearch";

class EditProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trades: []
    };
  }

  componentDidMount() {
    console.log("TrAdes!", this.props.trades)
    // const {companyId} = this.props.params;
    this.setState({trades: this.props.trades});
  }

  handleChange = e => {
    const value = e.target.type === "checkbox"
      ? e.target.checked
      : e.target.value;
    this.setState({
      [e.target.name]: value
    });
  };

  saveTrades = () => {
    const {companyId} = this.props.params;
    const {trades} = this.state;
    const tradesForServer = [];
    console.log("SAVING TRADES:");
    trades.forEach(t => {
      t.origins.forEach(o => {
        tradesForServer.push({product: t.product, tradeFlow: "imports", country: o});
      })
      t.destinations.forEach(d => {
        tradesForServer.push({product: t.product, tradeFlow: "exports", country: d});
      })
    })
    console.log(tradesForServer);
    console.log("///////////////");
    console.log("// END SAVING TRADES:");

    api.post(`/api/trades/company/${companyId}`, tradesForServer).then(tradesResponse => {
      const toast = Toaster.create({className: "company-saved-toast", position: Position.TOP_CENTER});
      toast.show({message: "Product trades updated.", intent: Intent.SUCCESS});
      console.log(tradesResponse.data);
      // const {id: newId} = companyResponse.data;
      // this.setState({newCompany: false});
      // const toast = Toaster.create({className: "company-saved-toast", position: Position.TOP_CENTER});
      // toast.show({message: "New company created.", intent: Intent.SUCCESS});
      // browserHistory.push(`/settings/company/${newId}`);
    });
    // const {id} = this.props.company;
    // if (this.state.newCompany) {
    //   api.post("api/companies/", {...company}).then(companyResponse => {
    //     const {id: newId} = companyResponse.data;
    //     this.setState({newCompany: false});
    //     const toast = Toaster.create({className: "company-saved-toast", position: Position.TOP_CENTER});
    //     toast.show({message: "New company created.", intent: Intent.SUCCESS});
    //     browserHistory.push(`/settings/company/${newId}`);
    //   });
    // }
    // else {
    //   api.put(`api/companies/${id}`, {...company}).then(() => {
    //     this.setState({newCompany: false});
    //     const toast = Toaster.create({className: "company-saved-toast", position: Position.TOP_CENTER});
    //     toast.show({message: "Company data saved.", intent: Intent.SUCCESS});
    //   });
    // }
  }

  addProduct = product => {
    const trade = {
      product,
      origins: [],
      destinations: []
    };
    this.setState({trades: this.state.trades.concat([trade])});
  }

  addOrigins = (origins, productId) => {
    const {trades} = this.state;
    const newTrades = trades.map(t => {
      if (t.product.id === productId) {
        t.origins = origins;
      }
      return t;
    });
    console.log("ADDING ORIGIN", productId, origins);
    this.setState({trades: newTrades});
  }

  addDestinations = (destinations, productId) => {
    const {trades} = this.state;
    const newTrades = trades.map(t => {
      if (t.product.id === productId) {
        t.destinations = destinations;
      }
      return t;
    });
    console.log("ADDING DESTS", productId, destinations);
    this.setState({trades: newTrades});
  }

  deleteProduct = p => {
    const {companyId} = this.props.params;
    const {trades} = this.state;

    api.delete(`/api/trades/company/${companyId}/product/${p.id}`).then(res => {
      this.setState({
        trades: trades.filter(t => t.product.id !== p.id)
      });
    });
  }

  render() {
    const {user, loading, products, countries} = this.props;
    const {trades} = this.state;

    if (loading || !user) {
      return (
        <div className="settings">
          <Sidebar></Sidebar>
          <div className="center-content form-wrapper">
            <div className="form"></div>
          </div>
        </div>
      );
    }

    const path = this.props.location.pathname;
    return (
      <div>

        <ProductSearch products={products} selectProduct={this.addProduct} />

        <div className="pt-form-group">
          <p>...or browse and select from the list</p>
          <ProductBrowse products={products} selectProduct={this.addProduct} />
        </div>

        <div className="trades">
          <div className="trade">
            <div className="trade-product">
              <strong>Product</strong>
            </div>
            <div className="trade-dest">
              <strong>Export Destinations</strong>
            </div>
            <div className="trade-origin">
              <strong>Import Origins</strong>
            </div>
            <div className="trade-controls">
              &nbsp;
            </div>
          </div>
          {trades.map((trade, i) =>
            <TradeEdit
              key={i}
              trade={trade}
              countries={countries}
              selectDestinations={this.addDestinations}
              selectOrigins={this.addOrigins}
              deleteProduct={this.deleteProduct}
            />
          )}
        </div>

        <div className="pt-form-group contact-info">
          <button type="button" className="pt-button pt-intent-success pt-large" onClick={this.saveTrades}>
            Save
            <span className="pt-icon-standard pt-icon-arrow-right pt-align-right"></span>
          </button>
        </div>

      </div>
    );
  }
}

EditProducts.preneed = [
  fetchData("company", `${url}/api/companies/<companyId>`, res => res),
  fetchData("countries", `${url}/api/countries`, res => res),
  fetchData("products", `${url}/api/products`, res => res),
  fetchData("trades", `${url}/api/trades/company/<companyId>`, res => {
    const trades = [];
    res.forEach(t => {
      const prodRow = trades.find(tt => tt.product.id === t.product_id);
      const tKey = t.trade_flow === "imports" ? "origins" : "destinations";
      const tOtherKey = t.trade_flow === "imports" ? "destinations" : "origins";
      if (prodRow) {
        prodRow[tKey].push(t.Country);
      }
      else {
        trades.push({product: t.Product, [tKey]: [t.Country], [tOtherKey]: []});
      }
    });
    return trades;
  })
];

const mapDispatchToProps = dispatch => ({

});

const mapStateToProps = state => ({
  company: state.data.company,
  countries: state.data.countries,
  products: state.data.products,
  trades: state.data.trades,
  user: state.authentication.user
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProducts);
