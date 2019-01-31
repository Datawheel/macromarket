import React from "react";
import {Suggest} from "@blueprintjs/select";
import {Classes, MenuItem} from "@blueprintjs/core";
import "pages/admin/Settings.css";
import "pages/admin/Admin.css";
import "@blueprintjs/select/lib/css/blueprint-select.css";


class CountrySearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCountry: this.props.country ? this.props.country.name : "",
      userChanged: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.country !== nextProps.country) {
      this.setState({selectedCountry: nextProps.country ? nextProps.country.name : ""});
    }
  }

  renderCountry = (country, {handleClick, modifiers, query}) =>
    <MenuItem
      className={modifiers.active ? Classes.ACTIVE : ""}
      disabled={modifiers.disabled}
      key={country.id}
      onClick={handleClick}
      text={`${country.name}`}
      shouldDismissPopover={false}
      label={country.id_3char ? country.id_3char.toUpperCase() : ""}
    />

  filterCountries = (query, countries) =>
    countries.filter(p =>
      `${p.id_3char} ${p.name.toLowerCase()}`.indexOf(query.toLowerCase()) >= 0
    );


  selectCountry = country => {
    this.props.selectCountry(country);
    this.setState({selectedCountry: country.name, userChanged: true});
  }

  render() {
    let {countries} = this.props;
    const {selectedCountry} = this.state;
    countries = countries.sort((a, b) => b.name - a.name);

    return <Suggest
      inputProps={{value: selectedCountry, onChange: e => this.setState({selectedCountry: e.target.value})}}
      inputValueRenderer={c => c.name}
      itemRenderer={this.renderCountry}
      itemListPredicate={this.filterCountries}
      items={countries.filter(p => p.id && p.name && p.id.length === 5)}
      onItemSelect={this.selectCountry}
      resetOnSelect={true}
      resetOnClose={true}
    />;
  }
}

export default CountrySearch;
