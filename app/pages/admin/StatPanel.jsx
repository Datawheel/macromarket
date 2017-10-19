import React from "react";
import {connect} from "react-redux";
import api from "../../api.js";
import moment from "moment";
import {Icon, Intent} from "@blueprintjs/core";
import "./Settings.css";
import "./Admin.css";

class StatPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      companies: [],
      trades: []
    };
  }

  componentDidMount() {
    this.getData(this.props.days);
  }

  getData = numDays => {
    api.get(`/api/users/?days=${numDays}`)
      .then(usersResp => {
        this.setState({users: usersResp.data});
      });
    api.get(`/api/companies/?days=${numDays}`)
      .then(companiesResp => {
        this.setState({companies: companiesResp.data});
      });
    api.get(`/api/trades/?days=${numDays}`)
      .then(tradesResp => {
        this.setState({trades: tradesResp.data});
      });
  }

  render() {
    const {users, companies, trades} = this.state;

    return (
      <div>
        <h2>Users</h2>
        {users.length
          ? <table className="pt-table pt-striped">
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Created</th>
                <th>Activated</th>
              </tr>
            </thead>
            <tbody>
              {users.map(u =>
                <tr key={u.id}>
                  <td>{u.username}</td>
                  <td>{u.email}</td>
                  <td>{moment(u.createdAt).format("MMMM Do YYYY")}</td>
                  <td>{u.activated ? <Icon iconName="endorsed" intent={Intent.SUCCESS} iconSize={Icon.SIZE_LARGE} /> : <Icon iconName="delete" intent={Intent.DANGER} iconSize={Icon.SIZE_LARGE} />}</td>
                </tr>
              )}
            </tbody>
          </table>
          : <span>No data...</span>}

        <h2>Companies</h2>
        {companies.length
          ? <table className="pt-table pt-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Website</th>
                <th>Country</th>
                <th>User</th>
                <th>Created</th>
              </tr>
            </thead>
            <tbody>
              {companies.map(c =>
                <tr key={c.id}>
                  <td><a href={`/company/${c.slug}`}>{c.name}</a></td>
                  <td>{c.website}</td>
                  <td>{c.Country ? <a href={`/country/${c.Country.id}`}>{c.Country.name}</a> : null}</td>
                  <td>{c.user.username}</td>
                  <td>{moment(c.createdAt).format("MMMM Do YYYY")}</td>
                </tr>
              )}
            </tbody>
          </table>
          : <span>No data...</span>}

        <h2>Trades</h2>
        {companies.length
          ? <table className="pt-table pt-striped">
            <thead>
              <tr>
                <th>Company</th>
                <th>Product</th>
                <th>Trade Flow</th>
                <th>Country</th>
                <th>Created</th>
              </tr>
            </thead>
            <tbody>
              {trades.map(t =>
                <tr key={t.id}>
                  <td><a href={`/company/${t.Company.slug}`}>{t.Company.name}</a></td>
                  <td><a href={`/product/${t.Product.id}`}>{t.Product.name}</a></td>
                  <td>{t.trade_flow}</td>
                  <td>{t.Country ? <a href={`/country/${t.Country.id}`}>{t.Country.name}</a> : null}</td>
                  <td>{moment(t.createdAt).format("MMMM Do YYYY")}</td>
                </tr>
              )}
            </tbody>
          </table>
          : <span>No data...</span>}

      </div>
    );
  }
}

export default connect(state => ({auth: state.auth}))(StatPanel);
