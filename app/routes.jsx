import React from "react";
import {Route, IndexRoute} from "react-router";

import App from "components/App";
import Home from "pages/Home";
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

export default function RouteCreate() {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
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
  );
}
