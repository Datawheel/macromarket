import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router";
import "./Header.css";

class CountryHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  nameLookup = (id, products, name) => {
    let result = name;
    const stem = id.slice(0, 2);
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      if (product.key === stem) {
        result = product.name;
        if (id.length > 2) {
          return this.nameLookup(id.slice(2, id.length), product.values, result);
        }
        return result;
      }
    }

  };

  abbrNum(number, decPlaces) {
    // 2 decimal places => 100, 3 => 1000, etc
    decPlaces = Math.pow(10, decPlaces);
    // Enumerate number abbreviations
    var abbrev = ["k", "m", "b", "t"];
    // Go through the array backwards, so we do the largest first
    for (var i = abbrev.length - 1; i >= 0; i--) {
      // Convert array index to "1000", "1000000", etc
      var size = Math.pow(10, (i + 1) * 3);
      // If the number is bigger or equal do the abbreviation
      if (size <= number) {
        // Here, we multiply by decPlaces, round, and then divide by decPlaces.
        // This gives us nice rounding to a particular decimal place.
        number = Math.round(number * decPlaces / size) / decPlaces;
        // Handle special case where we round up to the next abbreviation
        if ((number == 1000) && (i < abbrev.length - 1)) {
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

    const {country, countryData, importData, exportData, products} = this.props;
    let exportValue;
    let importValue;
    let importName;
    let exportName;
    if (countryData && importData && exportData) {
      importName = this.nameLookup(importData.hs92_id, products, "");
      exportName = this.nameLookup(exportData.hs92_id, products, "");
      exportValue = `$${this.abbrNum(countryData.export_val, 2)}`;
      importValue = `$${this.abbrNum(countryData.import_val, 2)}`;
    }

    const continentId = country.id.substring(0, 2);
    const placeImg = country.flickr_link
      ? `/images/country/${country.id}.jpg`
      : `/images/country/${continentId}.jpg`;
    return (
      <div className="header-image-wrapper">
        <div className="fade-in background-image" style={{
          backgroundImage: `url(${placeImg})`
        }}></div>
        <Link to={"/settings/country"}>
          <button className="list-company">List Your Company</button>
        </Link>
        <div className="image-overlay-wrapper">
          <div className="image-overlay"></div>
          <div className="text-wrapper">
            <div className="name section-wrapper">
              <h2>{country.name}</h2>
              <h4>{country.continent}</h4>
              <img className="flag" src={`/images/flags/country_${country.id}.png`}></img>
            </div>
            <div className="section-wrapper continent-wrapper">
              <img src={`/images/flags/country_${continentId}.png`}></img>
            </div>
            {exportValue && importValue
              ? <div className="section-wrapper total-data">
                  <div className="data">
                    <img className="icon" src="/images/icons/icon-export.svg"></img>
                    <p className="value">{exportValue}</p>
                    <h4>Exports</h4>
                  </div>
                  <div className="data">
                    <img className="icon" src="/images/icons/icon-import.svg"></img>
                    <p className="value">{importValue}</p>
                    <h4 >Imports</h4>
                  </div>
                </div>
              : null}
            {exportName && importName
              ? <div className="section-wrapper top-data">
                  <div className="data">
                      <Link to={`/product/${importData.hs92_id}`}>
                    <img className="icon" src={`/images/product_icon/hs_${exportData.hs92_id.slice(0, 2)}.png`}></img>
                    <h4>Top Export</h4>
                    <div className="name-wrapper">
                      <h4>{exportName}</h4>
                    </div></Link>
                  </div>

                  <div className="data">
                      <Link to={`/product/${importData.hs92_id}`}>
                    <img className="icon" src={`/images/product_icon/hs_${importData.hs92_id.slice(0, 2)}.png`}></img>
                    <h4>Top Import</h4>
                    <div className="name-wrapper">
                      <h4>{importName}</h4>
                    </div></Link>
                  </div>
                </div>
              : null}
            <div className="section-wrapper">
              <a className="oec-link" href={`http://atlas.media.mit.edu/en/profile/country/${country.id_3char}`}>
                View on the OEC</a>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(CountryHeader);
