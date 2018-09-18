import React from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import {isAuthenticated, Login as CanonLogin} from "@datawheel/canon-core";
import Sidebar from "components/Sidebar";
import PropTypes from "prop-types";
import "./Admin.css";
import "./Settings.css";

class Login extends React.Component {
  componentDidMount() {
    this.props.isAuthenticated();
  }

  componentDidUpdate() {
    const {router} = this.context;
    const {loading, user} = this.props.auth;
    if (user && !loading) {
      router.push("/settings");
    }
  }

  render() {
    return (
      <div className="login">
        <div className="inner-content-wrapper">
          <div className="center-content form-wrapper">
            <CanonLogin redirect="/settings" />
            <div className="text-wrapper">
              <p>Don&apos;t have an account? <Link to="/signup">Sign up</Link></p>
              <p><Link to="/reset">Forgot Password?</Link></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.contextTypes = {
  router: PropTypes.object
};

const mapDispatchToProps = dispatch => ({
  isAuthenticated: () => {
    dispatch(isAuthenticated());
  }
});

export default connect(state => ({auth: state.auth}), mapDispatchToProps)(Login);
