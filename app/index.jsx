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
import NotFound from "./components/NotFound.jsx";
import oecmReducer from "./reducers";

const store = createStore(oecmReducer, {}, applyMiddleware(thunk));

function genRandId(path) {
  let candidates;
  if (path.includes("country")) {
    candidates = [
      "ocnzl",
      "saarg",
      "nagtm",
      "afdji",
      "afeth",
      "eurou",
      "nablz",
      "saury",
      "natto",
      "ocaus"
    ];
  }
  else if (path.includes("product")) {
    candidates = [
      "010302",
      "021001",
      "0212",
      "031507",
      "115402",
      "14",
      "147102",
      "168427",
      "168443",
      "168534",
      "01010120",
      "01010599"
    ];
  }
  else if (path.includes("company")) {
    candidates = ["164", "1", "3", "2"];
  }
  return candidates[Math.floor(Math.random() * candidates.length)];
}

function checkForId(nextState, replace) {
  if (!nextState.params.id) {
    const reqestedUrl = nextState.location.pathname;

    const randId = genRandId(reqestedUrl);

    const nextUrl = reqestedUrl.slice(-1) === "/"
      ? `${reqestedUrl}${randId}`
      : `${reqestedUrl}/${randId}`;

    return replace({pathname: nextUrl});
  }
  else {
    // make sure it's legal
    return <NotFound/>;
  }
}

ReactDOM.render(
  <Provider store={store}>
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/country" component={Country} onEnter={checkForId}/>
      <Route path="/country/:countryWithId" component={CountryWithId}/>
      <Route path="/company" component={Company} onEnter={checkForId}/>
      <Route path="/company/:companyWithId" component={CompanyWithId}/>
      <Route path="/product" component={Product} onEnter={checkForId}/>
      <Route path="/product/:productWithId" component={ProductWithId}/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/settings" component={Settings}></Route>
      <Route path="/inbox" component={Inbox}></Route>
    </Route>
  </Router>
</Provider>, document.getElementById("component"));
