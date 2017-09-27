import React from "react";
import {connect} from "react-redux";
import {browserHistory} from "react-router";
import "./Admin.css";
import "./Settings.css";

class CompanySummary extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentWillMount() {
  //   const {company} = this.props;
  //   if (!company) {
  //     browserHistory.push("/settings/");
  //   }
  // }

  render() {
    const {company} = this.props;
    return (
      <div>
        <h2>{company.name}</h2>
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  company: state.data.company
});

export default connect(mapStateToProps)(CompanySummary);
