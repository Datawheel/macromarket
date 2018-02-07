import React from "react";
import {connect} from "react-redux";
import {Dialog, Intent, Position, ProgressBar, Toaster} from "@blueprintjs/core";
import {Link, browserHistory} from "react-router";
import CountrySearch from "../pages/admin/CountrySearch";
import {fetchUnNestedCountries} from "../actions/countriesActions";
import api, {url} from "../api";
import {setOnboardingCompany, updateSlideOverlay} from "../actions/onboardingActions";

class OnboardingCompany extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      name: "",
      country_id: "",
      country: "",
      isSaving: false
    };
  }

  componentDidMount() {
    this.props.fetchUnNestedCountries();
  }

  handleChange = e => {
    const value = e.target.type === "checkbox"
      ? e.target.checked
      : e.target.value;
    this.setState({
      [e.target.name]: value
    });
  };

  selectCountry = country => {
    this.setState({
      country_id: country.id
    });
  };

  validate = company => {
    const errorNames = [];
    if (!company.name || company.name === "") {
      errorNames.push("name");
    }
    if (errorNames.length) {
      this.setState({error: {names: errorNames}, isSaving: false});
      const toast = Toaster.create({className: "company-error-toast", position: Position.TOP_CENTER});
      toast.show({message: "You have errors in your form.", intent: Intent.DANGER});
      return false;
    }
    else {
      this.setState({error: null});
      return true;
    }
  };

  saveCompany = () => {
    this.setState({isSaving: true});
    const company = {
      name: this.state.name,
      country_id: this.state.country_id || null
    };
    if (this.validate(company)) {
      const toast = Toaster.create({className: "company-saved-toast", position: Position.TOP_CENTER});
      toast.show({message: "Saving company data...", intent: Intent.PRIMARY});
      api.post("api/companies/", {...company}).then(companyResponse => {
        this.setState({isSaving: false});
        const companyId = companyResponse.data.id;
        this.props.setOnboardingCompany(companyId);
        this.props.updateSlideOverlay(2);
      })
        .catch(error => {
          console.log(error);
        });
    }
  };

  render() {
    const {countries} = this.props;
    const {isSaving, error, country, name} = this.state;

    return (
      <div className="slide">
        <h1>List Your Company</h1>
        <div className="onboarding-company-form">
          <div className={error && error.names.includes("name") ? "pt-form-group pt-intent-danger" : "pt-form-group"}>
            <label className="pt-label" htmlFor="input-company-name">
              <span className="pt-icon pt-icon-edit"></span> Company Name <span className="pt-text-muted">(required)</span>
            </label>
            <div className="pt-form-content">
              <div className={error && error.names.includes("name") ? "pt-input-group pt-intent-danger" : "pt-input-group"}>
                <input name="name" onChange={this.handleChange} id="input-company-name" value={name} className="pt-input" placeholder="My Company" type="text" dir="auto" />
              </div>
              {error && error.names.includes("name") ? <div className="pt-form-helper-text">A company name is required.</div> : null}
            </div>
          </div>
          <div className="pt-form-group pt-inline">
            <label className="pt-label" htmlFor="input-address-country">
                    Country
            </label>
            <div className="pt-form-content">
              <div className="pt-input-group">
                { countries
                  ? <CountrySearch country={country} countries={countries} selectCountry={this.selectCountry} />
                  : <span>Loading country list...</span>
                }
              </div>
            </div>
          </div>
        </div>
        <button type="button" className={isSaving ? "pt-button pt-intent-success pt-large pt-disabled" : "pt-button pt-intent-success pt-large"} onClick={!isSaving ? this.saveCompany : null}>
              Save
          <span className="pt-icon-standard pt-icon-arrow-right pt-align-right"></span>
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  countries: state.countries.countries,
  user: state.auth.user
});

const mapDispatchToProps = dispatch => ({
  fetchUnNestedCountries: () => {
    dispatch(fetchUnNestedCountries());
  },
  setOnboardingCompany: companyId => {
    dispatch(setOnboardingCompany(companyId));
  },
  updateSlideOverlay: slideNumber => {
    dispatch(updateSlideOverlay(slideNumber));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(OnboardingCompany);
