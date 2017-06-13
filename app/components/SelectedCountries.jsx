import React from "react";
import {connect} from "react-redux";
import Select from 'react-select';
import {fetchCountries} from "../actions/countriesActions";
import {createTrade, deleteTradeByCountry} from "../actions/tradesActions";
import {countryInputChange, arrowRenderer, countryValueRenderer, countryOptionRenderer} from "../components/Dropdown";

class SelectedCountries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    }
  }

  componentWillMount() {
    this.props.fetchCountries();

  }

  addCountry = country => {
    const selectedCountries = []
    this.props.selectedCountries.map(country => {
      selectedCountries.push(country.name)

    })

    console.log(this.props.companyId, this.props.productId, country.value, this.props.tradeFlow, "HERERERERE")

    if (selectedCountries.length > 4) {
      this.setState({error: "You can only select 5 countries per product."});
    } else if (selectedCountries.includes(country.label)) {
      this.setState({error: "This country is already selected."});
    } else {
      this.setState({error: null});
      this.props.createTrade(this.props.companyId, this.props.productId, country.value, this.props.tradeFlow);
    }
  }

  deleteCountry = country => {
    this.setState({error: null});
    this.props.deleteTradeByCountry(this.props.companyId, this.props.productId, country.id, this.props.tradeFlow);
  }

  render() {
    const {countries, trades} = this.props;
    if (!countries || !trades) {
      return <div>Loading...</div>
    }
    const dropDownCountries = [];
    countries.map(continent => {
      let first = true;
      continent.values.map(country => {
        dropDownCountries.push({continent: continent.key, value: country.id, label: country.name, first});
        first = false;
      });
    });

    return (
      <div>
        <div className="countries-error error-wrapper">{this.state.error
            ? <p>{this.state.error}</p>
            : null}</div>
        <div>
          <Select onInputChange={countryInputChange} valueRenderer={countryValueRenderer} optionClassName={"dropdown-option"} optionRenderer={countryOptionRenderer} arrowRenderer={arrowRenderer} clearable={false} name="form-field-name" options={dropDownCountries} onChange={this.addCountry}/>
          <div className="selected-countries-wrapper">
            {this.props.selectedCountries.map((country, index) => {
              return (
                <div key={index} className="selected-country-outter">
                  <div className="selected-country">
                    <div>
                      <span>{country.name}
                      </span>
                      <div className="delete" onClick={this.deleteCountry.bind(this, country)}></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createTrade: (companyId, productId, countryId, tradeFlow) => {
      dispatch(createTrade(companyId, productId, countryId, tradeFlow));
    },
    deleteTradeByCountry: (companyId, productId, countryId, tradeFlow) => {
      dispatch(deleteTradeByCountry(companyId, productId, countryId, tradeFlow));
    },
    fetchCountries: () => {
      dispatch(fetchCountries());
    }
  };
};

const mapStateToProps = state => {
  return {
    trades: state.trades.settingsTrades,
    tradesLoading: state.trades.loading,
    tradesError: state.trades.error,
    countries: state.countries.countries,
    loading: state.countries.loading,
    error: state.countries.error || null
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectedCountries);
