import React from "react";
import {connect} from "react-redux";
import {fetchCountries} from "../actions/countriesActions";
import "./Form.css";
import {Link} from "react-router";
import {browserHistory} from "react-router";
import Dropdown from "../components/Dropdown";
import "../components/Dropdown.css";
import {uploadImage, saveCompany2, deleteCompany} from "../actions/userActions";
import {countryInputChange, arrowRenderer, countryValueRenderer, countryOptionRenderer} from "../components/Dropdown";

class CompanyData extends React.Component {
  constructor(props) {
    super(props);
    const defaultCompany = {
      profile_image: null,
      cover_image: null,
      name: "",
      address: "",
      city: "",
      region: "",
      phone_number: "",
      company_email: "",
      website: "",
      description: "",
      user_id: this.props.user.id
    }
    let country = {
      value: null,
      label: null
    };
    if (this.props.company) {
      if (this.props.company.Country) {
        country = {
          value: this.props.company.Country.id,
          label: this.props.company.Country.name
        };
      }
    }

    let profileImage = null;
    if (this.props.company) {
      if (this.props.company.profile_image) {
        profileImage = `url(${this.props.company.profile_image})`;
      }
    }

    let coverImage = null;
    if (this.props.company) {
      if (this.props.company.cover_image) {
        coverImage = `url(${this.props.company.cover_image})`;
      }
    }

    this.state = Object.assign(this.props.company || defaultCompany, {
      country,
      profileImage,
      coverImage,
      websiteError: null,
      nameError: null,
      addressError: null,
      cityError: null,
      regionError: null,
      phoneError: null,
      emailError: null
    });
  }

  componentWillMount() {
    this.props.updateSave();
    this.props.fetchCountries();
  }

  validateWebsite(url) {
    var re = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;
    return re.test(url);
  }

  handleChange(e) {
    const value = e.target.type === "checkbox"
      ? e.target.checked
      : e.target.value;
    this.setState({
      [e.target.name]: value
    });
  }

  handleImageChange(e) {
    e.persist();
    const reader = new FileReader();
    const file = e.target.files[0];
    const fileName = e.target.name === "profileImage"
      ? "profile_image"
      : "cover_image";

    reader.onloadend = () => {
      this.setState({
        [e.target.name]: `url(${reader.result})`,
        [fileName]: file
      });
    };
    reader.readAsDataURL(file);
  }

  selectDropDown = country => {
    this.setState({
      country: {
        value: country.value,
        label: country.label
      }
    });
  }

  saveCompany = () => {
    let company = {
      id: this.state.id,
      name: this.state.name,
      address: this.state.address,
      city: this.state.city,
      region: this.state.name,
      phone_number: this.state.phone_number,
      company_email: this.state.company_email,
      website: this.state.website,
      description: this.state.description,
      user_id: this.props.user.id
    };
    company.country_id = this.state.country.value;
    this.setState({websiteError: null});
    this.setState({nameError: null});
    this.setState({addressError: null});
    this.setState({cityError: null});
    this.setState({regionError: null});
    this.setState({phoneError: null});
    if (this.state.name.length === 0) {
      this.setState({nameError: "Company name is required."});
    } else if (!this.validateWebsite(this.state.website) && this.state.website.length !== 0) {
      this.setState({websiteError: "Must enter a valid website."});
    } else if (this.state.name.length > 255) {
      this.setState({nameError: "Must be fewer than 255 characters."});
    } else if (this.state.website.length > 255) {
      this.setState({websiteError: "Must be fewer than 255 characters."});
    } else if (this.state.address.length > 255) {
      this.setState({addressError: "Must be fewer than 255 characters."});
    } else if (this.state.city.length > 255) {
      this.setState({cityError: "Must be fewer than 255 characters."});
    } else if (this.state.region.length > 255) {
      this.setState({regionError: "Must be fewer than 255 characters."});
    } else if (this.state.phone_number.length > 255) {
      this.setState({phoneError: "Must be fewer than 255 characters."});
    } else if (this.state.company_email.length > 255) {
      this.setState({emailError: "Must be fewer than 255 characters."});
    } else {
      company.country = this.state.country;

      const profile_image = this.state.profile_image
        ? typeof this.state.profile_image.name == 'string'
          ? this.state.profile_image
          : null
        : null;
      const cover_image = this.state.cover_image
        ? typeof this.state.cover_image.name == 'string'
          ? this.state.cover_image
          : null
        : null;
      this.props.saveCompany(company, profile_image, cover_image);
      window.scrollTo(0, 0);
    }
  }

  render() {
    const {loading, error, countries, companyLoading} = this.props;
    if (error) {
      return (
        <div className="detailed-content-wrapper">
          <h2>Error</h2>
          <p>Please refresh the page.</p>
        </div>
      );
    }

    if (loading || !countries) {
      return (
        <div className="detailed-content-wrapper">
          <div>loading...</div>
        </div>
      );
    }

    if (companyLoading) {
      return (
        <div className="detailed-content-wrapper loading-wrapper">
          <div>loading...</div>
        </div>
      )
    }

    if (this.props.companySaved) {

      return (
        <div className="register-company">
          <img src="/images/icons/icon-registration.svg"></img>
          <p>Your Company was Saved Sucessfully!</p>
          <Link to={`/company/${this.props.companySaved}`}>
            <button className=" button button-next">View Listing</button>
          </Link>
        </div>
      )
    }

    const dropDownCountries = [];
    countries.map(continent => {
      let first = true;
      continent.values.map(country => {
        dropDownCountries.push({continent: continent.key, value: country.id, label: country.name, first});
        first = false;
      });
    });

    const {
      name,
      address,
      city,
      region,
      phone_number,
      website,
      company_email,
      description,
      profileImage,
      coverImage
    } = this.state;

    return (
      <div className="section-wrapper company-data">
        {this.props.company
          ? <div>
              <b>Edit Your Company</b>
            </div>
          : <div>
            <b>Register a Company</b>
          </div>}
        <div className="content-wrapper">
          <div className="col">
            <div className="input-wrapper">
              <label>Company Name</label>
              <input onChange={this.handleChange.bind(this)} value={name} name="name"/>
              <div className="error-wrapper">
                <p>{this.state.nameError}</p>
              </div>
            </div>
            <div className="input-wrapper">
              <label>Address</label>
              <input onChange={this.handleChange.bind(this)} value={address} name="address"/>
              <div className="error-wrapper">
                <p>
                  {this.state.addressError}</p>
              </div>
            </div>
            <div className="input-wrapper">
              <label>City</label>
              <input onChange={this.handleChange.bind(this)} value={city} name="city"/>
              <div className="error-wrapper">
                <p>{this.state.cityError}</p>
              </div>
            </div>
            <div className="input-wrapper">
              <label>State/Provience/Region</label>
              <input onChange={this.handleChange.bind(this)} value={region} name="region"/>
              <div className="error-wrapper">
                <p>{this.state.regionError}</p>
              </div>
            </div>
            <div className="input-wrapper">
              <label>Country</label>
              <Dropdown type="countries" select={this.selectDropDown} value={this.state.country.value} options={dropDownCountries}></Dropdown>
            </div>
            <div className="input-wrapper">
              <label>Phone</label>
              <input onChange={this.handleChange.bind(this)} value={phone_number} name="phone_number"/>
              <div className="error-wrapper">
                <p>{this.state.phoneError}</p>
              </div>
            </div>
            <div className="input-wrapper">
              <label>Company Email</label>
              <input onChange={this.handleChange.bind(this)} value={company_email} name="company_email"/>
              <div className="error-wrapper">
                <p>{this.state.emailError}</p>
              </div>
            </div>
            <div className="input-wrapper">
              <label>Website</label>
              <input onChange={this.handleChange.bind(this)} value={website} name="website"/>
              <div className="error-wrapper">
                <p>{this.state.websiteError}</p>
              </div>
            </div>
          </div>
          <div className="col">
            <label>Description</label>
            <textarea rows="8" onChange={this.handleChange.bind(this)} value={description} name="description"/>
            <div className="input-wrapper">
              <label>Profile Image</label>
              <div className="profile-image-wrapper">
                <div className="image-preview-wrapper">
                  {profileImage
                    ? <div className="image-preview" style={{
                        backgroundImage: profileImage
                      }}></div>
                    : null}
                </div>
                <div className="image-upload">
                  <p>Upload a photo</p>
                  <input name="profileImage" onChange={this.handleImageChange.bind(this)} type="file"/>
                </div>
              </div>
            </div>
            <div className="input-wrapper">
              <label>Cover Image</label>
              <div className="cover-image-wrapper ">
                <div className="image-preview-wrapper">
                  {coverImage
                    ? <div className="image-preview" style={{
                        backgroundImage: coverImage
                      }}></div>
                    : null}
                </div>
                <div className="image-upload">

                  <p>Upload a photo</p>
                  <input name="coverImage" onChange={this.handleImageChange.bind(this)} type="file"/>
                </div>
              </div>
            </div>

            <div className="button-wrapper">
              <button className=" button button-next" onClick={this.saveCompany}>Save
              </button>
              {this.props.companySaved
                ? <div className="error-wrapper">
                    <p>Company Saved Sucessfully!</p>
                  </div>
                : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCountries: () => {
      dispatch(fetchCountries());
    },
    saveCompany: (company, profileImage, coverImage) => {
      dispatch(saveCompany2(company, profileImage, coverImage));
    },
    updateSave: () => {
      dispatch({type: "SAVE_FULFILLED", data: null});
    }
  };
};

const mapStateToProps = state => {
  return {
    company: state.companyProfile.authCompany,
    user: state.authentication.user,
    companyLoading: state.user.loading,
    companySaved: state.user.company,
    deleted: state.companyProfile.deleted,
    countries: state.countries.countries,
    loading: state.countries.loading,
    error: state.countries.error || null
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyData);
