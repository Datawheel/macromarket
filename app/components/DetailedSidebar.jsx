import React from "react";
import {Link} from "react-router";

export default class DetailedSidebar extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="sidebar-wrapper">
                <div className="sidebar">
                    {this.props.children}
                </div>
            </div>
        );
    }

}
