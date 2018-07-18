import React from "react";
import {Link} from "react-router";
import "./Header.css";

const CompanyHeader = ({company, connectamericas, profileImage}) => {
  let coverImage = {
    backgroundImage: `url(${company.cover_image})`
  };

  if (!company.cover_image) {
    const country = company.Country;
    if (country) {
      const countryId = country.flickr_link
        ? country.id
        : country.id.slice(0, 2);
      coverImage = {
        backgroundImage: `url(/images/country/${countryId}.jpg)`
      };
    }
  }

  const companyWebsite = !(/^https?:\/\//i).test(company.website) ? `http://${company.website}` : company.website;
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
              <div><img src="/images/icons/icon-country-yellow.svg"/>
                <div className="address-wrapper">
                  <p>
                    {company.city && company.region
                      ? `${company.city}, ${company.region}`
                      : null}
                  </p>
                  {company.Country ? <p className="country-name"><Link to={`/country/${company.Country.id}`}>{company.Country.name}</Link></p> : null}
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
                <a target="_blank" rel="external" href={companyWebsite}>
                  <p>{company.website}</p>
                </a>
              </div>
            </div>
            : null}
          {company.company_email
            ? <div className="section-wrapper">
              <div>
                <a href={`mailto:${company.company_email}`}>
                  <button><img className="button-icon" src="/images/icons/icon-mail.svg"/>Get in Touch</button>
                </a>
              </div>
            </div>
            : null}
        </div>
        {company.ca_link
          ? <div className="page-links">
            <a className="link-wrapper" href={company.ca_link}>
              <div className="icon-wrapper color-ca">
                <img src="/images/icons/icon-ca.png" />
              </div>
              <div className="colored-wrapper">
                <div className="darker-color color-ca"></div>
                <p>ConnectAmericas</p>
              </div>
            </a>
          </div>
          : null}
      </div>
    </div>
  );
};

export default CompanyHeader;
