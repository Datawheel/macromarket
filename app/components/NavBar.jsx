import React from "react";
import {Link} from "react-router";

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.toggleSearch = props.toggleSearch;
    }

    render() {

        return (
            <div>

                <ul className="nav-bar">
                    <li className="logo nav-bar-element">
                        <Link to="/">OECM LOGO</Link>
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
