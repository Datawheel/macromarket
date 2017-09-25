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
      name: this.props.company.name,
      description: this.props.company.description,
      address: this.props.company.address || "",
      city: this.props.company.city || "",
      region: this.props.company.region || "",
      country_id: this.props.company.country_id || "",
      company_email: this.props.company.company_email || "",
      phone_number: this.props.company.phone_number || "",
      website: this.props.company.website || "",
      coverImage: this.props.company.cover_image,
      profileImage: this.props.company.profile_image,
      newCompany: false
    };
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

  saveCompany = () => {
    const {id} = this.props.company;
    const company = {
      name: this.state.name,
      description: this.state.description,
      address: this.state.address,
      city: this.state.city,
      region: this.state.region,
      country_id: this.state.country_id,
      company_email: this.state.company_email,
      phone_number: this.state.phone_number,
      website: this.state.website,
      profile_image: this.state.profileImage,
      cover_image: this.state.coverImage
    };
    if (this.state.newCompany) {
      api.post("api/companies/", {...company}).then(companyResponse => {
        const {id: newId} = companyResponse.data;
        this.setState({newCompany: false});
        const toast = Toaster.create({className: "company-saved-toast", position: Position.TOP_CENTER});
        toast.show({message: "New company created.", intent: Intent.SUCCESS});
        browserHistory.push(`/settings/company/${newId}`);
      });
    }
    else {
      api.put(`api/companies/${id}`, {...company}).then(() => {
        this.setState({newCompany: false});
        const toast = Toaster.create({className: "company-saved-toast", position: Position.TOP_CENTER});
        toast.show({message: "Company data saved.", intent: Intent.SUCCESS});
      });
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
    const {company, user, loading} = this.props;
    const {address, city, country_id, description, name, region,
      company_email, phone_number, website, coverImage, profileImage} = this.state;

    const path = this.props.location.pathname;
    return (
      <div>

        <div className="pt-form-group">
          <label className="pt-label" htmlFor="example-form-group-input-a">
            <span className="pt-icon pt-icon-edit"></span> Company Name <span className="pt-text-muted">(required)</span>
          </label>
          <div className="pt-form-content">
            <input name="name" onChange={this.handleChange} id="example-form-group-input-a" value={name} className="pt-input" placeholder="My Company" type="text" dir="auto" />
            <div className="pt-form-helper-text">This will be displayed on your profile.</div>
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
          <div className="pt-input-group">
            <input name="address" onChange={this.handleChange} value={address} type="text" className="pt-input" placeholder="Street" />
          </div>
          <div className="pt-input-group">
            <input name="city" onChange={this.handleChange} value={city} type="text" className="pt-input" placeholder="City" />
          </div>
          <div className="pt-input-group">
            <input name="region" onChange={this.handleChange} value={region} type="text" className="pt-input" placeholder="State / Provience / Region" />
          </div>
          <div className="pt-input-group">
            <CountrySearch country={company.Country} countries={this.props.countries} selectCountry={this.selectCountry} />
          </div>
        </div>

        <div className="pt-form-group contact-info">
          <label className="pt-label" htmlFor="example-form-group-input-a">
            <span className="pt-icon pt-icon-id-number"></span> Contact Info
          </label>
          <div className="pt-input-group">
            <input type="text" className="pt-input" placeholder="Contact Name" />
          </div>
          <div className="pt-input-group">
            <input name="company_email" onChange={this.handleChange} value={company_email} type="text" className="pt-input" placeholder="Email" />
          </div>
          <div className="pt-input-group">
            <input name="phone_number" onChange={this.handleChange} value={phone_number} type="text" className="pt-input" placeholder="Phone" />
          </div>
          <div className="pt-input-group">
            <input name="website" onChange={this.handleChange} value={website} type="text" className="pt-input" placeholder="Website" />
          </div>
        </div>

        <div className="pt-form-group contact-info">
          <header>
            <label className="pt-label" htmlFor="example-form-group-input-a">
              <span className="pt-icon pt-icon-media"></span> Profile Image
            </label>
            {profileImage
              ? <div className="pt-button-group pt-minimal">
                <button className="pt-button pt-icon-trash" tabIndex="0" role="button" onClick={this.removeImg.bind(null, "profileImage")}>Remove</button>
                <button className="pt-button pt-icon-refresh" tabIndex="0" role="button" onClick={() => this.profileImgField.click()}>Replace</button>
              </div>
              : null}
          </header>
          {profileImage
            ? <img src={profileImage} />
            : this.addImage("profileImgField")}
          <input ref={imgField => { this.profileImgField = imgField; }} onChange={this.uploadImg} type="file" name="image" accept=".jpg,.jpeg,.png" id="profile-img" />
        </div>

        <div className="pt-form-group contact-info">
          <header>
            <label className="pt-label" htmlFor="example-form-group-input-a">
              <span className="pt-icon pt-icon-media"></span> Cover Image
            </label>
            {coverImage
              ? <div className="pt-button-group pt-minimal">
                <button className="pt-button pt-icon-trash" tabIndex="0" role="button" onClick={this.removeImg.bind(null, "coverImage")}>Remove</button>
                <button className="pt-button pt-icon-refresh" tabIndex="0" role="button" onClick={() => this.coverImgField.click()}>Replace</button>
              </div>
              : null}
          </header>
          {coverImage
            ? <img src={coverImage} />
            : this.addImage("coverImgField")}
          <input ref={imgField => { this.coverImgField = imgField; }} onChange={this.uploadImg} type="file" name="image" accept=".jpg,.jpeg,.png" id="cover-img" />
        </div>

        <div className="pt-form-group contact-info">
          <button type="button" className="pt-button pt-intent-success pt-large" onClick={this.saveCompany}>
            Save
            <span className="pt-icon-standard pt-icon-arrow-right pt-align-right"></span>
          </button>
          <a href={`/settings/company/${company.id}/products`} className="pt-button pt-minimal" onClick={this.saveCompany}>
            Edit Product List
            <span className="pt-icon-standard pt-icon-arrow-right pt-align-right"></span>
          </a>
        </div>

      </div>
    );
  }
}

EditCompany.preneed = [
  fetchData("countries", `${url}/api/countries`, res => res),
  fetchData("company", `${url}/api/companies/<companyId>`, res => res)
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
  company: state.data.company,
  countries: state.data.countries,
  updatedUser: state.authentication.updatedUser,
  user: state.authentication.user,
  loading: state.authentication.loading,
  error: state.authentication.error
});

export default connect(mapStateToProps, mapDispatchToProps)(EditCompany);
