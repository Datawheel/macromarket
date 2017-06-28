import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router";
import "./Header.css";
import Sidebar from "../components/Sidebar.jsx";

export default class ProductHeader extends React.Component {
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
    const {product, productCategory, productData} = this.props;
    let productValue;
    console.log(productData);
    if (productData) {
      productValue = `$${this.abbrNum(productData.export_val, 2)}`;
    }

    const fallbackId = product.id.substring(0, 2);
    const img = product.flickr_link
      ? `/images/product/${product.id}.jpg`
      : product.parent_image
        ? `/images/product/${product.id.slice(0, -2)}.jpg`
        : `/images/product/${fallbackId}.jpg`;

    return (
      <div className="header">
        <Sidebar>
          <div className="profile-info">
            <div className="header-wrapper">
              <h2>
                <span><img src={"/images/icons/icon-product-white.svg"}/></span>{product.name}</h2>
              <div className="yellow-line"></div>
              <p className="product-category">{productCategory}</p>
            </div>
            <p>{product.description}</p>
            {product.id_hs92
              ? <a href={`http://atlas.media.mit.edu/en/profile/hs92/${product.id_hs92}`}>
                  View on the OEC</a>
              : null}
          </div>
        </Sidebar>
        <div className="center-content">
          <div className="header-image-wrapper">
            <div className="background-image" style={{
              backgroundImage: `url(${img})`
            }}></div>
            {productValue
              ? <div className="image-overlay-wrapper">
                  <div className="image-overlay"></div>
                  <div className="text-wrapper">
                    <div className="section-wrapper total-data">
                      <div className="data">
                        <p className="value">{productValue}</p>
                        <h4>Exports</h4>
                        <h4></h4>
                      </div>
                    </div>
                    <div className="section-wrapper top-data">
                      <div className="data">
                        <h4>Top Exporter</h4>
                      </div>
                      <div className="data">
                        <h4>Top Exporter</h4>
                      </div>
                    </div>
                  </div>
                </div>
              : null}
            <Link to={"/settings/product"}>
              <button className="list-company">List Your Company</button>
            </Link>
          </div>
        </div>
      </div>

    );
  }
}
