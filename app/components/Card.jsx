import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router";
import "./Card.css";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.content = this.props.content;
  }

  render() {
    const {key} = this.props;
    let icon = "/images/icons/icon-product-yellow.svg";
    let img = "";
    let id = this.content.id;
    if (this.content.profile_type === "country") {
      icon = "/images/icons/icon-country-yellow.svg";
      const countryImage = this.content.image
        ? this.content.id
        : this.content.id.slice(0, 2);
      img = `/images/${this.content.profile_type}/${countryImage}.jpg`;
    }
    if (this.content.profile_type === "company") {
      icon = "/images/icons/icon-company-yellow.svg";
      img = this.content.image || this.content.profile_image || this.content.cover_image;
      id = this.content.slug;
      // if (id.toString().includes("company")) {
      //   id = id.replace("company", "");
      // }
      // else {
      //   id = this.content.slug;
      // }
    }
    if (this.content.profile_type === "product") {
      img = `/images/${this.content.profile_type}/${this.content.image}.jpg`;
    }

    if (this.content.profile_type === "connectamericas") {
      img = this.content.image;
    }

    let productCategory = "";
    if (this.props.products && this.content.profile_type === "product") {
      this.props.products.map(product => {
        if (this.content.id.slice(0, 2) === product.key) {
          productCategory = product.name;
        }
      });
    }

    return (
      <div className="card fade-in" key={key}>
        <Link to={`/${this.content.profile_type === "connectamericas"
          ? "company"
          : this.content.profile_type}/${id}`} onClick={() => {
          this.props.activateSearch(false)
          ;
        }}>
          <div className="image-wrapper">
            <div style={{
              backgroundImage: img ? `url(${img})` : "url('/images/default-business.png')"
            }} className="image"></div>
          </div>
          <div className="text-wrapper">
            <div className="yellow-line"></div>
            <img className="profile_type_icon" src={icon}/>
            <p className="category">
              {this.content.profile_type === "country"
                ? "country"
                : this.content.profile_type === "product"
                  ? productCategory
                  : "company"}</p>
            <p className="name">{this.content.name}</p>
            {this.props.countries
              ? this.props.countries.map((country, index) => {
                if (index < 7) {
                  return <div className="flag-wrapper"><img className="company-flags" src={`/images/flags/country_${country}.png`}/></div>;
                }
              })
              : null}
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
    let img = "";
    if (this.content.type === "company") {
      img = this.content.logo;
    }
    else {
      const id = this.content.id;
      const fallbackId = id.substring(0, 2);
      img = this.content.flickr_link
        ? `/images/${this.content.type}/${this.content.id}.jpg`
        : `/images/${this.content.type}/${fallbackId}.jpg`;
    }

    return (
      <div className="card">
        <Link to={`/${this.content.type}/${this.content.id}`}>
          <div style={{
            backgroundImage: `url(${img})`
          }} className="image-wrapper"></div>
          <div className="text-wrapper">
            <div className="yellow-line"></div>
            {this.content.type === "country"
              ? <img className="flag" src={`/images/flags/country_${this.content.id}.png`}/>
              : null}
            <p className="category">
              {this.content.type === "country"
                ? `country - ${this.content.continent}`
                : this.content.type === "product"
                  ? this.content.category
                  : "company"}</p>
            <p className="name">{this.content.name}</p>
          </div>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  activateSearch: activeState => {
    dispatch({type: "ACTIVATE_SEARCH", data: activeState});
  }
});

export default connect(state => ({searchActive: state.searchActive}), mapDispatchToProps)(Card);
