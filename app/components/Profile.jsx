import React from "react";
import Sidebar from "./DetailedSidebar.jsx";
import {Link} from "react-router";
import {connect} from "react-redux";
import {fetchUser} from '../actions/profileActions';

class userWithId extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const id = this.props.params.userId;
        this.props.fetchUser(id);
    }

    render() {
        const {user, loading, error} = this.props;
        console.log(user);
        if (loading || !user) {
            return (
                <div className="detailed-content-wrapper">
                    <div>loading...</div>
                </div>
            )
        }

        if (error) {
            return (
                <div className="detailed-content-wrapper">
                    <h2>Error</h2>
                    <p>Please refresh the page.</p>
                </div>
            )
        }

        return (
            <div>
                <h2>{user.email}
                    Profile</h2>
                <ul>
                    <Link to={'/user/' + user.id + '/inbox'}>
                        <li>Inbox</li>
                    </Link>
                    <Link to={'/user/' + user.id + '/settings'}>
                        <li>Settings</li>
                    </Link>
                    <form action="/api/logout" method="get">
                        <input type="submit" value="Logout" name="Submit" />
                    </form>
                </ul>

            </div>

        );
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: (id) => {
            dispatch(fetchUser(id))
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.userProfile.user,
        loading: state.userProfile.loading,
        error: state.userProfile.error || null
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(userWithId)
