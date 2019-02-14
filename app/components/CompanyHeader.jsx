import React from "react";
import {Link} from "react-router";
import "components/Header.css";
import {ACTIVATE_SEND_FAILURE} from "@datawheel/canon-core/src/consts";

const CompanyHeader = ({company, countries, connectamericas, profileImage}) => {
  // if (!company || !company.id) {
  //   return <div className="header-image-wrapper">loading...</div>;
  // }
  let coverImage = {
    backgroundImage: `url(${company.cover_image})`
  };

  // console.log("COMPANY!!!! (IN HEADER)", company);

  if (!company.cover_image) {
    const country = company.Country;
    if (country) {
      const countryId = country.flickr_link
        ? country.id
        : country.id.slice(0, 2);
      coverImage = {
        backgroundImage: `url(/images/country/${countryId}.jpg) no-repeat center center fixed`
      };
    }
  }

  const companyWebsite = !(/^https?:\/\//i).test(company.website) ? `http://${company.website}` : company.website;
  let countryUrl = "";
  if (connectamericas && company.Country) {
    const caCountry = countries.find(c => `${c.id_ca}` == `${company.Country.id}`);
    countryUrl = caCountry ? `/country/${caCountry.id}` : "";
  }
  else if (company.Country) {
    countryUrl = `/country/${company.Country.id}`;
  }
  return (
    <div className="header-image-wrapper">
      <div className={connectamericas
        ? "background-image ca-background-image"
        : "background-image"} style={connectamericas
        ? profileImage
        : coverImage}>
        <div className="image-overlay-wrapper">

          {/* bottom header stats */}
          <div className="header-contact-info">
            <ul>

              {/* company address */}
              {company.address
                ? <li className="info-item">{company.Country
                  ? <a href={countryUrl} className="bp3-tag bp3-large">
                    <span className="bp3-icon bp3-icon-large bp3-icon-map-marker"></span>
                    {company.city && company.region ? `${company.city}, ${company.region}, ${company.Country.name}` : null}
                  </a>
                  : <span className="bp3-tag bp3-large">
                    <span className="bp3-icon bp3-icon-large bp3-icon-map-marker"></span>
                    {company.city && company.region ? `${company.city}, ${company.region}` : null}
                  </span>
                }</li>
                : null }

              {/* company phone number */}
              {company.phone_number
                ? <li className="info-item">
                  <span className="bp3-tag bp3-large">
                    <span className="bp3-icon bp3-icon-large bp3-icon-phone"></span>
                    {company.phone_number}
                  </span>
                </li>
                : null}

              {/* company website */}
              {company.website
                ? <li className="info-item">
                  <a target="_blank" rel="noopener noreferrer" href={companyWebsite} className="bp3-tag bp3-large">
                    <span className="bp3-icon bp3-icon-large bp3-icon-link"></span>
                    {company.website}
                  </a>
                </li>
                : null}

              {/* company email */}
              {company.company_email
                ? <li className="info-item">
                  <a href={`mailto:${company.company_email}`} className="bp3-tag bp3-large">
                    <span className="bp3-icon bp3-icon-large bp3-icon-envelope"></span>
                    Get in Touch
                  </a>
                </li>
                : null}

            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CompanyHeader;


// <div className="text-wrapper">
// {company.address
//   ? <div className="section-wrapper">
//     <div><img src="/images/icons/icon-country-yellow.svg"/>
//       <div className="address-wrapper">
//         <p>
//           {company.city && company.region
//             ? `${company.city}, ${company.region}`
//             : null}
//         </p>
//         {company.Country
//           ? connectamericas
//             ? <p className="country-name"><Link to={countries.find(c => `${c.id_ca}` == `${company.Country.id}`) ? `/country/${countries.find(c => `${c.id_ca}` === `${company.Country.id}`).id}` : ""}>{company.Country.name}</Link></p>
//             : <p className="country-name"><Link to={`/country/${company.Country.id}`}>{company.Country.name}</Link></p>
//           : null}
//       </div>
//     </div>
//   </div>
//   : null}
// {company.phone_number
//   ? <div className="section-wrapper">
//     <div>
//       <img src="/images/icons/icon-telephone-yellow.svg"/>
//       <p>{company.phone_number}</p>
//     </div>
//   </div>
//   : null}
// {company.website
//   ? <div className="section-wrapper">
//     <div>
//       <img src="/images/icons/icon-world-yellow.svg"/>
//       <a target="_blank" rel="external" href={companyWebsite}>
//         <p>{company.website}</p>
//       </a>
//     </div>
//   </div>
//   : null}
// {company.company_email
//   ? <div className="section-wrapper">
//     <div>
//       <a href={`mailto:${company.company_email}`}>
//         <button><img className="button-icon" src="/images/icons/icon-mail.svg"/>Get in Touch</button>
//       </a>
//     </div>
//   </div>
//   : null}
// </div>
// {company.ca_link
// ? <div className="page-links">
//   <a href={company.ca_link}>
//     <div className="link-wrapper">
//       <div className="icon-wrapper color-ca">
//         <img src="/images/icons/icon-ca.png" />
//       </div>
//       <div className="colored-wrapper">
//         <div className="darker-color color-ca"></div>
//         <p>ConnectAmericas</p>
//       </div>
//     </div>
//   </a>
// </div>
// : null}
