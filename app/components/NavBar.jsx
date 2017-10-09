import React from "react";
import {Link} from "react-router";
import Search from "./Search.jsx";
import {connect} from "react-redux";
import {isAuthenticated} from "datawheel-canon";
import "./Navbar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchOpen: false,
      dropdownVisible: false,
      shouldUpdate: false
    };
  }

  componentDidMount() {
    this.props.isAuthenticated();
    // this.props.authenticateAndFetchCompany();
    // browserHistory.listen(location => {
    //   this.setState({dropdownVisible: false})
    //   this.props.authenticateAndFetchCompany();
    //   if (this.props.searchActive) {
    //     this.props.activateSearch(false);
    //
    //   }
    // });
    // Hide dropdown block on click outside the block
    // window.addEventListener("click", this.hideDropDown, false);
  }

  hideDropDown = e => {
    const area = this.area;
    if (area) {
      if (!area.contains(e.target) && this.state.dropdownVisible) {
        this.setState({dropdownVisible: false});
      }
    }
  }

  logout = () => {
    this.handleDropdown();
    this.props.logout();
  }

  handleDropdown = () => {
    this.setState({
      dropdownVisible: !this.state.dropdownVisible
    });
  }

  closeSearch = () => {
    this.props.activateSearch(false);
  }

  openSearch = () => {
    this.props.activateSearch(true);
    this.props.setSearch({keyword: "", filter: "All"});
  }

  dropdown = () =>
    <div  className={this.props.location.pathname !== "/" ? "nav-bar-dropdown" : "home-nav nav-bar-dropdown"}>
      <ul>
        <li>
          <Link to="/settings/user">Settings</Link>
        </li>
        <li>
          <Link to="/settings/company">Company</Link>
        </li>
        <li>
          <a className="" href="/auth/logout">Logout</a>
        </li>
      </ul>
    </div>;

  toggleSearch = () => this.setState({searchOpen: !this.state.searchOpen});

  render() {
    const {auth, activateSearch, searchActive, company} = this.props;
    const {loading, user} = auth;

    return (
      <div>
        <div className={this.props.location.pathname === "/"
          ? "home"
          : null}>
          <ul className="nav-bar">
            <li className="logo nav-bar-element">
              {this.props.location.pathname !== "/"
                ? <Link to="/">
                  <span>
                    <div className="logo-wrapper"><img src="/images/icons/logos/macro-market.svg"/></div>
                    <div className="logo-wrapper">
                      <img className="market-logo" src="/images/icons/logos/black-market-logo.svg"/></div>
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
            {company
              ? <li
                ref={li => {
                  this.area = li;
                }}
                className="nav-bar-element company-name">
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
              : user
                ? <li className="nav-bar-element nav-settings">
                  <Link to="/settings/">Settings</Link>
                  <span>
                    <div onClick={this.handleDropdown} className="arrow-down"></div>
                  </span>
                </li>
                : <li className="nav-bar-element">
                  <Link to="/login">Log In</Link>
                </li>}
            {this.props.location.pathname === "/"
              ? null
              : <li className="nav-bar-element search-icon-wrapper">
                <button type="button" className="pt-button pt-minimal pt-icon-search" onClick={() => {activateSearch(true)}}></button>
              </li>}
          </ul>
        </div>
        {this.state.dropdownVisible
          ? this.dropdown()
          : null}
        <Search toggleSearch={activateSearch} searchActive={searchActive}></Search>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  activateSearch: activeState => {
    dispatch({type: "ACTIVATE_SEARCH", data: activeState});
  },
  // setSearch: query => {
  //   dispatch(setSearch(query));
  // },
  isAuthenticated: () => {
    dispatch(isAuthenticated());
  }
});

export default connect(state => ({auth: state.auth, searchActive: state.searchActive}), mapDispatchToProps)(NavBar);
