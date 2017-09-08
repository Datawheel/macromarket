import React from "react";
import {connect} from "react-redux";
import {Link, browserHistory} from "react-router";
import {deleteCompany} from "../../actions/userActions";
import Sidebar from "../../components/Sidebar";
import "../../components/Form.css";
import "../../components/Settings.css";
import {authenticateAndFetchCompany} from "../../actions/companyActions";
import {fetchData} from "datawheel-canon";
import api, {url} from "../../api";
import {Intent, Position, Toaster} from "@blueprintjs/core";

class EditCompany extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.company.name,
      description: this.props.company.description,
      address: this.props.company.address,
      city: this.props.company.city,
      region: this.props.company.region,
      country_id: this.props.company.country_id,
      company_email: this.props.company.company_email,
      phone_number: this.props.company.phone_number,
      website: this.props.company.website,
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
      website: this.state.website
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

  render() {
    const {user, loading} = this.props;
    const {address, city, country_id, description, name, region,
      company_email, phone_number, website} = this.state;

    if (loading || !user) {
      return (
        <div className="settings">
          <Sidebar></Sidebar>
          <div className="center-content form-wrapper">
            <div className="form"></div>
          </div>
        </div>
      );
    }

    const path = this.props.location.pathname;
    return (
      <div className="settings">
        <Sidebar>

          <h2>Settings</h2>
          <p className="user-email">{`Email: ${user.email}`}</p>

        </Sidebar>
        <div className="center-content form-wrapper">
          <div className="toggle-wrapper">
            <Link to="/settings/user">
              <div className={path.includes("user")
                ? "toggle selected"
                : "toggle"}>User Data</div>
            </Link>
            <Link to="/settings/company">
              <div className={path.includes("company")
                ? "toggle selected"
                : "toggle"}>Company Data</div>
            </Link>
            <Link to="/settings/product">
              <div className={path.includes("product")
                ? "toggle selected"
                : "toggle"}>Product Selection</div>
            </Link>
            <Link to="/settings/country">
              <div className={path.includes("country")
                ? "toggle selected"
                : "toggle"}>Country Selection</div>
            </Link>
          </div>
          <div className="form">

            <div className="pt-form-group">
              <label className="pt-label" htmlFor="example-form-group-input-a">
                <span className="pt-icon pt-icon-edit"></span> Company Name <span className="pt-text-muted">(required)</span>
              </label>
              <div className="pt-form-content">
                <input name="name" onChange={this.handleChange} id="example-form-group-input-a" value={name} className="pt-input" placeholder="My Company" type="text" dir="auto" />
                <div className="pt-form-helper-text">Helper text with details / user feedback</div>
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
                <input name="country_id" onChange={this.handleChange} value={country_id} type="text" className="pt-input" placeholder="Country" />
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
              <button type="button" className="pt-button pt-intent-success pt-large" onClick={this.saveCompany}>
                Save
                <span className="pt-icon-standard pt-icon-arrow-right pt-align-right"></span>
              </button>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

EditCompany.preneed = [fetchData("company", `${url}/api/companies/<companyId>`, res => res)];

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
  updatedUser: state.authentication.updatedUser,
  user: state.authentication.user,
  loading: state.authentication.loading,
  error: state.authentication.error
});

export default connect(mapStateToProps, mapDispatchToProps)(EditCompany);
