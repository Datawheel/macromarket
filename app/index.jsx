// require.context("../img/", true, /^\.\/.*\.(png|svg)/);
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
import Inbox from "./components/Inbox.jsx";
import ProductWithId from "./components/ProductWithId.jsx";
import thunk from "redux-thunk";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import oecmReducer from "./reducers";

const store = createStore(oecmReducer, {}, applyMiddleware(thunk
));

ReactDOM.render(
  <Provider store={store}>
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
          <Route path="/profile" component={Profile}/>
          <Route path="/settings" component={Settings}></Route>
          <Route path="/inbox" component={Inbox}></Route>
      </Route>
    </Router>
  </Provider>, document.getElementById("component"));
