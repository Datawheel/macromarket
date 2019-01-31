import React from "react";
import "./Sidebar.css";
export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="sidebar-wrapper">
        <div className="sidebar">
          <div className="sidebar-inner">
            <div>{this.props.children}</div>
          </div>
        </div>
      </div>
    );
  }
}
