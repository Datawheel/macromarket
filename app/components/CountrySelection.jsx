import React from "react";
import CountryDropdown from "./CountryDropdown.jsx";
import {connect} from "react-redux";
import {fetchCountries} from "../actions/countriesActions";

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
    const trade = {
      product_id: this.props.trade.product_id,
      country_id: country.id,
      trade_flow: this.props.trade.trade_flow
    };
    console.log(trade);
    this.props.addCountry(trade);
    this.setState(state => {
      state.saved = state.saved.concat([{
          country
        }]);
      return state;
    });
  }

  deleteCountry = country => {
    if (this.props.trade.countries.includes(country)) {
      this.setState(state => {
        state.deleted = state.deleted.concat([country.trade_id]);
        return state;
      });
      this.props.deleteCountry(country);
    }
    else {
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

    const allCountries = this.props.trade.countries.concat(this.state.saved);
    return (
      <div className="country-selection">
        <CountryDropdown select={this.addCountry} selected={""} items={this.props.countries}/>
        <div className="selected-countries-wrapper">
          {allCountries.map((trade, index) => {
            return (
              <div className="selected-country-outter">
                {!this.state.deleted.includes(trade.trade_id)
                  ? <div className="selected-country" key={index}><div>
                      <span>{trade.country.name} </span>
                      <div className="delete" onClick={this.deleteCountry.bind(this, trade)}></div>
                    </div></div>
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
