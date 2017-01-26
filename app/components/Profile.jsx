import React from "react";
import {Link} from "react-router";

export default class Profile extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const userId = this.props.params.userId;
        return (
            <div>
                <h2>Profile</h2>

                <ul>

                    <li>
                        <Link to={'/user/' + userId + '/settings'}>Settings</Link>
                    </li>
                    <li>
                        <Link to={'/user/' + userId + '/inbox'}>Inbox</Link>
                    </li>
                    <li>
                        <Link to={'/user/' + userId + '/logout'}>Logout</Link>
                    </li>
                </ul>

            </div>
        );
    }

}
