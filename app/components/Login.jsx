import React from "react";
import {Link} from "react-router";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>LOGIN</h2>
                <div className="login-form-wrapper">
                    <form>
                        <input  placeholder="username"  type="text"/>
                        <input placeholder="password" type="text"/>
                        <button>
                            <Link to="/user/123">Submit</Link>
                        </button>
                    </form>
                    <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
                    <p>Forgot Password?</p>
                </div>
            </div>
        );
    }

}
