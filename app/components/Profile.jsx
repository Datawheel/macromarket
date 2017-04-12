import React from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import {browserHistory} from "react-router";
import {authenticate, logout} from "../actions/authenticationActions";

class userWithId extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (this.props.token) {
      this.props.authenticate(this.props.token);
    }
    if (!this.props.token) {
      browserHistory.push("/login");
    }
  }

  componentDidUpdate() {
    if (!this.props.token) {
      browserHistory.push("/login");
    }
  }

  render() {
    const {user, loading, error} = this.props;
    if (error) {
      return (
        <div className="detailed-content-wrapper">
          <h2>Error</h2>
          <p>Please refresh the page.</p>
        </div>
      );
    }

    if (loading || !user) {
      return (
        <div className="detailed-content-wrapper">
          <div>loading...</div>
        </div>
      );
    }

    return (
      <div className="profile">
        <div className="inner-content">
          <h3>{user.email}</h3>
          <ul>
            <Link to="/inbox">
              <li>Inbox</li>
            </Link>

            <Link to="/settings">
              {this.props.user.company_id
                ? <li>Settings</li>
                : <li>Register a Company</li>}
            </Link>
          </ul>
          <div className="form">
            <h3>Update User Information</h3>
            <div className="input-wrapper">
              <label>Old Password</label>
              <input name="name"/>
            </div>

            <div className="input-wrapper">
              <label>Email</label>
              <input name="name"/>
            </div>
<div className-="button-wrapper">
          <button className="button-back"onClick={this.props.logout}>Log Out</button></div></div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    authenticate: token => {
      dispatch(authenticate(token))
    },
    logout: () => {
      dispatch(logout())
    }
  };
};

const mapStateToProps = state => {
  return {user: state.authentication.user, loading: state.authentication.loading, error: state.authentication.error, token: state.authentication.token};
};

export default connect(mapStateToProps, mapDispatchToProps)(userWithId);
