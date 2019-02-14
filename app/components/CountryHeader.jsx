import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router";
import {AnchorButton} from "@blueprintjs/core";
import "components/Header.css";

class CountryHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  nameLookup = (id, products) => {
    const prodObj = products.find(p => p.id === id);
    return prodObj ? prodObj.name : id;
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

    const {country, countryData, importData, exportData, products} = this.props;
    let exportValue;
    let importValue;
    let importName;
    let exportName;

    if (countryData && importData && exportData) {
      importName = this.nameLookup(importData.hs92_id, products);
      exportName = this.nameLookup(exportData.hs92_id, products);
      exportValue = `$${this.abbrNum(countryData.export_val, 2)}`;
      importValue = `$${this.abbrNum(countryData.import_val, 2)}`;
    }

    const continentId = country.id.substring(0, 2);
    const placeImg = country.flickr_link
      ? `/images/country/${country.id}.jpg`
      : `/images/country/${continentId}.jpg`;
    return <div className="header">

      <div className="header-image-wrapper">
        <div className="fade-in background-image" style={{backgroundImage: `url(${placeImg})`}}>

          {/* top info */}
          <div className="header-info">

            <div className="page-title">
              <span className="name-text">
                <h2 style={{background: `url('/images/flags/country_${country.id}.png') 0 50% no-repeat`, backgroundSize: "40px"}}>
                  {country.name}
                </h2>
                <h4>{country.continent}</h4>
              </span>
            </div>

            <div className="page-links">
              <AnchorButton className="header-list-company" minimal={false} intent={"danger"} large={true} rightIcon="add" href="/settings">
                List Your Company
              </AnchorButton>
              <AnchorButton className="oec-link" minimal={false} intent={"primary"} large={true} rightIcon="share" href={`http://atlas.media.mit.edu/en/profile/country/${country.id_3char}`}>
                View on the OEC
              </AnchorButton>
            </div>
          </div>{/* end top info */}

          {/* bottom header stats */}
          <div className="header-stats">
            <ul>

              {/* country flag */}
              <li className="header-stat continent-img">
                <img src={`/images/flags/country_${continentId}.png`}></img>
              </li>

              {exportValue
                ? <li className="header-stat">
                  <h4>Exports</h4>
                  <p className="value">{exportValue}</p>
                </li> : null}

              {importValue
                ? <li className="header-stat">
                  <h4>Imports</h4>
                  <p className="value">{importValue}</p>
                </li> : null}

              {exportName
                ? <li className="header-stat">
                  <h4>Top Export</h4>
                  <Link to={`/product/${exportData.hs92_id}`}>
                    <p className="value">{exportName}</p>
                  </Link>
                </li> : null}

              {importName
                ? <li className="header-stat">
                  <h4>Top Import</h4>
                  <Link to={`/product/${importData.hs92_id}`}>
                    <p className="value">{importName}</p>
                  </Link>
                </li> : null}

            </ul>
          </div> {/* end header-stats */}

        </div> {/* end fade-in background-image */}

      </div> {/* end header-image-wrapper */}
      {/* end header */}
    </div>;
  }
}

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = state => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CountryHeader);
