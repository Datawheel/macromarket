import React from "react";
import Dropdown from "./DropDown.jsx";

export class CountrySelection extends React.Component {
  constructor(props) {
    super(props);
    this.content = this.props.content;
    this.state = {
      selectedCountries: []
    };
  }

  selectCountries = country => {
    this.setState(state => {
      state.selectedCountries = state.selectedCountries.concat([country]);
      return state;
    });

    this.props.addTrade(country, this.props.trade);
  }

  render() {
    let selected = [];
    if (this.props.savedCountries) {
      selected = this.state.selectedCountries.concat(this.props.savedCountries);
    }


    return (
      <div>
        <p>{this.props.trade.name}</p>
        <Dropdown select={this.selectCountries} selected={selected} items={this.props.countries}/>
        <div className="selections">
          {selected.map((country, index) => {
            return (
              <div key={index}>
                {country ? <p>{country.name}</p> : null}

              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
