import React from "react";
import "./TradeEdit.css";
import {Classes, MenuItem, Intent, Position, Toaster} from "@blueprintjs/core";
import {MultiSelect} from "@blueprintjs/labs";

class CountrySelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: props.countries
    };
  }

  getSelectedCountryIndex = country => this.state.countries.findIndex(t => t.id === country.id);
  isCountrySelected = country => this.state.countries.findIndex(c => c.id === country.id) > -1;

  renderCountry = ({handleClick, isActive, item: country}) =>
    <MenuItem
      className={isActive ? Classes.ACTIVE : ""}
      iconName={this.isCountrySelected(country) ? "tick" : "blank"}
      key={country.id}
      label={country.id_3char ? country.id_3char.toUpperCase() : ""}
      onClick={handleClick}
      text={`${country.name}`}
      shouldDismissPopover={false}
    />

  handleCountrySelect = country => {
    if (!this.isCountrySelected(country)) {
      this.selectCountry(country);
    }
    else {
      this.deselectCountry(this.getSelectedCountryIndex(country));
    }
  }

  selectCountry = country => {
    const countries = [...this.state.countries, country];
    if (countries.length > 10) {
      const toast = Toaster.create({className: "company-saved-toast", position: Position.TOP_CENTER});
      toast.show({
        timeout: 10000,
        message: "Max origins exceeded. You may only list a product on 10 country pages.",
        intent: Intent.DANGER
      });
    }
    else {
      this.props.selectCountry(countries);
      this.setState({countries});
    }
  }

  deselectCountry = index => {
    const countries = this.state.countries.filter((_country, i) => i !== index);
    this.props.selectCountry(countries);
    this.setState({countries});
  }

  deleteTag = (el, index) => {
    const countries = this.state.countries.filter((_country, i) => i !== index);
    this.props.selectCountry(countries);
    this.setState({countries});
  }

  renderTag = f => {
    const continent = f.continent.toLowerCase().replace(" ", "-");
    return <span className={`color-${continent}`}>{f.name}</span>;
  }

  filterCountry = (query, country) => `${country.name.toLowerCase()}`.indexOf(query.toLowerCase()) >= 0;

  render() {
    const {allCountries} = this.props;
    const {countries} = this.state;

    return (
      <MultiSelect
        items={allCountries.sort((a, b) => a.name.localeCompare(b.name))}
        itemRenderer={this.renderCountry}
        itemPredicate={this.filterCountry}
        noResults={<MenuItem disabled text="No results." />}
        onItemSelect={this.handleCountrySelect}
        tagInputProps={{tagProps: a => ({className: a.props.className}), onRemove: this.deleteTag, placeholder: "Add a country"}}
        tagRenderer={this.renderTag}
        selectedItems={countries}
        resetOnClose={true}
        resetOnSelect={true}
      />
    );
  }
}
export default CountrySelection;
