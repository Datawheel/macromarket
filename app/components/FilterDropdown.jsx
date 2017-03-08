import React from "react";

export default class FilterDropdown extends React.Component {
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
  };

  render() {
    return (
      <div onClick={this.handleDropDown} className="filter-dropdown-container dropdown-container">
        {this.props.items
          ? <div className="selected-wrapper">
              <p className="selected">{this.props.selected}</p>
                {!this.state.visible
                  ? <span className="chevron bottom"></span>
                  : <span className="chevron top"></span> }
            </div>
          : null}
        {!this.state.visible
          ? null
          : this.renderItems()
        }
      </div>

    );
  }
}
