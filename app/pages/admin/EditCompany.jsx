import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router";
import {deleteCompany} from "actions/userActions";
import CountrySearch from "./CountrySearch";
import {fetchData} from "@datawheel/canon-core";
import api, {url} from "helpers/api.js";
import {Dialog, Intent, ProgressBar, Button} from "@blueprintjs/core";
import PropTypes from "prop-types";
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
      isSaving: false,
      coverImgFile: null,
      profileImgFile: null
    };
    // this.profileImgField = React.createRef();
    // this.coverImgField = React.createRef();
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
      const toast = this.context.toast.current;
      toast.show({message: "You have errors in your form.", intent: Intent.DANGER});
      return false;
    }
    else {
      this.setState({error: null});
      return true;
    }
  }

  saveCompany = () => {
    const {router} = this.props;
    const {current: toast} = this.context.toast;
    const {coverImgFile, profileImgFile} = this.state;
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
      toast.show({message: "Saving company data...", intent: Intent.PRIMARY});
      const imgUploadFiles = [{file: coverImgFile, id: "cover"}, {file: profileImgFile, id: "profile"}];
      if (this.state.newCompany) {
        console.log("new company!!!");
        console.log("imgUploadFiles", imgUploadFiles);
        api.post("api/companies/", {...company}).then(companyResponse => {
          const {id: newCompanyId} = companyResponse.data;
          const imgUploadPromises = imgUploadFiles.filter(f => f.file !== null).map(upload => {
            const config = {headers: {"Content-Type": "multipart/form-data"}};
            const formData = new FormData();
            formData.append("image", upload.file);
            return api.post(`/api/companies/${newCompanyId}/${upload.id}`, formData, config);
          });
          console.log("imgUploadFiles", imgUploadFiles, imgUploadPromises);
          Promise.all(imgUploadPromises)
            .then(imgUploadResponses => {
              // console.log("imgUploadResponses!", imgUploadResponses);
              this.setState({newCompany: false, isSaving: false});
              const errs = imgUploadResponses.filter(d => d.data.error);
              if (errs.length) {
                toast.show({message: "Image size too large (5mb max).", intent: Intent.DANGER});
              }
              else {
                toast.show({message: "Company data saved.", intent: Intent.SUCCESS});
              }
              router.push("/settings/");
            })
            .catch(error => {
              // Do something with response error
              if (error.response.status === 413) {
                toast.show({message: "Image size too large (5mb max).", intent: Intent.DANGER});
                console.log("Image too large!");
                router.push("/settings/");
              }
              return Promise.reject(error.response);
            });
        });
      }
      else {
        api.put(`api/companies/${id}`, {...company}).then(() => {
          // const imgUploadPromises = imgUploadInputs.filter(uploadInput => uploadInput.files.length).map(uploadInput => {
          const imgUploadPromises = imgUploadFiles.filter(f => f.file !== null).map(upload => {
            const config = {headers: {"Content-Type": "multipart/form-data"}};
            const formData = new FormData();
            formData.append("image", upload.file);
            return api.post(`/api/companies/${id}/${upload.id}`, formData, config);
          });
          Promise.all(imgUploadPromises)
            .then(imgUploadResponses => {
              this.setState({newCompany: false, isSaving: false});
              const errs = imgUploadResponses.filter(d => d.data.error);
              if (errs.length) {
                toast.show({message: "Image size too large (5mb max).", intent: Intent.DANGER});
              }
              else {
                toast.show({message: "Company data saved.", intent: Intent.SUCCESS});
              }
              router.push("/settings/");
            })
            .catch(error => {
              // Do something with response error
              if (error.response.status === 413) {
                toast.show({message: "Image size too large (5mb max).", intent: Intent.DANGER});
                console.log("Image too large!");
                router.push("/settings/");
              }
              return Promise.reject(error.response);
            });
        });
      }
    }
  }

  toggleConfirmDelete = () => {
    this.setState({confirmDeleteOpen: !this.state.confirmDeleteOpen});
  }

  deleteCompany = () => {
    const {router} = this.props;
    const {id} = this.props.company;
    console.log("deleteing compnay id ", id);

    api.delete(`/api/companies/${id}/`).then(() => {
      const toast = this.context.toast.current;
      toast.show({message: "Company deleted.", intent: Intent.SUCCESS});
      router.push("/settings/");
    });
  }

  addImage = () =>
    <div className="bp3-non-ideal-state">
      <div className="bp3-non-ideal-state-visual bp3-non-ideal-state-icon">
        <span className="bp3-icon bp3-icon-media"></span>
      </div>
      <div className="bp3-non-ideal-state-description"></div>
    </div>

  renderProgress = amount => ({
    className: "tests",
    iconName: "cloud-upload",
    message: <ProgressBar
      className={amount < 100 ? "" : "bp3-no-stripes"}
      intent={amount < 100 ? Intent.PRIMARY : Intent.SUCCESS}
      value={amount / 100}
    />,
    // timeout: amount < 100 ? 0 : 2000
    timeout: 2000
  });

  removeImg = imgStateKey => {
    const imgType = imgStateKey.replace("Image", "");
    const {id: companyId} = this.props.company;
    const amount = 10;
    const toast = this.context.toast.current;
    const toastKey = toast.show(this.renderProgress(amount));
    const f = this.state[imgStateKey].replace("https://storage.googleapis.com/mm-company/", "");
    api.delete(`/api/companies/${companyId}/${imgType}?file=${f}`).then(imgResp => {
      if (imgResp.data && imgResp.data.error) {
        toast.dismiss(toastKey);
        toast.show({message: imgResp.data.error, intent: Intent.DANGER});
      }
      else {
        toast.show(this.renderProgress(100), toastKey);
        this.setState({[imgStateKey]: null});
      }
    });
  }

  previewImg = e => {
    const imgType = e.target.id.includes("profile") ? "profile" : "cover";
    const imgStateKey = `${imgType}ImagePreview`;
    const imgFileStateKey = `${imgType}ImgFile`;
    this.setState({[imgStateKey]: URL.createObjectURL(e.target.files[0]), [imgFileStateKey]: e.target.files[0]});
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
        <div className={error && error.names.includes("name") ? "bp3-form-group bp3-intent-danger" : "bp3-form-group"}>
          <label className="bp3-label" htmlFor="input-company-name">
            <span className="bp3-icon bp3-icon-edit"></span> Company Name <span className="bp3-text-muted">(required)</span>
          </label>
          <div className="bp3-form-content">
            <div className={error && error.names.includes("name") ? "bp3-input-group bp3-intent-danger" : "bp3-input-group"}>
              <input name="name" onChange={this.handleChange} id="input-company-name" value={name} className="bp3-input" placeholder="My Company" type="text" dir="auto" />
            </div>
            {error && error.names.includes("name") ? <div className="bp3-form-helper-text">A company name is required.</div> : null}
          </div>
        </div>

        <div className="bp3-form-group">
          <label className="bp3-label" htmlFor="example-form-group-input-a">
            <span className="bp3-icon bp3-icon-paragraph"></span> Description
          </label>
          <div className="bp3-form-content">
            <textarea name="description" onChange={this.handleChange} value={description} className="bp3-input bp3-fill"></textarea>
          </div>
        </div>

        <div className="bp3-form-group address">
          <label className="bp3-label" htmlFor="example-form-group-input-a">
            <span className="bp3-icon bp3-icon-map-marker"></span> Address
          </label>

          <div className="bp3-form-group bp3-inline">
            <label className="bp3-label" htmlFor="input-address-street">
              Street
            </label>
            <div className="bp3-form-content">
              <div className="bp3-input-group">
                <input id="input-address-street" name="address" onChange={this.handleChange} value={address} type="text" className="bp3-input" placeholder="Street" />
              </div>
            </div>
          </div>
          <div className="bp3-form-group bp3-inline">
            <label className="bp3-label" htmlFor="input-address-city">
              City
            </label>
            <div className="bp3-form-content">
              <div className="bp3-input-group">
                <input id="input-address-city" name="city" onChange={this.handleChange} value={city} type="text" className="bp3-input" placeholder="City" />
              </div>
            </div>
          </div>
          <div className="bp3-form-group bp3-inline">
            <label className="bp3-label" htmlFor="input-address-region">
              State/Province
            </label>
            <div className="bp3-form-content">
              <div className="bp3-input-group">
                <input id="input-address-region" name="region" onChange={this.handleChange} value={region} type="text" className="bp3-input" placeholder="State / Provience / Region" />
              </div>
            </div>
          </div>
          <div className="bp3-form-group bp3-inline">
            <label className="bp3-label" htmlFor="input-address-country">
              Country
            </label>
            <div className="bp3-form-content">
              <div className="bp3-input-group">
                { countries
                  ? <CountrySearch country={country} countries={countries} selectCountry={this.selectCountry} />
                  : <span>Loading country list...</span>
                }
              </div>
            </div>
          </div>
        </div>

        <div className="bp3-form-group contact-info">
          <label className="bp3-label" htmlFor="example-form-group-input-a">
            <span className="bp3-icon bp3-icon-id-number"></span> Contact Info
          </label>

          <div className="bp3-form-group bp3-inline">
            <label className="bp3-label" htmlFor="input-contact-name">
              Contact Name
            </label>
            <div className="bp3-form-content">
              <div className="bp3-input-group">
                <input id="input-contact-name" name="contactName" onChange={this.handleChange} value={contactName} type="text" className="bp3-input" placeholder="Contact Name" />
              </div>
            </div>
          </div>

          <div
            className={error && error.names.includes("companyEmail")
              ? "bp3-form-group bp3-inline bp3-intent-danger"
              : "bp3-form-group bp3-inline"}
          >
            <label className="bp3-label" htmlFor="input-contact-email">
              Email
            </label>
            <div className="bp3-form-content">
              <div className={error && error.names.includes("companyEmail") ? "bp3-input-group bp3-intent-danger" : "bp3-input-group"}>
                <input id="input-contact-email" name="companyEmail" onChange={this.handleChange} value={companyEmail} type="email" pattern="[^ @]*@[^ @]*" className="bp3-input" placeholder="john@sample.com" />
              </div>
              {error && error.names.includes("companyEmail") ? <div className="bp3-form-helper-text">Email formatted incorrectly.</div> : null}
            </div>
          </div>

          <div className="bp3-form-group bp3-inline">
            <label className="bp3-label" htmlFor="input-contact-phone">
              Phone Number
            </label>
            <div className="bp3-form-content">
              <div className="bp3-input-group">
                <input id="input-contact-phone" name="phone_number" onChange={this.handleChange} value={phone_number} type="text" className="bp3-input" />
              </div>
            </div>
          </div>

          <div
            className={error && error.names.includes("website")
              ? "bp3-form-group bp3-inline bp3-intent-danger"
              : "bp3-form-group bp3-inline"}
          >
            <label className="bp3-label" htmlFor="input-contact-website">
              Website
            </label>
            <div className="bp3-form-content">
              <div className={error && error.names.includes("website") ? "bp3-input-group bp3-intent-danger" : "bp3-input-group"}>
                <input type="url" pattern="https?://.+" id="input-contact-website" name="website" onChange={this.handleChange} value={website} className="bp3-input" placeholder="http://sample.com" />
              </div>
              {error && error.names.includes("website") ? <div className="bp3-form-helper-text">Website formatted incorrectly.</div> : null}
            </div>
          </div>
        </div>

        <div className="img-container">
          <header>
            <label className="bp3-label" htmlFor="example-form-group-input-a">
              <span className="bp3-icon bp3-icon-media"></span> Cover Image
            </label>
            {coverImage
              ? <div className="bp3-button-group bp3-minimal">
                <button className="bp3-button bp3-icon-refresh" role="button" onClick={() => {
                  this.coverImgField.current.click()
                  ;
                }}>Replace</button>
                <button className="bp3-button bp3-icon-trash" tabIndex="0" role="button" onClick={this.removeImg.bind(null, "coverImage")}>Remove</button>
              </div>
              : null}
          </header>
          {coverImagePreview
            ? <img src={coverImagePreview} />
            : coverImage
              ? <img src={coverImage} />
              : this.addImage("coverImgField")}
          <input onChange={this.previewImg} type="file" name="image" accept=".jpg,.jpeg,.png" id="cover-img" />
        </div>

        <div className="img-container">
          <header>
            <label className="bp3-label" htmlFor="example-form-group-input-a">
              <span className="bp3-icon bp3-icon-media"></span> Profile Header Image
            </label>
            {profileImage
              ? <div className="bp3-button-group bp3-minimal">
                <button className="bp3-button bp3-icon-refresh" role="button" onClick={() => {
                  this.profileImgField.current.click()
                  ;
                }}>Replace</button>
                <button className="bp3-button bp3-icon-trash" role="button" onClick={this.removeImg.bind(null, "profileImage")}>Remove</button>
              </div>
              : null}
          </header>
          {profileImagePreview
            ? <img src={profileImagePreview} />
            : profileImage
              ? <img src={profileImage} />
              : this.addImage("profileImgField")}
          <input onChange={this.previewImg} type="file" name="image" accept=".jpg,.jpeg,.png" id="profile-img" />
        </div>

        <div className="button-group">
          <button type="button" className="bp3-button bp3-intent-danger bp3-large bp3-minimal" onClick={this.toggleConfirmDelete}>
            Delete Company
            <span className="bp3-icon-standard bp3-icon-delete bp3-align-right"></span>
            <Dialog
              isOpen={confirmDeleteOpen}
              onClose={this.toggleConfirmDelete}
            >
              <div className="bp3-dialog-body">
                Are you sure you want to remove this company and all of its associated trades? This action cannot be undone.
              </div>
              <div className="bp3-dialog-footer">
                <div className="bp3-dialog-footer-actions">
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
          <Link role="button" className="bp3-button bp3-large" to="/settings">
            Cancel
            <span className="bp3-icon-standard bp3-icon-disable bp3-align-right"></span>
          </Link>
          <button type="button" className={isSaving ? "bp3-button bp3-intent-success bp3-large bp3-disabled" : "bp3-button bp3-intent-success bp3-large"} onClick={!isSaving ? this.saveCompany : null}>
            Save
            <span className="bp3-icon-standard bp3-icon-arrow-right bp3-align-right"></span>
          </button>
        </div>

      </div>
    );
  }
}

EditCompany.contextTypes = {
  toast: PropTypes.object
};

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
