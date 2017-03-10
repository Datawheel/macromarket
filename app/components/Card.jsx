import React from "react";
import {Link} from "react-router";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.content = this.props.content;
  }

  render() {
    return (

      <div className="card">
        <Link to={`/${this.content.profile_type}/${this.content.id}`}>
          <div className="image-wrapper"></div>
          <div className="text-wrapper">
            <div className="yellow-line"></div>
            <img className="profile_type_icon" src={`./assets/icons/icon-${this.content.profile_type}-yellow.svg`}/>
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
