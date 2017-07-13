import api from "../api.js";
import React from "react";
import {browserHistory} from "react-router";
import Sidebar from "components/Sidebar";
import "../components/Form.css";
import "../components/Settings.css";

class Activate extends React.Component {
  constructor() {
    super();
    this.state = {
      confirmed: false
    };
  }

  componentDidMount() {
    const {email, token} = this.props.location.query;
    return api.get(`/api/auth/activate?email=${email}&token=${token}`)
      .then(response => {
        this.setState({confirmed: !!response.data.success});
      });
  }

  componentDidUpdate() {
    const {confirmed} = this.state;
    if (confirmed) {
      browserHistory.push("/settings/user");
    }
  }

  render() {
    return (
      <div className="login">
        <div className="inner-content-wrapper">
          <Sidebar></Sidebar>
          <div className="center-content form-wrapper">
            <div className="title-wrapper">Verify Email</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Activate;
