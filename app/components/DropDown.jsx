import React from "react";

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  handleDropDown = () => {
    this.setState({
      visible: !this.state.visible
    });
  }

  select = item => {
    this.handleDropDown();
    this.props.select(item);
  }

  renderItems = () => {
    return (
      <ul>
        {this.props.items.map((item, i) => {
          return (
            <li onClick={this.select.bind(this, item)} key={i}>
              <div className="dropdown-item">{item}</div>
            </li>
          );
        })}
      </ul>
    );
  }

  render() {
    return (
      <div className="dropdown-container">
        <div className="selected-wrapper" onClick={this.handleDropDown}>{this.props.selected}</div>
        {!this.state.visible
          ? null
          : this.renderItems()
}
      </div>

    );
  }
}
