import React from "react";
import {Link} from "react-router";

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.toggleSearch = props.toggleSearch;
    }

    render() {

        return (
            <div className={this.props.location.pathname === '/' ? "home" : null}>

                <ul className="nav-bar">
                    <li className="logo nav-bar-element">
                        <Link to="/">
                          <img className="oec-logo" src="./assets/icons/white-oec-logo.svg"/>
                        </Link>
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
                            <button onClick={this.toggleSearch}>Search</button>
                        </li>}

                    <li className="nav-bar-element">
                        <Link to="/login">Log In</Link>
                    </li>
                </ul>
            </div>
        );
    }
}
