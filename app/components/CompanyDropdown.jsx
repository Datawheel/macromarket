import React from "react";
import api from "../api.js";

export class CompanyDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: []
    };
  }

  componentDidMount() {
    console.log(this.props.user, "props here");
    // api.get(`api/companies/byUser/${this.props.user.id}`).then(companiesResp => {
    //   this.setState({companiesResp});
    // });
  }

  render() {


    return (<div>sdfgsdfgsdfgsdfgsfdgsdfg{this.props.user.id}</div>);
  }
}
