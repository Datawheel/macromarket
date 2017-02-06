import React from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import {fetchCompanies} from '../actions/companiesActions';

class Company extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchCompanies();
  }

  render() {
    const {companies, loading, error} = this.props;
    if(loading || !companies){
      return (
        <div className="detailed-content-wrapper">
          <div>loading...</div>
        </div>
      )
    }

    if(error){
      return (
        <div className="detailed-content-wrapper">
          <h2>Error</h2>
          <p>Please refresh the page.</p>
        </div>
      )
    }

    return (<div><p>List of Companies </p>

      {companies.map((company) => {
        return(
        <Link key={company.id} to={'/company/' + company.id}>
          <p>{company.name}</p>
        </Link> );
      })}
    </div>);
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    fetchCompanies: () => {
      dispatch(fetchCompanies())
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    companies: state.companies.companies,
    loading: state.companies.loading,
    error: state.companies.error || null
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Company)
