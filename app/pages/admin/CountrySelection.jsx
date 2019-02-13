import React from "react";
import PropTypes from "prop-types";
import {Classes, MenuItem, Intent} from "@blueprintjs/core";
import {MultiSelect} from "@blueprintjs/select";
import "pages/admin/TradeEdit.css";

class CountrySelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: props.countries
    };
  }

  getSelectedCountryIndex = country => this.state.countries.findIndex(t => t.id === country.id);
  isCountrySelected = country => this.state.countries.findIndex(c => c.id === country.id) > -1;

  renderCountry = (country, {handleClick, modifiers, query}) =>
    <MenuItem
      className={modifiers.active ? Classes.ACTIVE : ""}
      icon={this.isCountrySelected(country) ? "tick" : "blank"}
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
      const toast = this.context.toast.current;
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
    const {allCountries, onboardingPopup} = this.props;
    const {countries} = this.state;
    return (
      <MultiSelect
        itemRenderer={this.renderCountry}
        itemPredicate={this.filterCountry}
        items={allCountries.sort((a, b) => a.name && a.name.localeCompare(b.name))}
        noResults={<MenuItem disabled text="No results." />}
        onItemSelect={this.handleCountrySelect}
        // popoverProps={onboardingPopup ? {boundary: ".slider-wrapper"} : {}}
        popoverProps={onboardingPopup ? {boundary: "viewport", portalClassName: "onboarding-country-popover", portalContainer: document.querySelector(".slider-wrapper")} : {}}
        resetOnClose={true}
        resetOnSelect={true}
        selectedItems={countries}
        tagInputProps={{tagProps: a => ({className: a.props.className}), onRemove: this.deleteTag, placeholder: "Add a country", inputProps: {placeholder: "Add a country"}}}
        tagRenderer={this.renderTag}
      />
    );
  }
}

CountrySelection.contextTypes = {
  toast: PropTypes.object
};

export default CountrySelection;
