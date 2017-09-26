import React from "react";
import {connect} from "react-redux";
import "./Admin.css";
import "./Settings.css";

class CompanySummary extends React.Component {
  constructor(props) {
    super(props);
  }

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
