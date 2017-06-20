import api from "../api.js";
import React from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import {browserHistory} from "react-router";
import {authenticateAndFetchCompany} from "../actions/companyActions";
import Sidebar from "components/Sidebar";
import "./Form.css";
import {createTradeForProduct} from "../actions/tradesActions";
import Selection from "./ProductSelectionForm";
import SelectedProduct from "./SelectedProduct";

class ProductSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  selectProduct = (companyId, productId, tradeFlow) => {
    this.props.createTradeForProduct(companyId, productId, tradeFlow);
  }

  render() {
    const {company, products} = this.props;

    if (!company) {
      return (
        <div className="register-company">
          <img src="/images/icons/icon-registration.svg"></img>
          <p>Register a company before adding products.</p>

          <Link to="/settings/company">
            <button className=" button button-next">Register a Company</button>
          </Link>
        </div>
      )
    }

    return (
      <div>
        <div className="section-wrapper">
          <b>Imports</b>
          <p className="description">Select a maximum of 5 products.</p>
          <Selection selectProduct={this.selectProduct} companyId={company.id} tradeFlow={"imports"}></Selection>
          <SelectedProduct companyId={company.id} tradeFlow={"imports"}></SelectedProduct>
        </div>
        <div className="section-wrapper">
          <b>Exports</b>
          <p className="description">Select a maximum of 5 products.</p>

          <Selection selectProduct={this.selectProduct} companyId={company.id} tradeFlow={"exports"} products={products}></Selection>
          <SelectedProduct companyId={company.id} tradeFlow={"exports"}></SelectedProduct>

        </div>
        <div className="button-wrapper">
          <Link to="/settings/country">
            <button className=" button button-next">Next<span className="chevron right"></span>
            </button>
          </Link>
        </div>
      </div>

    );
  }
}

const mapStateToProps = state => {
  return {company: state.companyProfile.authCompany};
};

const mapDispatchToProps = dispatch => {
  return {
    authenticateAndFetchCompany: () => {
      dispatch(authenticateAndFetchCompany());
    },
    createTradeForProduct: (companyId, productId, tradeFlow) => {
      dispatch(createTradeForProduct(companyId, productId, tradeFlow));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductSelection);
