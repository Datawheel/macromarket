import React from "react";
import {connect} from "react-redux";
import {Link, browserHistory} from "react-router";
import {nest} from "d3-collection";
import {ascending} from "d3-array";
import Sidebar from "../../components/Sidebar";
import {fetchData} from "datawheel-canon";
import api, {url} from "../../api";
import {Intent, Position, Toaster} from "@blueprintjs/core";
import "../../components/Form.css";
import "../../components/Settings.css";
import Selection from "../../components/ProductSelectionForm";
import TradeEdit from "./TradeEdit";

class EditCompanyProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trades: [{product: 1, destinations: [], origins: []}]
    };
  }

  componentDidMount() {
    const {companyId} = this.props.params;
    this.setState({newCompany: companyId === "new"});
  }

  handleChange = e => {
    const value = e.target.type === "checkbox"
      ? e.target.checked
      : e.target.value;
    this.setState({
      [e.target.name]: value
    });
  };

  saveCompany = () => {
    const {id} = this.props.company;
    const company = {
      name: this.state.name,
      description: this.state.description,
      address: this.state.address,
      city: this.state.city,
      region: this.state.region,
      country_id: this.state.country_id,
      company_email: this.state.company_email,
      phone_number: this.state.phone_number,
      website: this.state.website
    };
    if (this.state.newCompany) {
      api.post("api/companies/", {...company}).then(companyResponse => {
        const {id: newId} = companyResponse.data;
        this.setState({newCompany: false});
        const toast = Toaster.create({className: "company-saved-toast", position: Position.TOP_CENTER});
        toast.show({message: "New company created.", intent: Intent.SUCCESS});
        browserHistory.push(`/settings/company/${newId}`);
      });
    }
    else {
      api.put(`api/companies/${id}`, {...company}).then(() => {
        this.setState({newCompany: false});
        const toast = Toaster.create({className: "company-saved-toast", position: Position.TOP_CENTER});
        toast.show({message: "Company data saved.", intent: Intent.SUCCESS});
      });
    }
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
      <div className="settings">
        <Sidebar>

          <h2>Settings</h2>
          <p className="user-email">{`Email: ${user.email}`}</p>

        </Sidebar>
        <div className="center-content form-wrapper">
          <div className="toggle-wrapper">
            <Link to="/settings/user">
              <div className={path.includes("user")
                ? "toggle selected"
                : "toggle"}>User Data</div>
            </Link>
            <Link to="/settings/company">
              <div className={path.includes("company")
                ? "toggle selected"
                : "toggle"}>Company Data</div>
            </Link>
            <Link to="/settings/product">
              <div className={path.includes("product")
                ? "toggle selected"
                : "toggle"}>Product Selection</div>
            </Link>
            <Link to="/settings/country">
              <div className={path.includes("country")
                ? "toggle selected"
                : "toggle"}>Country Selection</div>
            </Link>
          </div>
          <div className="form">

            <div className="pt-form-group">
              <label className="pt-label" htmlFor="example-form-group-input-a">
                <span className="pt-icon pt-icon-insert"></span> Search for a product
              </label>
              <div className="pt-form-content">
                <input name="name" onChange={this.handleChange} id="example-form-group-input-a" value={name} className="pt-input" placeholder="My Company" type="text" dir="auto" />
              </div>
            </div>

            <div className="pt-form-group">
              <p>...or browse and select from the list</p>
              <Selection products={products} selectProduct={() => {}} companyId={105} tradeFlow={"imports"}></Selection>
            </div>

            <div className="pt-form-group contact-info">
              <button type="button" className="pt-button pt-intent-success pt-large" onClick={this.saveCompany}>
                Save
                <span className="pt-icon-standard pt-icon-arrow-right pt-align-right"></span>
              </button>
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
                <TradeEdit key={i} trade={trade} countries={countries} />
              )}
            </div>

          </div>
        </div>
      </div>
    );
  }
}

EditCompanyProducts.preneed = [
  fetchData("company", `${url}/api/companies/<companyId>`, res => res),
  fetchData("countries", `${url}/api/countries`, res => {
    const nestedCountries = nest()
      .key(d => d.continent)
      .entries(res);
    return res;
  }),
  fetchData("products", `${url}/api/products`, res => {
    const json = nest()
      .key(d => d.id.substring(0, 2))
      .sortKeys(ascending)
      .key(d => d.id.substring(2, 4))
      .sortKeys(ascending)
      .key(d => d.id.substring(4, 6))
      .sortKeys(ascending)
      .entries(res)
      .map(d => {
        const myHs2 = d.values.shift();
        const myNewValues = d.values.map(dd => {
          const myHs4 = dd.values.shift();
          const innerValues = dd.values.map(ddd => {
            const myHs6 = ddd.values.shift();
            return {
              key: ddd.key,
              values: ddd.values,
              name: myHs6.name
            };
          });
          return {
            key: dd.key,
            values: innerValues,
            name: myHs4.values[0].name
          };
        });
        const returnData = {
          key: d.key,
          values: myNewValues,
          name: myHs2.values[0].values[0].name
        };

        return returnData;
      });
    return json;
  })
];

const mapDispatchToProps = dispatch => ({

});

const mapStateToProps = state => ({
  company: state.data.company,
  countries: state.data.countries,
  products: state.data.products,
  user: state.authentication.user
});

export default connect(mapStateToProps, mapDispatchToProps)(EditCompanyProducts);
