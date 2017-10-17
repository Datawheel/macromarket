import React, {Component} from "react";
import "./NotFound.css";

export default class NotFound extends Component {

  render() {
    return (
      <div className="error-404">
        <div className="error-gif"></div>
        <p>OOPS! There's nothing here. But checkout the following pages that are here:</p>
      </div>
    );
  }

}
