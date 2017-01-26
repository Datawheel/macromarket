import React from "react";
import {Link} from "react-router";

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>Sign Up
        <div className="form-wrapper">
          <form>
              <input  placeholder="username"  type="text"/>
              <input placeholder="password" type="text"/>
                <input placeholder="repeat password" type="text"/>
              <button>
                  Submit
              </button>
          </form>
        </div>
      </div>);
  }
}
