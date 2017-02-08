import React from "react";
import {Link} from "react-router";

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <form method="post" action="/api/signup">
        <h2 class="form-signin-heading">Create an account</h2>
        <label>Email</label>
        <input type="text" name="email" class="form-control" placeholder="Username"></input>
        <label>Password</label>
        <input type="password"  name="password" class="form-control" placeholder="Password" ></input>
        <label> Repeat Password</label>
        <input type="password"  name="password2" class="form-control" placeholder="Repeat Password"></input>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
      </form>
    </div>)

  }
}
