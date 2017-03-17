import React from "react";
import {Link} from "react-router";
import countryIcon from "../img/icons/icon-country-yellow.svg";
import productIcon from "../img/icons/icon-product-yellow.svg";

import europe from "../img/icons/continents/icon-europe.svg";
import northAmerica from "../img/icons/continents/icon-north-america.svg";
import southAmerica from "../img/icons/continents/icon-south-america.svg";
import usaFlag from "../img/icons/flags/usa-flag.svg";
import chileFlag from "../img/icons/flags/chile-flag.svg";

export class Card extends React.Component {
  constructor(props) {
    super(props);
    this.content = this.props.content;
  }

  render() {
      let img = ""
    if (this.content.profile_type === "company ") {

    }
    else {
      const id = this.content.id;
      const fallbackId = id.substring(0, 2);
      img = this.content.flickr_link
        ? `/img/${this.content.profile_type}/${this.content.id}.jpg`
        : `/img/${this.content.profile_type}/${fallbackId}.jpg`;
    }

    return (
      <div className="card">
        <Link to={`/${this.content.profile_type}/${this.content.id}`}>
          <div style={{
            backgroundImage: `url(${img})`
          }} className="image-wrapper">

          </div>
          <div className="text-wrapper">
            <div className="yellow-line"></div>
            <img className="profile_type_icon" src={productIcon}/>
            <p className="category">
              {this.content.type === "country"
                ? "country"
                : "category"}</p>
            <p className="name">{this.content.name}</p>
          </div>
        </Link>
      </div>
    );
  }
}

export class CardHome extends React.Component {
  constructor(props) {
    super(props);
    this.content = this.props.content;
  }

  render() {
    let img = ""
    if (this.content.type === "company") {
      img = this.content.logo;
    }

    else {
      const id = this.content.id;
      const fallbackId = id.substring(0, 2);
      img = this.content.flickr_link
        ? `/img/${this.content.type}/${this.content.id}.jpg`
        : `/img/${this.content.type}/${fallbackId}.jpg`;
    }

    return (
      <div className="card">
        <Link to={`/${this.content.type}/${this.content.id}`}>
          <div style={{
            backgroundImage: `url(${img})`
          }} className="image-wrapper">
          <div className="na-icon-wrapper icon-wrapper">
            <img src={northAmerica}/>
          </div>
          </div>
          <div className="text-wrapper">
          <div className="yellow-line"></div>
            {this.content.type === "country" ? <img className="flag" src={usaFlag}/> : null}
              <p className="category">
                {this.content.type === "country"
                  ? "country - " + this.content.continent
                  : "category"}</p>
              <p className="name">{this.content.name}</p></div>
        </Link>
      </div>
    );
  }
}
