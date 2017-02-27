import React from "react";
import Dropdown from "./DropDown.jsx";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.company) {
      this.state = {
        company: this.props.company,
        imagesToUpload: {
          profile_image: null,
          cover_image: null
        },
        previewStyles: {
          profile_image: {
            backgroundImage: `url(${this.props.company.profile_image})`
          },
          cover_image: {
            backgroundImage: `url(${this.props.company.cover_image})`
          }
        }
      };
    }
    else {
      this.state = {
        company: {
          importerExporter: false,
          transporter: false,
          name: "",
          country: "Argentina",
          address: "",
          phone_number: "",
          website: "",
          description: "",
          cover_image: "",
          profile_image: "",
          user_id: this.props.user.id
        },
        previewStyles: {
          profile_image: null,
          cover_image: null
        },
        imagesToUpload: {
          profile_image: null,
          cover_image: null
        }
      };
    }

    this.countries = [
      "Argentina",
      "USA",
      "Chile",
      "France",
      "China",
      "Germany"
    ];
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

  selectDropDown = item => {
    this.setState({company: {... this.state.company,
      country: item    
    }});

  }

  saveCompany = () => {
    this.props.saveCompany(this.state.company, this.state.imagesToUpload);
  }

  render() {
    const {loading, error} = this.props;
    if (error) {
      return (
        <div className="detailed-content-wrapper">
          <h2>Error</h2>
          <p>Please refresh the page.</p>
        </div>
      );
    }

    if (loading) {
      return (
        <div className="detailed-content-wrapper">
          <div>loading...</div>
        </div>
      );
    }

    const {company, previewStyles} = this.state;

    return (
      <div className="form">
        <div className="title-wrapper">{this.props.title}</div>
        <div className="content-wrapper">
          <div className="col">
            <div className="input-wrapper">
              <label>User</label>
              <input checked={company.importerExporter} onChange={this.handleChange} type="checkbox" name="importerExporter"/>
              Exporter/Importer

              <input checked={company.transporter} onChange={this.handleChange} type="checkbox" name="transporter"/>
              Transporter</div>

            <div className="input-wrapper">
              <label>Company Name</label>
              <input onChange={this.handleChange} value={company.name} name="name"/>
            </div>

            <div className="input-wrapper">
              <label>Country</label>
              <Dropdown select={this.selectDropDown} selected={company.country} items={this.countries}></Dropdown>
            </div>

            <div className="input-wrapper">
              <label>Address</label>
              <input onChange={this.handleChange} value={company.address} name="address"/>
            </div>

            <div className="input-wrapper">
              <label>Phone</label>
              <input onChange={this.handleChange} value={company.phone_number} name="phone_number"/>
            </div>

            <div className="input-wrapper">
              <label>Website</label>
              <input onChange={this.handleChange} value={company.website} name="website"/>
            </div>
          </div>
          <div className="col">
            <label>Description</label>
            <textarea rows="5" onChange={this.handleChange} value={company.description} name="description"/>
            <div className="profile-image-wrapper input-wrapper">
              <div className="image-preview-wrapper">
                {previewStyles.profile_image
                  ? <div className="image-preview" style={previewStyles.profile_image}></div>
                  : null}
              </div>
              <input name="profile_image" onChange={this.handleImageChange} type="file"/>
            </div>
            <div className="cover-image-wrapper input-wrapper">
              <div className="image-preview-wrapper">
                {previewStyles.cover_image
                  ? <div className="image-preview" style={previewStyles.cover_image}></div>
                  : null}
              </div>
              <input name="cover_image" onChange={this.handleImageChange} type="file"/>
            </div>
            <div>
              <button onClick={this.saveCompany}>Save</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
