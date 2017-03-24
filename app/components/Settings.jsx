import React from "react";
import {connect} from "react-redux";
import {browserHistory} from "react-router";
import {uploadImage, deleteCompany} from "../actions/userActions";
import Sidebar from "./Sidebar.jsx";
import CompanyDataForm from "./CompanyDataForm.jsx";
import ProductSelectionForm from "./ProductSelectionForm.jsx";
import CountrySelectionForm from "./CountrySelectionForm.jsx";
import {authenticateAndFetchCompany} from "../actions/companyActions";
import {deleteTrades} from "../actions/tradesActions";
import {createTrades} from "../actions/tradesActions";
import {Link} from "react-router";
import {fetchProductsByCompany} from "../actions/tradesActions";

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slide: 0,
      products: [],
      trades: [],
      tradesToDelete: []
    };
  }

  componentWillMount() {
    if (this.props.token) {
      this.props.authenticateAndFetchCompany(this.props.token);
    }
    if (!this.props.token) {
      browserHistory.push("/login");
    }
  }

  componentDidUpdate = () => {
    const {token, deleted} = this.props;
    if (!token) {
      browserHistory.push("/login");
    }

    if (deleted) {
      browserHistory.push("/login");
      this.setState({trade: []});
      this.props.dispatch({type: "COMPANY_AUTH_FULFILLED", data: null});
    }
  }

  saveProducts = products => {
    this.setState(state => {
      state.products = state.products.concat(products);
      return state;
    });
    this.nextSlide();
  }

  nextSlide = () => {
    this.setState({
      slide: this.state.slide + 1
    });
  }

  addTrade = trade => {
    this.setState(state => {
      state.trades = state.trades.concat(trade);
      return state;
    });
  }

  deleteCompany = () => {
    this.props.deleteCompany(this.props.user.company_id);
  }

  createTrades = () => {
    if (this.props.company) {
      this.props.createTrades(this.state.trades, this.props.company.id);
    }
    else {
      this.props.createTrades(this.state.trades, this.props.companySaved);
    }
    this.nextSlide();
  }

  render() {
    const {user, loading, error, company, trades} = this.props;
    if (error) {
      return (
        <div className="detailed-content-wrapper">
          <h2>Error</h2>
          <p>Please refresh the page.</p>
        </div>
      );
    }

    //  loading user
    if (loading || !user) {
      return (
        <div className="detailed-content-wrapper">
          <div>loading...</div>
        </div>
      );
    }

    // loading company if one exists
    if (user.company_id && !company) {
      return (
        <div className="detailed-content-wrapper">
          <div>loading...</div>
        </div>
      );
    }

    if (this.props.companyLoading) {
      return (
        <div className="detailed-content-wrapper">
          <div>Company being saved...</div>
        </div>
      );
    }
    if (this.state.slide === 2 && this.state.products.length === 0) {
      this.nextSlide();
    }
    return (
      <div className="settings">
        <Sidebar>
          {user.company_id
            ? <h2>Edit Company</h2>
            : <h2>Register</h2>}
          <p>Enter the data of your company or service and you will be able to access this network of exporters and importers of the world</p>
        </Sidebar>
        <div className="center-content">
          {this.state.slide === 0
            ? <div className="slide-0">
                {user.company_id
                  ? <div>
                      <div onClick={() => {
                        this.deleteCompany();
                      }}>
                        Delete Company</div>
                      <CompanyDataForm nextSlide={this.nextSlide} company={this.props.company} user={user} title="Company Data" deleteTrades={this.props.deleteTrades} saveCompany={this.props.saveCompany}/>
                    </div>
                  : <div><CompanyDataForm nextSlide={this.nextSlide} company={null} user={user} title="Company Data" saveCompany={this.props.saveCompany}/></div>}</div>
            : null}
          {this.state.slide === 1
            ? <div className="slide-1">
                <ProductSelectionForm company={this.props.company} title="Product Selection" deleteTrades={this.props.deleteTrades} user={this.props.user} saveProducts={this.saveProducts}/>
              </div>
            : null}
          {this.state.slide === 2
            ? <div className="slide-2">
                <CountrySelectionForm createTrades={this.createTrades} addTrade={this.addTrade} title="Country Selection" deleteTrade={this.props.deleteTrade} products={this.state.products}/>
              </div>
            : null}
          {this.state.slide === 3
            ? <div className="slide-3">
                <div className="form">
                  {this.props.company
                    ? <Link to={`/company/${this.props.company.id}`}>
                        <button>View my listing</button>
                      </Link>
                    : <Link to={`/company/${this.props.companySaved}`}>
                      <button>View my listing</button>
                    </Link>
}
                </div>
              </div>
            : null}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveCompany: (company, imagesToUpload) => {
      dispatch(uploadImage(company, imagesToUpload));
    },
    authenticateAndFetchCompany: token => {
      dispatch(authenticateAndFetchCompany(token));
    },
    deleteCompany: id => {
      dispatch(deleteCompany(id));
    },
    deleteTrades: trades => {
      dispatch(deleteTrades(trades));
    },
    createTrades: (trades, id) => {
      dispatch(createTrades(trades, id));
    },
    fetchProductsByCompany: id => {
      dispatch(fetchProductsByCompany(id));
    }
  };
};

const mapStateToProps = state => {
  return {
    user: state.authentication.user,
    companyLoading: state.user.loading,
    companySaved: state.user.company,
    deleted: state.companyProfile.deleted,
    loading: state.authentication.loading || state.companyProfile.loading,
    error: state.authentication.error,
    token: state.authentication.token,
    company: state.companyProfile.authCompany
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
