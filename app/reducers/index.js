import {combineReducers} from "redux";
import companyProfile from "./companyProfile";
import countryProfile from "./countryProfile";
import productProfile from "./productProfile";
import userProfile from "./userProfile";
import countries from "./countries";
import products from "./products";
import companies from "./companies";
import authentication from "./authentication";
import user from "./user";
import trades from "./trades";
import search from "./search";

const searchActive = (state = false, action) => {
  switch (action.type) {
    case "ACTIVATE_SEARCH":
      return action.data || !state;
    default:
      return state;
  }
};

// Root reducer
export default combineReducers({
  companyProfile,
  countryProfile,
  productProfile,
  countries,
  products,
  companies,
  userProfile,
  authentication,
  user,
  trades,
  search,
  searchActive
});
