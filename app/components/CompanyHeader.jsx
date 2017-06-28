import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router";
import "./Header.css";

class CompanyHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {company, connectamericas, profileImage} = this.props;
    let coverImage = {
      backgroundImage: `url(${company.cover_image})`
    };

    if (!company.cover_image) {
      const country = company.Country
      if (country) {
        const countryId = country.flickr_link
          ? country.id
          : country.id.slice(0, 2);
        coverImage = {
          backgroundImage: `url(/images/country/${countryId}.jpg)`
        };
      }
    }

    return (
      <div className="header-image-wrapper">
        <div className={connectamericas
          ? "background-image ca-background-image"
          : "background-image"} style={connectamericas
          ? profileImage
          : coverImage}></div>
        <div className="image-overlay-wrapper">
          <div className="image-overlay"></div>
          <div className="text-wrapper">
            {company.address
              ? <div className="section-wrapper">
                  <div ><img src="/images/icons/icon-country-yellow.svg"/>
                    <div className="address-wrapper">
                      <p>{company.address}</p>
                      <p>{company.city && company.region
                          ? `${company.city},${company.region}`
                          : null}</p>
                      <p>{company.Country
                          ? company.Country.name
                          : null}</p>
                    </div>
                  </div>
                </div>
              : null}
            {company.phone_number
              ? <div className="section-wrapper">
                  <div>
                    <img src="/images/icons/icon-telephone-yellow.svg"/>
                    <p>{company.phone_number}</p>
                  </div>
                </div>
              : null}
            {company.website
              ? <div className="section-wrapper">
                  <div>
                    <img src="/images/icons/icon-world-yellow.svg"/>
                    <a target="_blank" rel="external" href={`http://${company.website}`}>
                      <p>{company.website}</p>
                    </a>
                  </div>
                </div>
              : null}
            {company.company_email
              ? <div className="section-wrapper">
                  <a href={`mailto:${company.company_email}`}>
                    <button><img className="button-icon" src="/images/icons/icon-mail.svg"/>Get in Touch</button>
                  </a>
                </div>
              : null}
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {};
};

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyHeader);
