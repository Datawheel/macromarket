import React from "react";
import {Link} from "react-router";
import Search from "./Search.jsx";
import {connect} from "react-redux";
import {browserHistory} from "react-router";
import {authenticateAndFetchCompany} from "../actions/companyActions";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    // browserHistory.listen(location => {
    //   if (this.props.searchActive) {
    //     this.props.activateSearch(false);
    //   }
    // });
  }

  componentWillMount() {
    if (this.props.token) {
      this.props.authenticateAndFetchCompany(this.props.token);
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
                ? <Link to="/"><span>
                    <div className="logo-wrapper"><img src="/images/icons/white-oec-logo.svg" /></div>
                    <div className="logo-wrapper">
                      <img src="/images/icons/black-market-logo.svg" /></div></span>
                  </Link>
                : null}
            </li>
            <li className="nav-bar-element">
              <Link to="/company"><span>Company</span></Link>
            </li>
            <li className="nav-bar-element">
              <Link to="/country"><span>Country</span></Link>
            </li>
            <li className="nav-bar-element">
              <Link to="/product"><span>Product</span></Link>
            </li>
            {this.props.location.pathname === '/'
              ? null
              : <li className="nav-bar-element">
                <button onClick={() => activateSearch()}><span>Search</span></button>
              </li>}
            {company
              ? <li className="nav-bar-element company-name">

                    <div className="profile-image-wrapper" style={{backgroundImage: `url(${company.profile_image})`}}>


                    </div><Link to="/login"><span>{company.name}</span></Link>
                </li>
              : <li className="nav-bar-element">
                <Link to="/login">Log In</Link>
              </li>}
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
      dispatch({type: "ACTIVATE_SEARCH", data: activeState});
    },
    authenticateAndFetchCompany: token => {
      dispatch(authenticateAndFetchCompany(token));
    }
  };
};

const mapStateToProps = state => {
  return {searchActive: state.searchActive, token: "state.authentication.token", company: "state.companyProfile.authCompany", loading: "state.companyProfile.loading"};
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
