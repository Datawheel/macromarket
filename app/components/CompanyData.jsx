import React from "react";
import Dropdown from "./DropDown.jsx";
import {connect} from "react-redux";
import {fetchCountries} from "../actions/countriesActions";
import "./Form.css";
import {browserHistory} from "react-router";
import Select from 'react-select';
import "../components/Dropdown.css";
import {uploadImage, deleteCompany} from "../actions/userActions";
import {countryInputChange, arrowRenderer, countryValueRenderer, countryOptionRenderer} from "../components/Dropdown";

class CompanyData extends React.Component {
  constructor(props) {
    super(props);

    if (this.props.company) {
      this.state = {
        company: this.props.company,
        imagesToUpload: {
          profile_image: null,
          cover_image: null
        },
        country: this.props.company.country,
        previewStyles: {
          profile_image: {
            backgroundImage: `url(${this.props.company.profile_image})`
          },
          cover_image: {
            backgroundImage: `url(${this.props.company.cover_image})`
          }
        },
        websiteError: null,
        nameError: null,
        addressError: null,
        cityError: null,
        regionError: null,
        phoneError: null
      };
    } else {
      this.state = {
        company: {
          importerExporter: false,
          transporter: false,
          name: "",
          address: "",
          city: "",
          region: "",
          phone_number: "",
          website: "",
          description: "",
          cover_image: "",
          profile_image: "",
          user_id: this.props.user.id
        },
        country: null,
        previewStyles: {
          profile_image: null,
          cover_image: null
        },
        imagesToUpload: {
          profile_image: null,
          cover_image: null
        },
        websiteError: null,
        nameError: null,
        addressError: null,
        cityError: null,
        regionError: null,
        phoneError: null
      };
    }
  }
  componentWillMount() {
    this.props.updateSave();
    this.props.fetchCountries();
  }

  validateWebsite = (url) => {
    var re = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;
    return re.test(url);
  }

  handleChange = e => {
    const value = e.target.type === "checkbox"
      ? e.target.checked
      : e.target.value;
    this.setState({
      company: {
        ...this.state.company,
        [e.target.name]: value
      }
    });
  }

  handleImageChange = e => {
    e.persist();
    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        previewStyles: {
          ...this.state.previewStyles,
          [e.target.name]: {
            backgroundImage: `url(${reader.result})`
          }
        }
      });
      this.setState({
        imagesToUpload: {
          ...this.state.imagesToUpload,
          [e.target.name]: file
        }
      });
    };
    reader.readAsDataURL(file);
  }

  selectDropDown = country => {
    this.setState({country: country.label});
  }

  addTrade = trade => {
    this.setState(state => {
      state.trades = state.trades.concat([trade]);
      return state;
    });
  }

  deleteTrade = trade => {
    this.setState(state => {
      state.tradesToDelete = state.tradesToDelete.concat([trade]);
      return state;
    });
  }

  saveCompany = () => {
    let company = this.state.company;
      this.setState({websiteError: null});
      this.setState({nameError: null});
      this.setState({addressError: null});
      this.setState({cityError: null});
      this.setState({regionError: null});
      this.setState({phoneError: null});
    if (!this.validateWebsite(this.state.company.website)) {
      this.setState({websiteError: "Must be fewer than 255 characters."});
    } else if (company.name.length > 255) {
      this.setState({nameError: "Must be fewer than 255 characters."});
    } else if (company.website.length > 255) {
      this.setState({websiteError: "Must be fewer than 255 characters."});
    } else if (company.address.length > 255) {
      this.setState({addressError: "Must be fewer than 255 characters."});
    } else if (company.city.length > 255) {
      this.setState({cityError: "Must be fewer than 255 characters."});
    } else if (company.region.length > 255) {
      this.setState({regionError: "Must be fewer than 255 characters."});
    } else if (company.phone_number.length > 255) {
      this.setState({phoneError: "Must be fewer than 255 characters."});
    } else {
      company.country = this.state.country;
      this.props.saveCompany(company, this.state.imagesToUpload);
    }
  }

  render() {
    const {loading, error, countries} = this.props;

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

    const dropDownCountries = [];
    countries.map(continent => {
      continent.values.map(country => {
        dropDownCountries.push({label: country.name});
      });
    });

    const {company, previewStyles} = this.state;
    return (
      <div className="section-wrapper company-data">
        {this.props.companySaved ?
        <div className="saved">Saved</div> : null}
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
              <input onChange={this.handleChange} value={company.name} name="name"/>
              <div className="error-wrapper">
                <p>{this.state.nameError}</p>
              </div>
            </div>
            <div className="input-wrapper">
              <label>Address</label>
              <input onChange={this.handleChange} value={company.address} name="address"/>
              <div className="error-wrapper">
                <p>
                  {this.state.addressError}</p>
              </div>
            </div>
            <div className="input-wrapper">
              <label>City</label>
              <input onChange={this.handleChange} value={company.city} name="city"/>
                <div className="error-wrapper">
                  <p>{this.state.cityError}</p>
                </div>
            </div>
            <div className="input-wrapper">
              <label>State/Provience/Region</label>
              <input onChange={this.handleChange} value={company.region} name="region"/>
                <div className="error-wrapper">
                  <p>{this.state.regionError}</p>
                </div>
            </div>
            <div className="input-wrapper">
              <label>Country</label>
              <Select onInputChange={countryInputChange} optionClassName={"dropdown-item"} arrowRenderer={arrowRenderer} clearable={false} name="form-field-name" value={{
                value: this.state.country,
                label: this.state.country
              }} options={dropDownCountries} onChange={this.selectDropDown}/>
            </div>
            <div className="input-wrapper">
              <label>Phone</label>
              <input onChange={this.handleChange} value={company.phone_number} name="phone_number"/>
                <div className="error-wrapper">
                  <p>{this.state.phoneError}</p>
                </div>
            </div>
            <div className="input-wrapper">
              <label>Website</label>
              <input onChange={this.handleChange} value={company.website} name="website"/>
                <div className="error-wrapper">
                  <p>{this.state.websiteError}</p>
                </div>
            </div>
          </div>
          <div className="col">
            <label>Description</label>
            <textarea rows="8" onChange={this.handleChange} value={company.description} name="description"/>
            <div className="profile-image-wrapper input-wrapper">
              <div className="image-preview-wrapper">
                {previewStyles.profile_image
                  ? <div className="image-preview" style={previewStyles.profile_image}></div>
                  : null}
              </div>
              <div className="image-upload">
                <p>Upload a photo</p>
                <input name="profile_image" onChange={this.handleImageChange} type="file"/>
              </div>
            </div>
            <div className="cover-image-wrapper input-wrapper">
              <div className="image-preview-wrapper">
                {previewStyles.cover_image
                  ? <div className="image-preview" style={previewStyles.cover_image}></div>
                  : null}
              </div>
              <div className="image-upload">
                <p>Upload a photo</p>
                <input name="cover_image" onChange={this.handleImageChange} type="file"/>
              </div>
            </div>

            <div className="button-wrapper">
              <button className=" button button-next" onClick={this.saveCompany}>Save
              </button>
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
    saveCompany: (company, imagesToUpload) => {
      dispatch(uploadImage(company, imagesToUpload));
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
