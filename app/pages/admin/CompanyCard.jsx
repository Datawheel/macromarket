import React from "react";
import {Link} from "react-router";
import moment from "moment";

const CountryList = ({products, tradeFlow}) => {
  products = products
    .filter(exportDestinations => exportDestinations.trade_flow === tradeFlow);
  return <span>
    {products
      .filter(exportDestinations => exportDestinations.trade_flow === tradeFlow)
      .map((item, index) =>
        <span key={index}>
          <a href={`/country/${item.country_id}`}>{item.Country.name}</a>
          { index < products.length - 1 ? ", " : null }
        </span>
      )}
  </span>;
};

const CompanyCard = props => {
  const {company, key} = props;

  return (
    <div className="mm-card" key={key}>
      <div className="image">
        <img src={company.cover_image || "https://semantic-ui.com/images/wireframe/image.png"} />
      </div>

      <div className="content">
        <h2>
          <Link to={`/settings/company/${company.slug}`} role="button" className="header bp3-button bp3-small bp3-minimal bp3-icon-edit">
            {company.name}
          </Link>
        </h2>
        <div className="meta">
          <span className="date">
            Added {moment(company.createdAt).format("MMMM Do YYYY")}
          </span>
        </div>
        {/* <div className="description">
          {company.description}
        </div> */}
      </div>

      <div className="extra content">
        <Link to={`/settings/company/${company.slug}/products`} role="button" className="bp3-button bp3-small bp3-minimal bp3-icon-edit">
          { company.trades ? <span>{company.trades.length} products</span> : <span>Add products</span>}
        </Link>
        <Link to={`/company/${company.slug}`} role="button" className="view-listing bp3-button bp3-small bp3-minimal">
          View listing
          <span className="bp3-icon-standard bp3-minimal bp3-icon-link bp3-align-right"></span>
        </Link>
      </div>
    </div>
  );
};

export default CompanyCard;
