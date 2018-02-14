import React from "react";
import {connect} from "react-redux";
import {Activate as CanonActivate} from "datawheel-canon";
import {NonIdealState} from "@blueprintjs/core";
import {isAuthenticated} from "datawheel-canon";
class OnboardingSuccess extends React.Component {

  componentDidMount() {
    this.props.isAuthenticated();
  }
  render() {
    const user = this.props.auth ? this.props.auth.user : null;

    return (
      <div className="slide-inner">
        <h2>Congrats Your Company has been Listed!</h2>
        <p className="description-text">
          Before your company can be publically listed, you must verify your email address.
        </p>
        {user && user.activated !== undefined && !user.activated
          ? <div>

            <CanonActivate />
          </div>
          : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  isAuthenticated: () => {
    dispatch(isAuthenticated());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(OnboardingSuccess);
