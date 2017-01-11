require.context("../img/", true, /^\.\/.*\.(png|svg)/);
import "../styles/index.scss";
import {Router, Route, browserHistory} from "react-router";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import Company from "./components/Company.jsx";
import CompanyWithId from "./components/CompanyWithId.jsx";
import Country from "./components/Country.jsx";
import CountryWithId from "./components/CountryWithId.jsx";
import Product from "./components/Product.jsx";
import ProductWithId from "./components/ProductWithId.jsx";

ReactDOM.render(
    <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="dd" component={Country}/>
    </Route>
    <Route path="/country" component={Country}/>
    <Route path="/country/:countryWithId" component={CountryWithId}/>
    <Route path="/company" component={Company}/>
    <Route path="/company/:companyWithId" component={CompanyWithId}/>
    <Route path="/product" component={Product}/>
    <Route path="/product/:productWithId" component={ProductWithId}/>

</Router>, document.getElementById("component"));
