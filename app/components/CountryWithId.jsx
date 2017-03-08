import React from "react";
import Sidebar from "./Sidebar.jsx";
import {Link} from "react-router";
import {connect} from "react-redux";
import {fetchCountry} from '../actions/countryActions';

class CountryWithId extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const id = this.props.params.countryWithId;
    this.props.fetchCountry(id);
  }


  render() {
    const {country, loading, error} = this.props;

    if (loading || !country) {
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
      )
    }

    return (
      <div className="detailed-content-wrapper country">
        <div className="header-image-wrapper">
          <img src="https://www.flickr.com/photos/47563830@N06/8034675814/"/>
          <div className="image-overlay-wrapper">
            <h3>{country.name}</h3>
            <h4>{country.continent}</h4>
          </div>
        </div>
      </div>
    );
  }

}

const mapDispatchToProps = dispatch => {
  return {
    fetchCountry: id => {
      dispatch(fetchCountry(id))
    }
  };
}

const mapStateToProps = state => {
  return {
    country: state.countryProfile.country,
    loading: state.countryProfile.loading,
    error: state.countryProfile.error || null
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryWithId)
