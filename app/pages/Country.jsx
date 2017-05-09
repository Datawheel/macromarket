import React from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import {fetchCountries} from '../actions/countriesActions';

class Country extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchCountries();
  }

  render() {
    const {countries, loading, error} = this.props;
    if (loading || !countries) {
      return (
        <div className="detailed-content-wrapper">
          <div>loading...</div>
        </div>
      )
    }

    if (error) {
      return (
        <div className="detailed-content-wrapper">
          <h2>Error</h2>
          <p>Please refresh the page.</p>
        </div>
      )
    }

    return (
      <div>
        <p>List of Countries
        </p>

        {countries.map((country) => {
          return (
            <Link key={country.id} to={'/country/' + country.id}>
              <p>{country.name}</p>
            </Link>
          );
        })}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCountries: () => {
      dispatch(fetchCountries())
    }
  }
}

const mapStateToProps = state => {
  return {
    countries: state.countries.countries,
    loading: state.countries.loading,
    error: state.countries.error || null
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Country)
