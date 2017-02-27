import React from "react";

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="sidebar-wrapper">
        <div className="sidebar">
          <div className="sidebar-inner">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }

}
