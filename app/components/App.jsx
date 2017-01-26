import React from "react";
import {Link, browserHistory} from "react-router";

import NavBar from "./NavBar";
import Search from "./Search";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchHidden: true
        }
        browserHistory.listen(location => {
            this.state = {
                searchHidden: true
            };
        });

    }

    toggleSearch = () => {
        return this.setState({
            searchHidden: !this.state.searchHidden
        });
    }

    render() {
        return (
            <div>
            <NavBar toggleSearch={this.toggleSearch} location={this.props.location}></NavBar>
            <div className="main-content">
                <div className={this.state.searchHidden
                    ? "hide"
                    : null}>
                <Search></Search></div>
            </div>

            {this.props.children}
        </div>
        );
    }

}
