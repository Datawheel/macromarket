import React from "react";
import {Link} from "react-router";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Welcome to OEC MARKETPLACE</h2>
                <label>Search</label>
                <input type="text"></input>
                <button>Submit</button >
            </div>
        );
    }
}
