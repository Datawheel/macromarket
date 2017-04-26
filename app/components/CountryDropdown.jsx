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


  renderItems = () => {
    return (
      <ul>
        {Object.keys(this.props.items).map(contient => {
          const continentId = this.props.items[contient].values[0].id.slice(0, 2);
          const colorName = `color-${this.props.items[contient].key.toLowerCase().replace(" ", "-")}`;
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
          ? <div className="selected-wrapper" onClick={this.handleDropDown}>
            {this.props.selected ? <p>{this.props.selected}</p> : <p>Select countries</p>}
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

export class ProductDropdown extends React.Component {
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
        {Object.keys(this.props.items).map(key => {
          const id = this.props.items[key].key;
          const colorName = `color-${this.props.items[key].key.toLowerCase().replace(" ", "-")}`;
          return(
            <div onClick={this.select.bind(this, this.props.items[key])}  key={key}>
              <div  className={` colored-wrapper dropdown-item`}>
                <div className={`${colorName} icon-wrapper`}>
                  <div className={`${colorName}`}>
                    <img className="product_icon" src={`/img/product_icon/hs_${id}.png`}></img>
                  </div>
                  </div>
                <div>
                  <p>{this.props.items[key].name}</p>
                </div>
              </div>
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
          ? <div className="selected-wrapper" onClick={this.handleDropDown}>
          {this.props.selected ? <p>{this.props.selected}</p> : <p>Select countries</p>}
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
