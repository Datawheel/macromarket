import React from "react";
import {connect} from "react-redux";
import "./Admin.css";
import "./Settings.css";

class CompanySummary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>My Companies</h2>
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.authentication.user
});

export default connect(mapStateToProps)(CompanySummary);
