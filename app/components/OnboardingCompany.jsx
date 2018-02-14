import React from "react";
import {connect} from "react-redux";
import {Intent, Position, Toaster} from "@blueprintjs/core";
import CountrySearch from "../pages/admin/CountrySearch";
import {fetchCountries} from "../actions/countriesActions";
import api from "../api";
import {setOnboardingCompany, updateSlideOverlay} from "../actions/onboardingActions";
import {Select} from "@blueprintjs/labs";
import {MenuItem, Classes} from "@blueprintjs/core";
import "./OnboardingCompany.css";


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
      company: null

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

  selectCompany = () => {
    this.setState({isSaving: true});
    this.props.setOnboardingCompany(this.state.company.slug);
    this.props.updateSlideOverlay(2);
  };

  toggleNewCompany = () => {
    if (this.state.addNewCompany) {
      const {user} = this.props;
      api.get(`api/companies/byUser/${user.id}`).then(companiesResponse => {
        const companies = companiesResponse.data;
        this.setState({companies, company: companies && companies.length && companies[0]});
      });
    }
    this.setState({name: "", labelUp: [], isSaving: false, addNewCompany: !this.state.addNewCompany});
  };

  validate = company => {
    const errorNames = [];
    if (!company.name || company.name === "") {
      errorNames.push("name");
    }
    if (errorNames.length) {
      this.setState({error: {names: errorNames}, isSaving: false});
      const toast = Toaster.create({className: "company-error-toast", position: Position.TOP_CENTER});
      toast.show({message: "A Company Name is required.", intent: Intent.DANGER});
      return false;
    }
    else {
      this.setState({error: null});
      return true;
    }
  };

  saveCompany = () => {
    const company = {
      name: this.state.name,
      country_id: this.state.country_id || null
    };

    this.setState({isSaving: true});
    if (this.validate(company)) {
      const toast = Toaster.create({className: "company-saved-toast", position: Position.TOP_CENTER});
      toast.show({message: "Saving company data...", intent: Intent.PRIMARY});
      api.post("api/companies/", {...company}).then(companyResponse => {
        this.setState({isSaving: false});
        const companySlug = companyResponse.data.slug;
        this.props.setOnboardingCompany(companySlug);
        this.toggleNewCompany();
        this.props.updateSlideOverlay(2);
      })
        .catch(error => {
          console.log(error);
        });
    }

  };


  handleCompanySelect = company => {
    this.setState({company});
  }

  renderCompanies = ({handleClick, isActive, item: company}) => {
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
    return (
      <div className="slide-inner company-onboarding">
        <div className={companies.length && !this.state.addNewCompany ? "fade-in-up existing-company-container" :  "fade-out hide"}>
          <h2>Choose an Existing Company</h2>
          <p className="description-text">
            Select one of your companies to be listed under product.
          </p>
          <Select filterable={false} value={this.state.company} className="existing-company-select" onItemSelect={this.handleCompanySelect} itemRenderer={this.renderCompanies} items={companies}>
            <div className="labelUp input-wrapper">
              <label>Company</label>
              <input value={this.state.company ? this.state.company.name : ""}/>
              <span className="pt-icon-standard pt-icon-caret-down pt-align-right"></span>
            </div>
          </Select>
          <div className="description-text link-text" onClick={this.toggleNewCompany}>Create a New Company</div>
          <button type="button" className="onboarding-button button-right" onClick={this.selectCompany}>
              Select Company
          </button>
        </div>
        <div className={!companies.length || this.state.addNewCompany ? "fade-in-up  create-company-container" : "fade-out hide"}>
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
              <span className="pt-icon-standard pt-icon-caret-down pt-align-right"></span>
            </div>
          </div>
          {companies.length > 0 ? <div className=" link-text description-text" onClick={this.toggleNewCompany}> Select an existing Company</div> : null }
          <button className="onboarding-button button-right" type="button" onClick={!isSaving ? this.saveCompany : null}>
                Create Company
          </button>
        </div>
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
