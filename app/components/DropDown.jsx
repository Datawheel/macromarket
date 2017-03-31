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

  findName = id => {
    let result = "";
    this.props.items.map(item => {
      if (item.id === id) {
        result = item.name;
      }
    });
    return result;
  };

  renderItems = () => {
    return (
      <ul>
        {this.props.items.map(item => {
          return (
            <li onClick={this.select.bind(this, item)} key={item.id}>
              <div className="dropdown-item">{item.name}</div>
            </li>
          );
        })}
      </ul>
    );
  };

  render() {
    return (
      <div className="dropdown-container">
        {this.props.items ?
        <div className="selected-wrapper" onClick={this.handleDropDown}>Select countries</div> : null}
        {!this.state.visible
          ? null
          : this.renderItems()
}
      </div>

    );
  }
}
