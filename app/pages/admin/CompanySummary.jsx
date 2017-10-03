import React from "react";
import {connect} from "react-redux";
import {browserHistory} from "react-router";
import {fetchData} from "datawheel-canon";
import {Intent, Position, Toaster} from "@blueprintjs/core";
import {url} from "../../api";
import "./Admin.css";
import "./Settings.css";

class CompanySummary extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps = nextProps => {
    const {auth} = this.props;
    const {company} = nextProps;
    if (company.uid) {
      if (auth.user && company.uid !== auth.user.id) {
        const toast = Toaster.create({className: "company-error-toast", position: Position.TOP_CENTER});
        toast.show({message: "You do not have permission to view this page.", intent: Intent.DANGER});
        browserHistory.push("/login");
      }
    }
  }

  render() {
    const {company} = this.props;
    if (!company) {
      return (
        <div>
          <p>Loading company data...</p>
        </div>
      );
    }

    return (
      <div>
        <h2>{company.name}</h2>
        {this.props.children}
      </div>
    );
  }
}

CompanySummary.preneed = [
  fetchData("company", `${url}/api/companies/<companySlug>`, res => res)
];

const mapStateToProps = state => ({
  auth: state.auth,
  company: state.data.company
});

export default connect(mapStateToProps)(CompanySummary);
