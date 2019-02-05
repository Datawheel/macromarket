import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router";
import {Activate as CanonActivate} from "@datawheel/canon-core";
import {NonIdealState} from "@blueprintjs/core";
import "./Admin.css";
import "./Settings.css";

import api from "helpers/api.js";
import CompanyCard from "pages/admin/CompanyCard";
import {nest} from "d3-collection";

class SettingsSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: []
    };
  }

  componentDidMount() {
    const {user} = this.props.auth;
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
              });
            this.setState({companies});
          });
      });
  }

  render() {
    const {companies} = this.state;
    const {user} = this.props.auth;
    return (
      <div>
        { user.activated
          ? companies.length
            ? <nav className="bp3-navbar">
              <div className="bp3-navbar-group bp3-align-left">
                <div className="bp3-navbar-heading">My Companies</div>
              </div>
              <div className="bp3-navbar-group bp3-align-right">
                <Link to="/settings/company/new" role="button" className="bp3-button bp3-icon-plus bp3-intent-success">
                  List your company
                </Link>
              </div>
            </nav>
            : <NonIdealState
              action={<Link to="/settings/company/new" role="button" className="bp3-button bp3-icon-plus bp3-intent-success">Add company</Link>}
              visual="search"
              title="No companies listed"
              description="Click below to add your first company listing."
            />
          : <NonIdealState
            action={<CanonActivate />}
            visual="search"
            title="Confirm Account"
            description="In order to list your company, you first need to activate your account. Click the link in your email or if you did not receive an email, resend one here."
          />
        }

        <div className="company-cards">
          {companies.map(company =>
            <CompanyCard key={company.id} company={company} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(SettingsSummary);
