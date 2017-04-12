import React from "react";

export default class CountryDropdown extends React.Component {
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
        {Object.keys(this.props.items).map(contient => {
          const continentId = this.props.items[contient].values[0].id.slice(0, 2);

          const colorName = `${this.props.items[contient].key.toLowerCase().replace(" ", "-")}-color`;
          return (
            <div key={contient}>
              <div  className={`${colorName} colored-wrapper dropdown-item`}>
                <div className={`${colorName} icon-wrapper`}>
                  <div className={`${colorName} darker-color`}></div>
                  <img src={`/img/flags/country_${continentId}.png`}/></div>
                <div>
                  <p>{this.props.items[contient].key}</p>
                </div>
              </div>
              {this.props.items[contient].values.map((country, index) => {
                const id = country.id;
                return (
                  <div className="item-wrapper" onClick={this.select.bind(this, country)} key={index}>
                    <img className="flag" src={`/img/flags/country_${id}.png`}></img>
                    <p className="country-name">{country.name}</p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </ul>
    );
  };

  render() {
    return (
      <div className="dropdown-container">
        {this.props.items
          ? <div className="selected-wrapper" onClick={this.handleDropDown}>Select countries
              <span className="chevron down"></span>
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
