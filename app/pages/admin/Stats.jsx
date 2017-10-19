import React from "react";
import {connect} from "react-redux";
import {browserHistory} from "react-router";
import {Tab2, Tabs2} from "@blueprintjs/core";
import StatPanel from "./StatPanel";
import "./Settings.css";
import "./Admin.css";

class Stats extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {user, loading} = this.props.auth;
    if (!loading && user.role !== 2) {
      browserHistory.push("/login");
    }
  }

  render() {

    return (
      <div>
        <Tabs2 id="Tabs2Example" onChange={this.handleTabChange}>
          <Tab2 id="today" title="Today" panel={<StatPanel days={1} />} />
          <Tab2 id="last5" title="Last 5 days" panel={<StatPanel days={5} />} />
          <Tab2 id="last30" title="Last 30 days" panel={<StatPanel days={30} />} />
          <Tab2 id="all" title="All Time" panel={<StatPanel days={"all"} />} />
        </Tabs2>
      </div>
    );
  }
}

export default connect(state => ({auth: state.auth}))(Stats);
