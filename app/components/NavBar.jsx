import React from "react";
import {Link} from "react-router";
import Search from "./Search.jsx";
import {connect} from "react-redux";
import {browserHistory} from "react-router";
import {authenticateAndFetchCompany} from "../actions/companyActions";
import {logout} from "../actions/authenticationActions";
import ReactDOM from "react-dom";
import "./Navbar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownVisible: false,
      shouldUpdate: false
    }
    this.hideDropDown = this.hideDropDown.bind(this);
  }

  componentDidMount() {
    this.props.authenticateAndFetchCompany();
    browserHistory.listen(location => {
      this.setState({dropdownVisible: false})
      if (this.props.searchActive) {
        this.props.activateSearch(false);

      }
    });
    // Hide dropdown block on click outside the block
    window.addEventListener("click", this.hideDropDown, false);
  }

  hideDropDown = e => {
    const area = ReactDOM.findDOMNode(this.refs.area);
    if (!area.contains(e.target) && this.state.dropdownVisible) {
      this.setState({dropdownVisible: false})
    }
  }

  handleDropdown = () => {
    this.setState({
      dropdownVisible: !this.state.dropdownVisible
    });
  }

  dropdown = () => {
    return (
      <div className="nav-bar-dropdown">
        <ul>
          <Link to="/profile">
            <li>Edit Profile</li>
          </Link>
          <Link to="/settings">
            <li>Settings</li>
          </Link>
          <li onClick={this.props.logout}>Log out</li>
        </ul>
      </div>
    );
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
                    <span>
                      <div className="logo-wrapper"><img src="/images/icons/white-oec-logo.svg"/></div>
                      <div className="logo-wrapper">
                        <img src="/images/icons/black-market-logo.svg"/></div>
                    </span>
                  </Link>
                : null}
            </li>
            <li className="nav-bar-element">
              <Link to="/company">
                <span>Company</span>
              </Link>
            </li>
            <li className="nav-bar-element">
              <Link to="/country">
                <span>Country</span>
              </Link>
            </li>
            <li className="nav-bar-element">
              <Link to="/product">
                <span>Product</span>
              </Link>
            </li>
            {this.props.location.pathname === '/'
              ? null
              : <li className="nav-bar-element">
                <button onClick={() => activateSearch()}>
                  <span>Search</span>
                </button>
              </li>}
            {company
              ? <li ref="area" className="nav-bar-element company-name">
                  <div className="profile-image-wrapper" style={{
                    backgroundImage: `url(${company.profile_image})`
                  }}></div>
                  <Link to="/login">
                    <span>{company.name}</span>
                  </Link>
                  <span>
                    <div onClick={this.handleDropdown} className="arrow-down"></div>
                  </span>
                </li>
              : <li className="nav-bar-element">
                <Link to="/login">Log In</Link>
              </li>}
          </ul>
        </div>
        {this.state.dropdownVisible
          ? this.dropdown()
          : null}
          <div className={searchActive ? "search-visible" : "search-hidden"}>
            <Search></Search>
          </div>

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
    },
    logout: () => {
      dispatch(logout())
    }
  };
};

const mapStateToProps = state => {
  return {searchActive: state.searchActive, token: state.authentication.token, company: state.companyProfile.authCompany, loading: state.companyProfile.loading};
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
