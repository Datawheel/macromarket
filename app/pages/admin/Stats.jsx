import React from "react";
import {connect} from "react-redux";
import {Tab, Tabs} from "@blueprintjs/core";
import StatPanel from "./StatPanel";
import PropTypes from "prop-types";
import "./Settings.css";
import "./Admin.css";

class Stats extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {router} = this.context;
    const {user, loading} = this.props.auth;
    if (!loading && user.role !== 2) {
      router.push("/login");
    }
  }

  render() {

    return (
      <div>
        <Tabs id="Tabs2Example" onChange={this.handleTabChange}>
          <Tab id="today" title="Today" panel={<StatPanel days={1} />} />
          <Tab id="last5" title="Last 5 days" panel={<StatPanel days={5} />} />
          <Tab id="last30" title="Last 30 days" panel={<StatPanel days={30} />} />
          <Tab id="all" title="All Time" panel={<StatPanel days={"all"} />} />
        </Tabs>
      </div>
    );
  }
}

Stats.contextTypes = {
  router: PropTypes.object
};

export default connect(state => ({auth: state.auth}))(Stats);
