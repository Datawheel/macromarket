import React from "react";
import {connect} from "react-redux";
import Select from 'react-select';
import {fetchCountries} from "../actions/countriesActions";
import {countryInputChange, arrowRenderer, countryValueRenderer, countryOptionRenderer} from "../components/Dropdown";

class CountrySelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deleted: [],
      saved: []
    }
  }

  componentWillMount() {
    this.props.fetchCountries();
  }

  addCountry = country => {
    if (!this.props.trade.countries.includes(country)) {
      this.props.createTrade(this.props.trade.product_id, country.value, this.props.tradeFlow);
      country.name = country.label;
      this.setState(state => {
        state.saved = state.saved.concat([
            country
          ]);
        return state;
      });
    }
  }

  deleteCountry = country => {
    console.log(country, "DELETE COUNTrY");
    if (this.props.trade.countries.includes(country)) {
      this.setState(state => {
        state.deleted = state.deleted.concat([country.trade_id]);
        return state;
      });
      this.props.deleteTrade(this.props.trade.product_id, country.id, this.props.tradeFlow);
    } else {
      const index = this.state.saved.indexOf(country);
      this.setState(state => {
        state.saved = state.saved.filter(country => {
          return state.saved.indexOf(country) !== index;
        });
        return state;
      });
    }
  }

  render() {

    const {countries, loading, error} = this.props;
    console.log(this.props, "ASDFSDFSDF");
    if (loading || !countries) {
      return (
        <div className="detailed-content-wrapper">
          <div>loading...</div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="detailed-content-wrapper">
          <h2>Error</h2>
          <p>Please refresh the page.</p>
        </div>
      );
    }

    const dropDownCountries = [];
    countries.map(continent => {
      let first = true;
      continent.values.map(country => {
        dropDownCountries.push({continent: continent.key, value: country.id, label: country.name, first});
        first = false;
      });
    });

    console.log(this.props.trade, ":SDFKJD");
    const allCountries = this.props.trade.countries.concat(this.state.saved);
    console.log(allCountries, "SDFSDJKFHSLDHFILUESUU&&&&&");

    return (
      <div className="country-selection">
        <Select onInputChange={countryInputChange} valueRenderer={countryValueRenderer} optionClassName={"dropdown-option"} optionRenderer={countryOptionRenderer} arrowRenderer={arrowRenderer} clearable={false} name="form-field-name" options={dropDownCountries} onChange={this.addCountry}/>
        <div className="selected-countries-wrapper">
          {allCountries.map((trade, index) => {
            return (
              <div className="selected-country-outter">
                {!this.state.deleted.includes(trade.trade_id)
                  ?  <div className="selected-country" key={index}>
                      <div>
                        <span>{trade.name}
                        </span>
                        <div className="delete" onClick={this.deleteCountry.bind(this, trade)}></div>
                      </div>
                    </div>
                  : null}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCountries: () => {
      dispatch(fetchCountries());
    }
  };
};

const mapStateToProps = state => {
  return {
    countries: state.countries.countries,
    loading: state.countries.loading,
    error: state.countries.error || null
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CountrySelection);
