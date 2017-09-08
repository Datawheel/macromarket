import React from "react";
import "./TradeEdit.css";
import {MenuItem} from "@blueprintjs/core";
import {MultiSelect} from "@blueprintjs/labs";

class TradeEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: []
    };
  }

  getSelectedCountryIndex = country => this.state.countries.findIndex(t => t.id === country.id);
  isCountrySelected = country => this.state.countries.findIndex(c => c.id === country.id) > -1;

  renderCountry = p => {
    const {handleClick, isActive, item: country} = p;

    return (
      <MenuItem
        iconName={this.isCountrySelected(country) ? "tick" : "blank"}
        key={country.id}
        label={country.id_3char ? country.id_3char.toUpperCase() : ""}
        onClick={handleClick}
        text={`${country.name}`}
        shouldDismissPopover={false}
      />
    );
  }

  handleCountrySelect = country => {
    if (!this.isCountrySelected(country)) {
      this.selectCountry(country);
    }
    else {
      this.deselectCountry(this.getSelectedCountryIndex(country));
    }
  }

  selectCountry = country => {
    console.log(country);
    this.setState({countries: [...this.state.countries, country]});
  }

  deselectCountry = index => {
    this.setState({countries: this.state.countries.filter((_country, i) => i !== index)});
  }

  render() {
    const {countries: allCountries} = this.props;
    const {countries} = this.state;
    return (
      <div className="trade">
        <div className="trade-product">
          013454
        </div>
        <div className="trade-dest">
          USA, GBR
        </div>
        <div className="trade-origin">
          <MultiSelect
            items={allCountries}
            itemRenderer={this.renderCountry}
            noResults={<MenuItem disabled text="No results." />}
            onItemSelect={this.handleCountrySelect}
            tagInputProps={{tagProps: a => ({className: a.props.className})}}
            tagRenderer={f => <span className={`color-${f.continent.toLowerCase().replace(" ", "-")}`}>{f.name}</span>}
            selectedItems={countries}
          />
        </div>
        <div className="trade-controls">
          <span className="pt-icon-standard pt-icon-delete"></span>
        </div>
      </div>
    );
  }
}
export default TradeEdit;
