import React from "react";
import {connect} from "react-redux";
import {Dialog, Intent, Position, ProgressBar, Toaster} from "@blueprintjs/core";
import {Link, browserHistory} from "react-router";
import CountrySearch from "../pages/admin/CountrySearch";
import {fetchCountries} from "../actions/countriesActions";
import api, {url} from "../api";
import {setOnboardingCompany, updateSlideOverlay} from "../actions/onboardingActions";
import {Select} from "@blueprintjs/labs";
import {MenuItem, Classes} from "@blueprintjs/core";

async function getCompaniesByUser(userId) {
  const companiesResponse = await api.get(`api/companies/byUser/${userId}`);
  return companiesResponse.data;
}

class OnboardingCompany extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      name: "",
      country_id: "",
      country: "",
      labelUp: [],
      addNewCompany: false,
      isSaving: false,
      companies: [],
<<<<<<< HEAD
      company: ""
=======
      company: null

>>>>>>> styled select dropdown
    };
  }

  async componentDidMount() {
    this.props.fetchCountries();

    const {user} = this.props;
    if (user && user.id) {
      const companies = await getCompaniesByUser(user.id);
      this.setState({companies, company: companies && companies.length && companies[0]});
    }
  }

  async componentWillReceiveProps(nextProps) {
    if (nextProps.user && nextProps.user.id && nextProps.user !== this.props.user) {
      const {user} = nextProps;
      const companies = await getCompaniesByUser(user.id);
      this.setState({companies, company: companies && companies.length && companies[0]});
    }
  }

  handleChange = e => {
    const value = e.target.type === "checkbox"
      ? e.target.checked
      : e.target.value;
    this.setState({
      [e.target.name]: value,
      labelUp: this.state.labelUp.concat([e.target.name])
    });
  };

  selectCountry = country => {
    this.setState({
      country_id: country.id
    });
  };
  switchToNewCompany = () => {
    this.setState({addNewCompany: !this.state.addNewCompany});
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
        const companySlug = companyResponse.data.slug;
        this.props.setOnboardingCompany(companySlug);
        this.props.updateSlideOverlay(2);
      })
        .catch(error => {
          console.log(error);
        });
    }
  };

  selectCompany = () => {
    this.setState({isSaving: true});
    this.props.setOnboardingCompany(this.state.company.slug);
    this.props.updateSlideOverlay(2);
  };

  handleCompanySelect = company => {
    this.setState({company});
  }

  renderCompanies = ({handleClick, isActive, item: company}) => {
    console.log(company, "herer");
    return (
      <MenuItem
        className={isActive ? Classes.ACTIVE : ""}
        key={company.name}
        onClick={handleClick}
        text={company.name}
        shouldDismissPopover={false}
      />
    );
  }


  render() {
    const {countries} = this.props;
    const {isSaving, error, country, name, companies} = this.state;

    const companiesOptions = companies.map(company =>
      <option key={company.id} value={company.slug}>{company.name}</option>
    );

    return (

      <div className="slide-inner company-onboarding">
        {companies.length && !this.state.addNewCompany ?
          <div className="existing-company-container">
            <h2>Choose an Existing Company</h2>
            <p className="description-text">
              Select one of your companies to be listed under product.
            </p>
            <Select filterable={false} className="existing-company-select" onItemSelect={this.handleCompanySelect} itemRenderer={this.renderCompanies} items={companies}>
              <div className="labelUp input-wrapper">
                <label>Company</label>
                <input value={this.state.company && this.state.company.name }/>
              </div>
            </Select>


            <div onClick={this.switchToNewCompany}>Create a New Company</div>
<<<<<<< HEAD
            <button type="button" className="button-right" onClick={!isSaving ? this.selectCompany : null}>
=======
            <button className="onboarding-button" type="button" className="onboarding-button button-right" onClick={!isSaving ? this.selectCompany : null}>
>>>>>>> styled select dropdown
                Continue
            </button>

          </div>
          : <div className="create-company-container">
            <h2>Create a Company</h2>
            <p className="description-text">
            This information will be listed on your company’s profile. You can update this information and add more  later!
            </p>
            <div className="onboarding-company-form">
              <div className={this.state.labelUp.includes("name") ? "input-wrapper labelUp" : "input-wrapper" }>
                <label  htmlFor="input-company-name">
                  Company Name *
                </label>
                <div>
                  <div className={error && error.names.includes("name") ? "pt-input-group pt-intent-danger" : ""}>
                    <input name="name" onFocus={this.handleChange} onChange={this.handleChange} id="input-company-name" value={name} type="text" dir="auto" />
                  </div>
                  {error && error.names.includes("name") ? <div className="pt-form-helper-text">A company name is required.</div> : null}
                </div>
              </div>
              <div className="labelUp input-wrapper">
                <label htmlFor="input-address-country">
                  Country Of Origin
                </label>
                <div>
                  <div>
                    { countries
                      ? <CountrySearch country={country} countries={countries} selectCountry={this.selectCountry} />
                      : <span>Loading country list...</span>
                    }
                  </div>
                </div>
              </div>
            </div>
            {companies.length && <div  onClick={this.switchToNewCompany}> Select an existing Company</div> }
            <button className="onboarding-button button-right" type="button" onClick={!isSaving ? this.saveCompany : null}>
                  Create Company
            </button>
          </div>}


      </div>
    );
  }
}

const mapStateToProps = state => ({
  countries: state.countries.unnestedCountries,
  user: state.auth.user
});

const mapDispatchToProps = dispatch => ({
    fetchCountries: () => {
    dispatch(fetchCountries());
  },
  setOnboardingCompany: companyId => {
    dispatch(setOnboardingCompany(companyId));
  },
  updateSlideOverlay: slideNumber => {
    dispatch(updateSlideOverlay(slideNumber));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(OnboardingCompany);
