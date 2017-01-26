require.context("../img/", true, /^\.\/.*\.(png|svg)/);
import "../styles/index.scss";
import {Router, Route, browserHistory, IndexRoute} from "react-router";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import Company from "./components/Company.jsx";
import CompanyWithId from "./components/CompanyWithId.jsx";
import Country from "./components/Country.jsx";
import CountryWithId from "./components/CountryWithId.jsx";
import Product from "./components/Product.jsx";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Profile from "./components/Profile.jsx";
import Settings from "./components/Settings.jsx";
import Logout from "./components/Logout.jsx";
import Inbox from "./components/Inbox.jsx";
import ProductWithId from "./components/ProductWithId.jsx";

ReactDOM.render(
    <Router history={browserHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/country" component={Country}/>
        <Route path="/country/:countryWithId" component={CountryWithId}/>
        <Route path="/company" component={Company}/>
        <Route path="/company/:companyWithId" component={CompanyWithId}/>
        <Route path="/product" component={Product}/>
        <Route path="/product/:productWithId" component={ProductWithId}/>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/user/:userId" component={Profile}/>
        <Route path="/user/:userId/settings" component={Settings}></Route>
        <Route path="/user/:userId/inbox" component={Inbox}></Route>
        <Route path="/user/:userId/logout" component={Logout}></Route>
    </Route>
</Router>, document.getElementById("component"));
