import React from "react";
import {Route, IndexRoute} from "react-router";
import App from "components/App";
import Home from "pages/Home";
import HomeSimple from "pages/HomeSimple";
import NotFound from "pages/NotFound";
import CountryWithId from "pages/CountryWithId";
import CompanyWithId from "pages/CompanyWithId";
import ProductWithId from "pages/ProductWithId";
import Login from "pages/admin/Login";
import Signup from "pages/admin/Signup";
import Reset from "pages/admin/Reset";
import Settings from "pages/admin/Settings";
import SettingsSummary from "pages/admin/SettingsSummary";
import CompanySummary from "pages/admin/CompanySummary";
import EditCompany from "pages/admin/EditCompany";
import EditProducts from "pages/admin/EditProducts";
import ChangePw from "pages/admin/ChangePw";
import Inbox from "pages/Inbox";

function genRandId(path) {
  let candidates;
  if (path.includes("country")) {
    candidates = [
      "saper",
      "napri",
      "sapry",
      "ocnzl",
      "afken",
      "asbgd",
      "afzaf",
      "aschn",
      "asvnm",
      "eudeu",
      "eufra",
      "nacri",
      "namex",
      "nausa",
      "saarg",
      "sabra",
      "sachl",
      "euisl"
    ];

  }
  else if (path.includes("product")) {
    candidates = [
      "010104",
      "14710410",
      "11540232",
      "15730210",
      "115512",
      "11570292",
      "115903",
      "02080540",
      "041601",
      "042306",
      "020804",
      "01010420",
      "01020649",
      "01020750",
      "01030614",
      "010406",
      "02070960",
      "02071220",
      "020713",
      "15820220",
      "15830120",
      "15830610",
      "02071332",
      "02080710",
      "15731520",
      "157414",
      "16848350",
      "06284210",
      "16842541",
      "168427",
      "18902111",
      "14710420",
      "168425"
    ];
  }
  else if (path.includes("company")) {
    candidates = [
      "14",
      "1",
      "3",
      "2",
      "34",
      "12",
      "55"
    ];
  }
  return candidates[Math.floor(Math.random() * candidates.length)];
}

function checkForId(nextState, replace) {
  if (!nextState.params.countryWithId && !nextState.params.productWithId && !nextState.params.companyWithId) {
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

export default function RouteCreate() {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={HomeSimple}/>

      <Route path="/country(/:countryWithId)" onEnter={checkForId} component={CountryWithId}/>
      <Route path="/company(/:companyWithId)" onEnter={checkForId} component={CompanyWithId}/>
      <Route path="/product(/:productWithId)" onEnter={checkForId} component={ProductWithId}/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/>
      <Route path="reset" component={Reset} />
      <Route path="settings" component={Settings}>
        <IndexRoute component={SettingsSummary}/>
        <Route path="change-password" component={ChangePw}></Route>
        <Route path="company/:companyId" component={CompanySummary}>
          <IndexRoute component={EditCompany}/>
          <Route path="products" component={EditProducts}></Route>
        </Route>
      </Route>
      <Route path="/inbox" component={Inbox}></Route>
      <Route path="*" exact={true} component={NotFound} />
    </Route>
  );
}
