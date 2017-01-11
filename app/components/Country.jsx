import React from "react";
import CountryWithId from "./CountryWithId";

export default class Country extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return <div><p>List of Countries </p></div>;
  }

}
