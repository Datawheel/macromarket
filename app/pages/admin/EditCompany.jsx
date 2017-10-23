import React from "react";
import {connect} from "react-redux";
import {Link, browserHistory} from "react-router";
import {deleteCompany} from "../../actions/userActions";
import CountrySearch from "./CountrySearch";
import {fetchData} from "datawheel-canon";
import api, {url} from "../../api";
import {Button, Dialog, Intent, Position, ProgressBar, Toaster} from "@blueprintjs/core";
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
      contactName: props.company.contact_name || "",
      coverImage: props.company.cover_image,
      profileImage: props.company.profile_image,
      coverImagePreview: null,
      profileImagePreview: null,
      confirmDeleteOpen: false,
      isSaving: false
    };
  }

  componentWillReceiveProps(nextProps) {
    // const {company: prevCompany} = this.props;
    const {company} = nextProps;
    // if (prevCompany.id !== company.id) {
    this.setState({
      name: company.name || "",
      description: company.description || "",
      address: company.address || "",
      city: company.city || "",
      region: company.region || "",
      country_id: company.country_id || "",
      country: company.Country,
      companyEmail: company.company_email || "",
      phone_number: company.phone_number || "",
      website: company.website || "",
      contactName: company.contact_name || "",
      coverImage: company.cover_image,
      profileImage: company.profile_image,
      newCompany: company.id ? false : true,
      coverImagePreview: null,
      profileImagePreview: null
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
    if (!company.name || company.name === "") {
      errorNames.push("name");
    }
    if (company.company_email && !this._validateEmail(company.company_email)) {
      errorNames.push("companyEmail");
    }
    if (company.website && !this._validateURL(company.website)) {
      errorNames.push("website");
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
  }

  saveCompany = () => {
    this.setState({isSaving: true});
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
      contact_name: this.state.contactName || null,
      profile_image: this.state.profileImage,
      cover_image: this.state.coverImage
    };
    if (this.validate(company)) {
      const toast = Toaster.create({className: "company-saved-toast", position: Position.TOP_CENTER});
      toast.show({message: "Saving company data...", intent: Intent.PRIMARY});
      const imgUploadInputs = [this.profileImgField, this.coverImgField];
      if (this.state.newCompany) {
        api.post("api/companies/", {...company}).then(companyResponse => {
          const {id: newCompanyId} = companyResponse.data;
          const imgUploadPromises = imgUploadInputs.filter(uploadInput => uploadInput.files.length).map(uploadInput => {
            const imgType = uploadInput.id.includes("profile") ? "profile" : "cover";
            const config = {headers: {"Content-Type": "multipart/form-data"}};
            const formData = new FormData();
            formData.append("image", uploadInput.files[0]);
            return api.post(`/api/companies/${newCompanyId}/${imgType}`, formData, config);
          });
          Promise.all(imgUploadPromises).then(imgUploadResponses => {
            // console.log("imgUploadResponses!", imgUploadResponses);
            this.setState({newCompany: false, isSaving: false});
            const toast = Toaster.create({className: "company-saved-toast", position: Position.TOP_CENTER});
            toast.show({message: "New company created.", intent: Intent.SUCCESS});
            // browserHistory.push(`/settings/company/${newCompanyId}`);
            browserHistory.push("/settings/");
          });
        });
      }
      else {
        api.put(`api/companies/${id}`, {...company}).then(() => {
          const imgUploadPromises = imgUploadInputs.filter(uploadInput => uploadInput.files.length).map(uploadInput => {
            const imgType = uploadInput.id.includes("profile") ? "profile" : "cover";
            const config = {headers: {"Content-Type": "multipart/form-data"}};
            const formData = new FormData();
            formData.append("image", uploadInput.files[0]);
            return api.post(`/api/companies/${id}/${imgType}`, formData, config);
          });
          Promise.all(imgUploadPromises).then(imgUploadResponses => {
            this.setState({newCompany: false, isSaving: false});
            const toast = Toaster.create({className: "company-saved-toast", position: Position.TOP_CENTER});
            toast.show({message: "Company data saved.", intent: Intent.SUCCESS});
            browserHistory.push("/settings/");
          });
        });
      }
    }
  }

  toggleConfirmDelete = () => {
    this.setState({confirmDeleteOpen: !this.state.confirmDeleteOpen});
  }

  deleteCompany = () => {
    const {id} = this.props.company;
    console.log("deleteing compnay id ", id);

    api.delete(`/api/companies/${id}/`).then(() => {
      const toast = Toaster.create({className: "company-saved-toast", position: Position.TOP_CENTER});
      toast.show({message: "Company deleted.", intent: Intent.SUCCESS});
      browserHistory.push("/settings/");
    });
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

  renderProgress = amount => ({
    className: "tests",
    iconName: "cloud-upload",
    message: <ProgressBar
      className={amount < 100 ? "" : "pt-no-stripes"}
      intent={amount < 100 ? Intent.PRIMARY : Intent.SUCCESS}
      value={amount / 100}
    />,
    timeout: amount < 100 ? 0 : 2000
  });

  removeImg = imgStateKey => {
    const imgType = imgStateKey.replace("Image", "");
    const {id: companyId} = this.props.company;
    const amount = 10;
    const progressToast = Toaster.create({className: "company-saved-toast", position: Position.TOP_CENTER});
    const key = progressToast.show(this.renderProgress(amount));
    const f = this.state[imgStateKey].replace("https://storage.googleapis.com/mm-company/", "");
    api.delete(`/api/companies/${companyId}/${imgType}?file=${f}`).then(imgResp => {
      if (imgResp.data && imgResp.data.error) {
        progressToast.dismiss(key);
        const errToast = Toaster.create({className: "company-error-toast", position: Position.TOP_CENTER});
        errToast.show({message: imgResp.data.error, intent: Intent.DANGER});
      }
      else {
        progressToast.update(key, this.renderProgress(100));
        this.setState({[imgStateKey]: null});
      }
    });
  }

  previewImg = e => {
    const imgType = e.target.id.includes("profile") ? "profile" : "cover";
    const imgStateKey = `${imgType}ImagePreview`;
    this.setState({[imgStateKey]: URL.createObjectURL(e.target.files[0])});
  }

  selectCountry = country => {
    this.setState({
      country_id: country.id
    });
  }

  render() {
    const {company, countries} = this.props;
    const {isSaving, error, address, city, country, description, name, region,
      companyEmail, phone_number, website, contactName, coverImage, profileImage,
      coverImagePreview, profileImagePreview, confirmDeleteOpen} = this.state;
    return (
      <div className="edit-company">
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
                <input id="input-contact-name" name="contactName" onChange={this.handleChange} value={contactName} type="text" className="pt-input" placeholder="Contact Name" />
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
              <span className="pt-icon pt-icon-media"></span> Cover Image
            </label>
            {coverImage
              ? <div className="pt-button-group pt-minimal">
                <button className="pt-button pt-icon-refresh" role="button" onClick={() => {this.coverImgField.click()}}>Replace</button>
                <button className="pt-button pt-icon-trash" tabIndex="0" role="button" onClick={this.removeImg.bind(null, "coverImage")}>Remove</button>
              </div>
              : null}
          </header>
          {coverImagePreview
            ? <img src={coverImagePreview} />
            : coverImage
              ? <img src={coverImage} />
              : this.addImage("coverImgField")}
          <input ref={imgField => { this.coverImgField = imgField; }} onChange={this.previewImg} type="file" name="image" accept=".jpg,.jpeg,.png" id="cover-img" />
        </div>

        <div className="img-container">
          <header>
            <label className="pt-label" htmlFor="example-form-group-input-a">
              <span className="pt-icon pt-icon-media"></span> Profile Header Image
            </label>
            {profileImage
              ? <div className="pt-button-group pt-minimal">
                <button className="pt-button pt-icon-refresh" role="button" onClick={() => {this.profileImgField.click()}}>Replace</button>
                <button className="pt-button pt-icon-trash" role="button" onClick={this.removeImg.bind(null, "profileImage")}>Remove</button>
              </div>
              : null}
          </header>
          {profileImagePreview
            ? <img src={profileImagePreview} />
            : profileImage
              ? <img src={profileImage} />
              : this.addImage("profileImgField")}
          <input ref={imgField => { this.profileImgField = imgField; }} onChange={this.previewImg} type="file" name="image" accept=".jpg,.jpeg,.png" id="profile-img" />
        </div>

        <div className="button-group">
          <button type="button" className="pt-button pt-intent-danger pt-large pt-minimal" onClick={this.toggleConfirmDelete}>
            Delete Company
            <span className="pt-icon-standard pt-icon-delete pt-align-right"></span>
            <Dialog
              isOpen={confirmDeleteOpen}
              onClose={this.toggleConfirmDelete}
            >
              <div className="pt-dialog-body">
                Are you sure you want to remove this company and all of its associated trades? This action cannot be undone.
              </div>
              <div className="pt-dialog-footer">
                <div className="pt-dialog-footer-actions">
                  <Button
                    onClick={this.toggleConfirmDelete}
                    text="Cancel" />
                  <Button
                    intent={Intent.DANGER}
                    onClick={() => {
                      this.deleteCompany();
                      this.toggleConfirmDelete();
                    }}
                    text="Delete"
                  />
                </div>
              </div>
            </Dialog>
          </button>
          <Link role="button" className="pt-button pt-large" to="/settings">
            Cancel
            <span className="pt-icon-standard pt-icon-disable pt-align-right"></span>
          </Link>
          <button type="button" className={isSaving ? "pt-button pt-intent-success pt-large pt-disabled" : "pt-button pt-intent-success pt-large"} onClick={!isSaving ? this.saveCompany : null}>
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
