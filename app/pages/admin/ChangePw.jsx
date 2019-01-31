import React from "react";
import {connect} from "react-redux";
import {Intent} from "@blueprintjs/core";
import {isAuthenticated} from "@datawheel/canon-core";
import api from "helpers/api.js";
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
    const toast = this.context.toast.current;
    toast.show({message, intent});
  }

  save = () => {
    const {router} = this.props;
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
          <div className="bp3-form-group">
            <label className="bp3-label" htmlFor="pw-original">
              <span className="bp3-icon bp3-icon-lock"></span> Current password
            </label>
            <div className="bp3-form-content">
              <input name="password" onChange={this.handleChange} id="pw-original" className="bp3-input" type="password" dir="auto" />
            </div>
          </div>

          <hr />

          <div className="bp3-form-group">
            <label className="bp3-label" htmlFor="pw-new1">
              <span className="bp3-icon bp3-icon-lock"></span> New password
            </label>
            <div className="bp3-form-content">
              <input name="password1" onChange={this.handleChange} id="pw-new1" className="bp3-input" type="password" dir="auto" />
              <div className="bp3-form-helper-text">Must be at least 5 digits.</div>
            </div>
            <div className="bp3-form-content">
              <input name="password2" onChange={this.handleChange} id="pw-new2" className="bp3-input" type="password" dir="auto" />
            </div>
          </div>

          <div>
            <button type="button" className="bp3-button bp3-intent-success" onClick={this.save}>
              Save
              <span className="bp3-icon-standard bp3-icon-arrow-right bp3-align-right"></span>
            </button>
          </div>
        </div>

      </div>
    );
  }
}

ChangePw.contextTypes = {
  toast: PropTypes.object
};

const mapDispatchToProps = dispatch => ({
  isAuthenticated: () => {
    dispatch(isAuthenticated());
  }
});

export default connect(state => ({auth: state.auth}), mapDispatchToProps)(ChangePw);
