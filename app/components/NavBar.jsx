import React from "react";
import {Link} from "react-router";
import Search from "./Search.jsx";
import {connect} from "react-redux";
import {isAuthenticated} from "datawheel-canon";
import "./Navbar.css";

import {Popover, PopoverInteractionKind, Position} from "@blueprintjs/core";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchOpen: false
    };
  }

  componentDidMount() {
    this.props.isAuthenticated();
  }

  toggleSearch = () => this.setState({searchOpen: !this.state.searchOpen});

  render() {
    const {auth, activateSearch, searchActive} = this.props;
    const {loading, user} = auth;

    return (
      <div>
        <div className={this.props.location.pathname === "/" ? "home" : null}>
          <ul className="nav-bar">
            <li className="logo nav-bar-element">
              {this.props.location.pathname !== "/"
                ? <Link to="/">
                  <div className="logo-wrapper">
                    <img src="/images/icons/logos/macro-market.svg"/>
                  </div>
                  <div className="logo-wrapper">
                    <img className="market-logo" src="/images/icons/logos/black-market-logo.svg"/>
                  </div>
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
            { user
                ? <Popover
                    interactionKind={PopoverInteractionKind.HOVER}
                    popoverClassName="pt-popover-content-sizing user-popover"
                    position={Position.BOTTOM_RIGHT}
                  >
                    <li className="nav-bar-element nav-settings">
                      <Link to="/settings/">Settings</Link>
                    </li>
                    <div className="nav-bar-dropdown">
                      <Link to="/settings">Settings</Link>
                      <a className="" href="/auth/logout">Logout</a>
                    </div>
                  </Popover>
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
