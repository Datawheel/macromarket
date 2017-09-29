import React from "react";
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
        <a href={`/settings/company/${company.id}`} className="header">{company.name}</a>
        <div className="meta">
          <span className="date">
            Added {moment(company.createdAt).format("MMMM Do YYYY")}
          </span>
        </div>
        <div className="description">
          {company.description}
        </div>
      </div>

      <div className="extra content">
        <a href={`/settings/company/${company.id}/products`} role="button" className="pt-button pt-small pt-minimal pt-icon-edit">
          { company.trades ? <span>{company.trades.length} Products</span> : <span>Add products</span>}
        </a>
      </div>
    </div>
  );
};
// pt-icon-build

export default CompanyCard;
