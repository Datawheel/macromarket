import React from "react";
import {Link} from "react-router";
import {toggleSearch} from "../actions/searchActions";
import Search from "./Search.jsx";
import {connect} from "react-redux";
import {browserHistory} from "react-router";
import oecLogo from "../img/icons/white-oec-logo.svg";
import marketLogo from "../img/icons/black-market-logo.svg";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    browserHistory.listen(location => {
      if (this.props.searchVisible) {
        this.props.toggleSearch();
      }

    });
  }

  render() {
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
                <button onClick={this.props.toggleSearch}>Search</button>
              </li>}

            <li className="nav-bar-element">
              <Link to="/login">Log In</Link>
            </li>
          </ul>
        </div>
        {this.props.searchVisible
          ? <Search></Search>
          : null}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleSearch: () => {
      dispatch(toggleSearch());
    }
  };
};

const mapStateToProps = state => {
  return {searchVisible: state.search.visible};
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
