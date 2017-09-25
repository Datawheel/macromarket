import React from "react";

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
    <div className="pt-card pt-elevation-0 pt-interactive">
      <h3>{company.name}<a href={`/company/${company.id}`} role="button" className="pt-button pt-minimal pt-icon-link"></a></h3>
      <a href={`/settings/company/${company.id}`} role="button" className="pt-button pt-minimal pt-icon-edit"></a>
      {company.description ? <p>{company.description}</p> : null}
      <div>
        <address className="vcard">
          <span className="adr">
            {company.address ? <span className="street-address">{company.address}</span> : null}
            {company.city ? <span className="locality">{company.city}</span> : null }
            {company.region ? <abbr className="region">{company.region}</abbr> : null }
            {company.Country ? <span className="country-name">{company.Country ? company.Country.name : ""}</span> : null}
          </span>
        </address>
      </div>
      <h4>
        Products
        <a href={`/settings/company/${company.id}/products`} role="button" className="pt-button pt-minimal pt-icon-edit"></a>
      </h4>
      { company.trades
        ? <div>
          <table className="pt-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Exported to:</th>
                <th>Imported from:</th>
              </tr>
            </thead>
            <tbody>
              {company.trades.map(product =>
                <tr key={product.key}>
                  <td>
                    {product.values[0].Product.name}
                  </td>
                  <td>
                    <CountryList products={product.values} tradeFlow="exports" />
                  </td>
                  <td>
                    <CountryList products={product.values} tradeFlow="imports" />
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        : <a href={`/settings/company/${company.id}/products`} role="button" className="pt-button pt-minimal pt-icon-add">
          No products added for this company yet, add them now
        </a>
      }
    </div>
  );
};

export default CompanyCard;
