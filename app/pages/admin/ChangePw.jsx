import React from "react";
import {connect} from "react-redux";
import {Intent, Position, Toaster} from "@blueprintjs/core";
import {isAuthenticated} from "@datawheel/canon-core";
import api from "../../api.js";
import PropTypes from "prop-types";
import "./Settings.css";
import "./Admin.css";

class ChangePw extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      password1: "",
      password2: "",
      error: ""
    };
  }

  // componentDidMount() {
  //   this.props.isAuthenticated();
  // }

  handleChange = e => {
    e.target.value;
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  notify(message, intent) {
    const toast = Toaster.create({
      className: "company-saved-toast",
      position: Position.TOP_CENTER
    });
    toast.show({message, intent});
  }

  save = () => {
    const {router} = this.context;
    const {password, password1, password2} = this.state;
    const {user} = this.props.auth;
    if (password1.length < 5 || password2.length < 5) {
      this.notify("Password must be longer than 5 characters", Intent.DANGER);
      return;
    }
    if (password1 !== password2) {
      this.notify("Passwords must match", Intent.DANGER);
      return;
    }
    const config = {withCredentials: true};
    const data = {
      userId: user.id,
      oldPassword: password,
      newPassword: password1
    };
    api.post("/api/auth/changePw", data, config)
      .then(() => {
        this.notify("Password successfully changed.", Intent.SUCCESS);
        setTimeout(() => {
          router.push("/login");
        }, 3000);
        // console.log(response.data);
        // dispatch(receiveSaveUser(response.data));
      })
      .catch(() => {
        console.log("The password you entered is incorect.");
      });

  }

  render() {

    return (
      <div>
        <div>
          <div className="pt-form-group">
            <label className="pt-label" htmlFor="example-form-group-input-a">
              <span className="pt-icon pt-icon-lock"></span> Current password
            </label>
            <div className="pt-form-content">
              <input name="password" onChange={this.handleChange} id="example-form-group-input-a" className="pt-input" type="password" dir="auto" />
            </div>
          </div>

          <hr />

          <div className="pt-form-group">
            <label className="pt-label" htmlFor="example-form-group-input-a">
              <span className="pt-icon pt-icon-lock"></span> New password
            </label>
            <div className="pt-form-content">
              <input name="password1" onChange={this.handleChange} id="example-form-group-input-a" className="pt-input" type="password" dir="auto" />
              <div className="pt-form-helper-text">Must be at least 5 digits.</div>
            </div>
            <div className="pt-form-content">
              <input name="password2" onChange={this.handleChange} id="example-form-group-input-a" className="pt-input" type="password" dir="auto" />
            </div>
          </div>

          <div>
            <button type="button" className="pt-button pt-intent-success" onClick={this.save}>
              Save
              <span className="pt-icon-standard pt-icon-arrow-right pt-align-right"></span>
            </button>
          </div>
        </div>

      </div>
    );
  }
}

ChangePw.contextTypes = {
  router: PropTypes.object
};

const mapDispatchToProps = dispatch => ({
  isAuthenticated: () => {
    dispatch(isAuthenticated());
  }
});

export default connect(state => ({auth: state.auth}), mapDispatchToProps)(ChangePw);
