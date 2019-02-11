import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router";
import "components/Header.css";
import {AnchorButton} from "@blueprintjs/core";

class ProductHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  nameLookup = id => {
    const {countries} = this.props;
    if (countries) {
      const flatCountries = countries.reduce((flatList, continent) => flatList.concat(continent.values), []);
      const country = flatCountries.find(c => c.id === id);
      return country ? country.name : "";
    }
    return "";
  };

  abbrNum(number, decPlaces) {
    // 2 decimal places => 100, 3 => 1000, etc
    decPlaces = Math.pow(10, decPlaces);
    // Enumerate number abbreviations
    const abbrev = ["k", "m", "b", "t"];
    // Go through the array backwards, so we do the largest first
    for (let i = abbrev.length - 1; i >= 0; i--) {
      // Convert array index to "1000", "1000000", etc
      const size = Math.pow(10, (i + 1) * 3);
      // If the number is bigger or equal do the abbreviation
      if (size <= number) {
        // Here, we multiply by decPlaces, round, and then divide by decPlaces.
        // This gives us nice rounding to a particular decimal place.
        number = Math.round(number * decPlaces / size) / decPlaces;
        // Handle special case where we round up to the next abbreviation
        if (number == 1000 && i < abbrev.length - 1) {
          number = 1;
          i++;
        }
        // Add the letter for the abbreviation
        number += ` ${abbrev[i]}`;
        break;
      }
    }
    return number;
  }

  render() {
    const {product, productCategory, productData, countries} = this.props;
    let productValue;
    let topExporter;
    let topImporter;
    let exportName;
    let importName;
    if (productData) {
      productValue = `$${this.abbrNum(productData.export_val, 2)}`;
      topExporter = productData.top_exporter;
      topImporter = productData.top_importer;
      exportName = this.nameLookup(topExporter);
      importName = this.nameLookup(topImporter);
    }


    const fallbackId = product.id.substring(0, 2);
    const img = product.flickr_link
      ? `/images/product/${product.id}.jpg`
      : product.parent_image
        ? `/images/product/${product.id.slice(0, -2)}.jpg`
        : `/images/product/${fallbackId}.jpg`;

    return <div className="header">

      <div className="header-image-wrapper">
        <div className="fade-in background-image" style={{backgroundImage: `url(${img})`}}>

          {/* bg image */}
          {/* <div className="image-overlay"></div> */}

          {/* top info */}
          <div className="header-info">

            <div className="page-title">
              <span className="name-text">
                <h2>{product.name}</h2>
                <h4 className="product-category">{productCategory}</h4>
              </span>
              <p>{product.description}</p>
            </div>

            <div className="page-links">
              <AnchorButton className="header-list-company" minimal={false} intent={"danger"} large={true} rightIcon="add" href="/settings">
                List Your Company
              </AnchorButton>
              {product.id_hs92
                ? <AnchorButton className="oec-link" minimal={false} intent={"primary"} large={true} rightIcon="share" href={`http://atlas.media.mit.edu/en/profile/hs92/${product.id_hs92}`}>
                    View on the OEC
                </AnchorButton>
                : null}
            </div>

          </div>{/* end top info */}

          {/* bottom header stats */}
          {productValue
            ? <div className="header-stats">
              <ul>
                <li className="header-stat">
                  <h4>Exports</h4>
                  <p className="value">{productValue}</p>
                </li>

                <li className="header-stat">
                  <h4>Imports</h4>
                  <p className="value">{productValue}</p>
                </li>

                <li className="header-stat">
                  <h4>Top Exporter</h4>
                  <div className="top-country">
                    <Link to={`/country/${topExporter}`}>
                      <img className="flag-icon" src={`/images/flags/country_${topExporter}.png`}></img>
                      <h3>{exportName}</h3>
                    </Link>
                  </div>
                </li>

                <li className="header-stat">
                  <h4>Top Importer</h4>
                  <div className="top-country">
                    <Link to={`/country/${topImporter}`}>
                      <img className="flag-icon" src={`/images/flags/country_${topImporter}.png`}></img>
                      <h3>{importName}</h3>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
            : null}

        </div>

      </div>
    </div>;
  }
}

const mapStateToProps = state => ({
  countries: state.countries.countries
});

export default connect(mapStateToProps)(ProductHeader);
