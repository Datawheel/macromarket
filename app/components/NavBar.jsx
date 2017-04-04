import React from "react";
import {Link} from "react-router";
import Search from "./Search.jsx";
import {connect} from "react-redux";
import {browserHistory} from "react-router";
import oecLogo from "../img/icons/white-oec-logo.svg";
import marketLogo from "../img/icons/black-market-logo.svg";
import {authenticateAndFetchCompany} from "../actions/companyActions";


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    browserHistory.listen(location => {
      if (this.props.searchActive) {
        this.props.activateSearch();
      }
    });
  }

  componentWillMount() {
    if (this.props.token) {
      //this.props.authenticateAndFetchCompany(this.props.token);
    }
  }

  render() {
    const {activateSearch, searchActive, loading, company} = this.props;

    return (
      <div>
        <div className={this.props.location.pathname === '/'
          ? "home"
          : null}>
          <ul className="nav-bar">
            <li className="logo nav-bar-element">
              {this.props.location.pathname !== '/'
                ? <Link to="/">
                    <div className="logo-wrapper"><img src={oecLogo}/></div>
                    <div className="logo-wrapper">
                      <img src={marketLogo}/></div>
                  </Link>
                : null}
            </li>
            <li className="nav-bar-element">
              <Link to="/company">Company</Link>
            </li>
            <li className="nav-bar-element">
              <Link to="/country">Country</Link>
            </li>
            <li className="nav-bar-element">
              <Link to="/product">Product</Link>
            </li>
            {this.props.location.pathname === '/'
              ? null
              : <li className="nav-bar-element">
                <button onClick={() => activateSearch()}>Search</button>
              </li>}


            <li className="nav-bar-element">
              <Link to="/login">Log In</Link>
            </li>
          </ul>
        </div>
        {searchActive
          ? <Search></Search>
          : null}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    activateSearch: activeState => {
      dispatch({
        type: "ACTIVATE_SEARCH",
        data: activeState
      });
    },
    authenticateAndFetchCompany: token => {
      dispatch(authenticateAndFetchCompany(token));
    }
  };
};

const mapStateToProps = state => {
  return {
    searchActive: state.searchActive,
    token: state.authentication.token,
    company: state.companyProfile.company,
    loading: state.companyProfile.loading
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
