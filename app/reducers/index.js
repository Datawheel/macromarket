import {combineReducers} from "redux";
import companyProfile from "./companyProfile";
import countryProfile from "./countryProfile";
import productProfile from "./productProfile";
import countries from "./countries";
import products from "./products";
import companies from "./companies";

// Root reducer
export default combineReducers({
    companyProfile,
    countryProfile,
    productProfile,
    countries,
    products,
    companies
});
