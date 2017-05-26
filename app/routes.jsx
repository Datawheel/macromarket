import React from "react";
import {Route, IndexRoute} from "react-router";

import App from "components/App";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Country from "pages/Country";
import CountryWithId from "pages/CountryWithId";
import Company from "pages/Company";
import CompanyWithId from "pages/CompanyWithId";
import Product from "pages/Product";
import ProductWithId from "pages/ProductWithId";
import Login from "pages/Login";
import Signup from "pages/Signup";
import Profile from "pages/Profile";
import Settings from "pages/Settings";
import Inbox from "pages/Inbox";

function genRandId(path) {
  let candidates;
  if (path.includes("country")) {
    candidates = [
      "afcod",
      "afegy",
      "astjk",
      "saper",
      "saarg",
      "nagtm",
      "eusun",
      "eultu",
      "euksv"
    ];

  } else if (path.includes("product")) {
    candidates = [
      "01010111",
      "01041000",
      "02070690",
      "02071332",
      "02080710",
      "16848350",
      "06284210"
    ];
  } else if (path.includes("company")) {
    candidates = ["14", "1", "3", "2", "34", "12", "55"];
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
  } else {
    // make sure it's legal
    return <NotFound/>;
  }
}

export default function RouteCreate() {
  return (
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
  );
}
