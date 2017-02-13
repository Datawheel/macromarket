import {
  combineReducers
} from "redux";
import companyProfile from "./companyProfile";
import countryProfile from "./countryProfile";
import productProfile from "./productProfile";
import userProfile from "./userProfile";
import countries from "./countries";
import products from "./products";
import companies from "./companies";
import authentication from "./authentication.js";

// Root reducer
export default combineReducers({
  companyProfile,
  countryProfile,
  productProfile,
  countries,
  products,
  companies,
  userProfile,
  authentication
});
