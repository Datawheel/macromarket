import React from "react";

export default class CompanyWithId extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return <p>{this.props.params.companyWithId}</p>;
  }

}
