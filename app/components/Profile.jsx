import React from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import {browserHistory} from "react-router";
import Login from "./Login.jsx";
import {authenticate, logout} from "../actions/authenticationActions";

class userWithId extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.authenticate();
    console.log(this.props);
    if (!this.props.user && !this.props.loading) {
      browserHistory.push("/login");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.user && !nextProps.loading) {
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
      <div>
        <h2>{user.email}
          Profile</h2>
        <ul>
          <Link to="/inbox">
            <li>Inbox</li>
          </Link>
          <Link to="/settings">
            <li>Settings</li>
          </Link>
        </ul>
        <button onClick={this.props.logout}>Log Out</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    authenticate: () => {
      dispatch(authenticate())
    },
    logout: () => {
      dispatch(logout())
    }
  };
};

const mapStateToProps = state => {
  return {
    user: state.authentication.user,
    loading: state.authentication.loading,
    error: state.authentication.error || null
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(userWithId);
