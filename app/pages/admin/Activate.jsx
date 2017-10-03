import React from "react";
import {connect} from "react-redux";
import {browserHistory} from "react-router";
import Sidebar from "components/Sidebar";
import {Activate as CanonActivate} from "datawheel-canon";
import "./Admin.css";
import "./Settings.css";

class Activate extends React.Component {
  constructor() {
    super();
  }

  componentDidUpdate() {
    const {auth} = this.props;
    if (auth.msg === "ACTIVATE_TOKEN_SUCCESS") {
      browserHistory.push("/settings");
    }
  }

  render() {
    return (
      <div className="login">
        <div className="inner-content-wrapper">
          <Sidebar></Sidebar>
          <div className="center-content form-wrapper">
            <div className="title-wrapper">Verify Email</div>
            <CanonActivate hidden={true} location={this.props.location} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Activate);
