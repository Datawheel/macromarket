import React from "react";
import Sidebar from "components/Sidebar";
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
          <div>loading..</div>
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
    const continentId = country.id.substring(0, 2);
    const placeImg = country.flickr_link
      ? `/img/country/${country.id}.jpg`
      : `/img/country/${continentId}.jpg`;
    return (
      <div className="detailed-content-wrapper country">
        <div className="header-image-wrapper">

          <div className="background-image" style={{
            backgroundImage: `url(${placeImg})`
          }}></div>

        <div className="image-overlay-wrapper">
            <div className="image-overlay"></div>
            <div className="text-wrapper">
              <div className="section-wrapper">
                <h2>{country.name}</h2>
                <h4>{country.continent}</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="filter-wrapper">
          <div className="filter">
            <h4>Filter Products</h4>
          </div>
          <div className="filter">
            <h4>Filter Companies</h4>
          </div>
          <button>Go</button>
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
