import React from "react";

export default class CountryWithId extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return <p>{this.props.params.countryWithId}</p>;
  }

}
