import React from "react";
import {connect} from "react-redux";
import api from "../../api.js";
import "./Settings.css";
import "./Admin.css";

class ChangePw extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.props.isAuthenticated();
  // }


  render() {

    return (
      <div>
      Coming soon...
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  isAuthenticated: () => {
    // dispatch(isAuthenticated());
  }
});

export default connect(state => ({auth: state.auth}), mapDispatchToProps)(ChangePw);
