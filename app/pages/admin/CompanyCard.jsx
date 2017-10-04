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
  const {company} = props;

  return (
    <div className="mm-card">
      <div className="image">
        <img src={company.cover_image || "https://semantic-ui.com/images/wireframe/image.png"} />
      </div>

      <div className="content">
        <Link to={`/settings/company/${company.slug}`} className="header">{company.name}</Link>
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
        <Link to={`/settings/company/${company.id}/products`} role="button" className="pt-button pt-small pt-minimal pt-icon-edit">
          { company.trades ? <span>{company.trades.length} products listed</span> : <span>Add products</span>}
        </Link>
      </div>
    </div>
  );
};

export default CompanyCard;
