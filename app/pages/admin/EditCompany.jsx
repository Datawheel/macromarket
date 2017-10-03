import React from "react";
import {connect} from "react-redux";
import {browserHistory} from "react-router";
import {deleteCompany} from "../../actions/userActions";
import {authenticateAndFetchCompany} from "../../actions/companyActions";
import CountrySearch from "./CountrySearch";
import {fetchData} from "datawheel-canon";
import api, {url} from "../../api";
import {Intent, Position, ProgressBar, Toaster} from "@blueprintjs/core";
import "./Admin.css";
import "./Settings.css";
import "./EditCompany.css";

class EditCompany extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      newCompany: false,
      name: props.company.name || "",
      description: props.company.description || "",
      address: props.company.address || "",
      city: props.company.city || "",
      region: props.company.region || "",
      country_id: props.company.country_id,
      country: props.company.Country,
      companyEmail: props.company.company_email || "",
      phone_number: props.company.phone_number || "",
      website: props.company.website || "",
      coverImage: props.company.cover_image,
      profileImage: props.company.profile_image
    };
  }

  componentWillReceiveProps(nextProps) {
    // const {company: prevCompany} = this.props;
    const {company} = nextProps;
    console.log(company)
    // if (prevCompany.id !== company.id) {
    this.setState({
      name: company.name,
      description: company.description || "",
      address: company.address || "",
      city: company.city || "",
      region: company.region || "",
      country_id: company.country_id || "",
      country: company.Country,
      companyEmail: company.company_email || "",
      phone_number: company.phone_number || "",
      website: company.website || "",
      coverImage: company.cover_image,
      profileImage: company.profile_image,
      newCompany: false
    });
    // }
  }

  componentDidMount() {
    const {companyId} = this.props.params;
    this.setState({newCompany: companyId === "new"});
  }

  handleChange = e => {
    const value = e.target.type === "checkbox"
      ? e.target.checked
      : e.target.value;
    this.setState({
      [e.target.name]: value
    });
  };

  _validateEmail = email => (/[^\s@]+@[^\s@]+\.[^\s@]+/).test(email);

  _validateURL = url => {
    const res = url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    return Boolean(res);
  }

  validate = company => {
    const errorNames = [];
    if (company.name === "") {
      errorNames.push("name");
    }
    if (company.company_email && !this._validateEmail(company.company_email)) {
      errorNames.push("companyEmail");
    }
    if (company.website && !this._validateURL(company.website)) {
      errorNames.push("website");
    }
    if (errorNames.length) {
      this.setState({error: {names: errorNames}});
      const toast = Toaster.create({className: "company-error-toast", position: Position.TOP_CENTER});
      toast.show({message: "You have errors in your form.", intent: Intent.DANGER});
      return false;
    }
    else {
      this.setState({error: null});
      return true;
    }
  }

  saveCompany = () => {
    const {id} = this.props.company;
    const company = {
      name: this.state.name,
      description: this.state.description || null,
      address: this.state.address || null,
      city: this.state.city || null,
      region: this.state.region || null,
      country_id: this.state.country_id || null,
      company_email: this.state.companyEmail || null,
      phone_number: this.state.phone_number || null,
      website: this.state.website || null,
      profile_image: this.state.profileImage,
      cover_image: this.state.coverImage
    };
    if (this.validate(company)) {
      if (this.state.newCompany) {
        api.post("api/companies/", {...company}).then(companyResponse => {
          // const {id: newId} = companyResponse.data;
          this.setState({newCompany: false});
          const toast = Toaster.create({className: "company-saved-toast", position: Position.TOP_CENTER});
          toast.show({message: "New company created.", intent: Intent.SUCCESS});
          // browserHistory.push(`/settings/company/${newId}`);
          browserHistory.push("/settings/");
        });
      }
      else {
        api.put(`api/companies/${id}`, {...company}).then(() => {
          this.setState({newCompany: false});
          const toast = Toaster.create({className: "company-saved-toast", position: Position.TOP_CENTER});
          toast.show({message: "Company data saved.", intent: Intent.SUCCESS});
          browserHistory.push("/settings/");
        });
      }
    }
  }

  addImage = imgType => {
    return (<div className="pt-non-ideal-state">
      <div className="pt-non-ideal-state-visual pt-non-ideal-state-icon">
        <span className="pt-icon pt-icon-media"></span>
      </div>
      <h4 className="pt-non-ideal-state-title">No Image</h4>
      <div className="pt-non-ideal-state-description">
        <button className="pt-button pt-icon-plus pt-minimal" role="button"onClick={() => {this[imgType].click()}}>Click here to upload an image.</button>
      </div>
    </div>);
  }

  renderProgress = amount => {
    return {
      className: "tests",
      iconName: "cloud-upload",
      message: (
        <ProgressBar
          className={amount < 100 ? "" : "pt-no-stripes"}
          intent={amount < 100 ? Intent.PRIMARY : Intent.SUCCESS}
          value={amount / 100}
        />
      ),
      timeout: amount < 100 ? 0 : 2000
    };
  }

  removeImg = imgStateKey => {
    const imgType = imgStateKey.replace("Image", "");
    const {id: companyId} = this.props.company;
    const amount = 10;
    const toast = Toaster.create({className: "company-saved-toast", position: Position.TOP_CENTER});
    const key = toast.show(this.renderProgress(amount));
    const f = this.state[imgStateKey].replace("https://storage.googleapis.com/mm-company/", "");
    api.delete(`/api/companies/${companyId}/${imgType}?file=${f}`).then(imgResp => {
      toast.update(key, this.renderProgress(100));
      console.log("COMPLETED", imgResp.data);
      this.setState({[imgStateKey]: null});
    });
  }

  uploadImg = e => {
    const imgType = e.target.id.includes("profile") ? "profile" : "cover";
    const imgStateKey = `${imgType}Image`;
    const {id: companyId} = this.props.company;
    let amount = 10;
    const toast = Toaster.create({className: "company-saved-toast", position: Position.TOP_CENTER});
    const key = toast.show(this.renderProgress(amount));
    const config = {
      onUploadProgress: progressEvent => {
        console.log("progressEvent");
        amount = Math.round(progressEvent.loaded * 100 / progressEvent.total);
        console.log(progressEvent);
        console.log(amount);
        // toast.update("message", <ProgressBar className={amount < 100 ? "" : "pt-no-stripes"} intent={amount < 100 ? Intent.PRIMARY : Intent.SUCCESS} value={amount / 100} />);
        toast.update(key, this.renderProgress(amount));
        console.log("END progressEvent");
      },
      headers: {"Content-Type": "multipart/form-data"}
    };
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    api.post(`/api/companies/${companyId}/${imgType}`, formData, config).then(imgResp => {
      console.log("COMPLETED", imgResp.data);
      this.setState({[imgStateKey]: imgResp.data.file});
    });
  }

  selectCountry = country => {
    console.log("selected country:", country);
    this.setState({
      country_id: country.id
    });
  }

  render() {
    const {company, countries} = this.props;
    const {error, address, city, country, description, name, region,
      companyEmail, phone_number, website, coverImage, profileImage} = this.state;
    return (
      <div>

        <div
          className={error && error.names.includes("name")
            ? "pt-form-group pt-intent-danger"
            : "pt-form-group"}
        >
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

        <div className="pt-form-group">
          <label className="pt-label" htmlFor="example-form-group-input-a">
            <span className="pt-icon pt-icon-paragraph"></span> Description
          </label>
          <div className="pt-form-content">
            <textarea name="description" onChange={this.handleChange} value={description} className="pt-input pt-fill"></textarea>
          </div>
        </div>

        <div className="pt-form-group address">
          <label className="pt-label" htmlFor="example-form-group-input-a">
            <span className="pt-icon pt-icon-map-marker"></span> Address
          </label>

          <div className="pt-form-group pt-inline">
            <label className="pt-label" htmlFor="input-address-street">
              Street
            </label>
            <div className="pt-form-content">
              <div className="pt-input-group">
                <input id="input-address-street" name="address" onChange={this.handleChange} value={address} type="text" className="pt-input" placeholder="Street" />
              </div>
            </div>
          </div>
          <div className="pt-form-group pt-inline">
            <label className="pt-label" htmlFor="input-address-city">
              City
            </label>
            <div className="pt-form-content">
              <div className="pt-input-group">
                <input id="input-address-city" name="city" onChange={this.handleChange} value={city} type="text" className="pt-input" placeholder="City" />
              </div>
            </div>
          </div>
          <div className="pt-form-group pt-inline">
            <label className="pt-label" htmlFor="input-address-region">
              State/Province
            </label>
            <div className="pt-form-content">
              <div className="pt-input-group">
                <input id="input-address-region" name="region" onChange={this.handleChange} value={region} type="text" className="pt-input" placeholder="State / Provience / Region" />
              </div>
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

        <div className="pt-form-group contact-info">
          <label className="pt-label" htmlFor="example-form-group-input-a">
            <span className="pt-icon pt-icon-id-number"></span> Contact Info
          </label>

          <div className="pt-form-group pt-inline">
            <label className="pt-label" htmlFor="input-contact-name">
              Contact Name
            </label>
            <div className="pt-form-content">
              <div className="pt-input-group">
                <input id="input-contact-name" type="text" className="pt-input" placeholder="Contact Name" />
              </div>
            </div>
          </div>

          <div
            className={error && error.names.includes("companyEmail")
              ? "pt-form-group pt-inline pt-intent-danger"
              : "pt-form-group pt-inline"}
          >
            <label className="pt-label" htmlFor="input-contact-email">
              Email
            </label>
            <div className="pt-form-content">
              <div className={error && error.names.includes("companyEmail") ? "pt-input-group pt-intent-danger" : "pt-input-group"}>
                <input id="input-contact-email" name="companyEmail" onChange={this.handleChange} value={companyEmail} type="text" className="pt-input" placeholder="john@sample.com" />
              </div>
              {error && error.names.includes("companyEmail") ? <div className="pt-form-helper-text">Email formatted incorrectly.</div> : null}
            </div>
          </div>

          <div className="pt-form-group pt-inline">
            <label className="pt-label" htmlFor="input-contact-phone">
              Phone Number
            </label>
            <div className="pt-form-content">
              <div className="pt-input-group">
                <input id="input-contact-phone" name="phone_number" onChange={this.handleChange} value={phone_number} type="text" className="pt-input" />
              </div>
            </div>
          </div>

          <div
            className={error && error.names.includes("website")
              ? "pt-form-group pt-inline pt-intent-danger"
              : "pt-form-group pt-inline"}
          >
            <label className="pt-label" htmlFor="input-contact-website">
              Website
            </label>
            <div className="pt-form-content">
              <div className={error && error.names.includes("website") ? "pt-input-group pt-intent-danger" : "pt-input-group"}>
                <input id="input-contact-website" name="website" onChange={this.handleChange} value={website} type="text" className="pt-input" placeholder="http://sample.com" />
              </div>
              {error && error.names.includes("website") ? <div className="pt-form-helper-text">Website formatted incorrectly.</div> : null}
            </div>
          </div>
        </div>

        <div className="img-container">
          <header>
            <label className="pt-label" htmlFor="example-form-group-input-a">
              <span className="pt-icon pt-icon-media"></span> Profile Image
            </label>
            {profileImage
              ? <div className="pt-button-group pt-minimal">
                <button className="pt-button pt-icon-trash" tabIndex="0" role="button" onClick={this.removeImg.bind(null, "profileImage")}>Remove</button>
              </div>
              : null}
          </header>
          {profileImage
            ? <img src={profileImage} />
            : this.addImage("profileImgField")}
          <input ref={imgField => { this.profileImgField = imgField; }} onChange={this.uploadImg} type="file" name="image" accept=".jpg,.jpeg,.png" id="profile-img" />
        </div>

        <div className="img-container">
          <header>
            <label className="pt-label" htmlFor="example-form-group-input-a">
              <span className="pt-icon pt-icon-media"></span> Cover Image
            </label>
            {coverImage
              ? <div className="pt-button-group pt-minimal">
                <button className="pt-button pt-icon-trash" tabIndex="0" role="button" onClick={this.removeImg.bind(null, "coverImage")}>Remove</button>
              </div>
              : null}
          </header>
          {coverImage
            ? <img src={coverImage} />
            : this.addImage("coverImgField")}
          <input ref={imgField => { this.coverImgField = imgField; }} onChange={this.uploadImg} type="file" name="image" accept=".jpg,.jpeg,.png" id="cover-img" />
        </div>

        <div className="button-group">
          <button type="button" className="pt-button pt-intent-success pt-large" onClick={this.saveCompany}>
            Save
            <span className="pt-icon-standard pt-icon-arrow-right pt-align-right"></span>
          </button>
        </div>

      </div>
    );
  }
}

EditCompany.preneed = [
  fetchData("countries", `${url}/api/countries`, res => res),
  fetchData("company", `${url}/api/companies/<companySlug>`, res => res)
];

const mapDispatchToProps = dispatch => ({
  deleteCompany: id => {
    dispatch(deleteCompany(id));
  },
  authenticateAndFetchCompany: () => {
    dispatch(authenticateAndFetchCompany());
  }
});

const mapStateToProps = state => ({
  auth: state.auth,
  company: state.data.company,
  countries: state.data.countries,
  updatedUser: state.authentication.updatedUser,
  user: state.authentication.user,
  loading: state.authentication.loading,
  error: state.authentication.error
});

export default connect(mapStateToProps, mapDispatchToProps)(EditCompany);
