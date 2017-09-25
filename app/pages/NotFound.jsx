import React from "react";
import "./NotFound.css";

export default class NotFound extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="error-404">
        <div className="error-gif"></div>
        <p>OOPS! There's nothing here. But checkout the following pages that are here:</p>
        <ul>

        </ul>
      </div>
    );
  }

}
