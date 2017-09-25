import React from "react";
import {connect} from "react-redux";
import {deleteCompany} from "../../actions/userActions";
import {isAuthenticated, updateUser} from "../../actions/authenticationActions";
import Sidebar from "../../components/Sidebar";
import "./Admin.css";
import api from "../../api.js";
import CompanyCard from "./CompanyCard";
import {nest} from "d3-collection";

class UserData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: [],
      trades: [],
      password1: "",
      password2: "",
      error: "",
      oldPassword: "",
      deleteVisible: false
    }
  }

  componentWillMount() {
    this.props.clearUser();
    const {user} = this.props;
    api.get(`api/companies/byUser/${user.id}`)
      .then(companiesResp => {
        const companies = companiesResp.data;
        api.get(`api/trades/user/${user.id}`)
          .then(tradesResp => {
            nest()
              .key(d => d.company_id)
              .key(d => d.product_id)
              .entries(tradesResp.data)
              .forEach(nestedTrades => {
                const thisCompany = companies.find(c => c.id.toString() === nestedTrades.key);
                thisCompany.trades = nestedTrades.values;
                console.log("c!!!!")
                console.log(thisCompany)
              })
            // console.log(companies)
            // this.setState({trades: response.data});
            this.setState({companies});
          });
      });
  }

  handleChange = e => {
    e.target.value
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  resendActivation = e => {
    e.preventDefault();
    return api.get("api/auth/sendActivationEmail", {withCredentials: true})
      .then(response => {
        this.activationDiv.remove();
      })
  }

  save = () => {
    if (this.state.password1.length < 5 || this.state.password2.length < 5) {
      this.setState({error: "Password must be longer than 5 characters."});
    } else if (this.state.password1 !== this.state.password2) {
      this.setState({error: "Passwords must match."});
    } else {
      this.setState({error: null});
      this.props.updateUser(this.props.user.id, this.props.user.email, this.state.oldPassword, this.state.password1);
    }
  }

  toggleDeleteCompany = () => {
    var visible = this.state.deleteVisible;
    this.setState({
      deleteVisible: !visible
    });
  }

  deleteCompany = () => {
    this.setState({deleteVisible: false});
    this.props.deleteCompany(this.props.user.company_id);
  }

  render() {
    const {updatedUser, user, loading, error} = this.props;
    const {companies, trades} = this.state;

    return (
      <div className={this.state.deleteVisible
        ? "user-data-opacity"
        : "user-data-wrapper"}>
        <div className="delete-popup">
          <span onClick={this.toggleDeleteCompany} className="delete"></span>
          <div className="content">
            <p>Are you sure you want to delete your company?</p>
            <button className="button button-next" onClick={this.deleteCompany}>Delete</button>
          </div>
        </div>
        <div className="user-data">
          {/*
            {!user.isConfirmed
              ? <div className="alert alert-warning" ref={(activationDiv) => { this.activationDiv = activationDiv; }}>
                  <strong>Warning!</strong> Please activate your account to add a company. <a href="#" onClick={this.resendActivation}>Resend activation.</a>
                </div>
              : null
            }
          */}
          <div className="section-wrapper no-border listing">
            <h2>My Companies</h2>
            <div className="company-cards">
              {companies.map(company =>
                <CompanyCard key={company.id} company={company} />
              )}
            </div>
          </div>
          <div className="section-wrapper listing">
            <div className="register-company">
              {!companies.length ? <p>You do not have a company registered.</p> : null}
              <a href="#" className="button button-next">Register a Company</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteCompany: id => {
      dispatch(deleteCompany(id));
    },
    updateUser: (id, email, oldPassword, password) => {
      dispatch(updateUser(id, email, oldPassword, password));
    },
    clearUser: () => {
      dispatch({type: "SAVE_USER_FULFILLED", date: null})
    },
    isAuthenticated: () => {
      dispatch(isAuthenticated());
    }
  };
}

const mapStateToProps = state => {
  return {
    updatedUser: state.authentication.updatedUser,
    user: state.authentication.user,
    loading: state.authentication.loading,
    error: state.authentication.error
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserData);
