import React from "react";
import {connect} from "react-redux";
import Sidebar from "components/Sidebar";
import {Activate as CanonActivate} from "@datawheel/canon-core";
import PropTypes from "prop-types";
import "./Admin.css";
import "./Settings.css";

class Activate extends React.Component {
  constructor() {
    super();
  }

  componentDidUpdate() {
    const {router} = this.context;
    const {auth} = this.props;
    if (auth.msg === "ACTIVATE_TOKEN_SUCCESS") {
      router.push("/settings");
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

Activate.contextTypes = {
  router: PropTypes.object
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Activate);
