import React from "react";
import {connect} from "react-redux";
import {Link, browserHistory} from "react-router";
import {deleteCompany} from "../../actions/userActions";
import Sidebar from "../../components/Sidebar";
import "./Admin.css";
import "./Settings.css";
import {authenticateAndFetchCompany} from "../../actions/companyActions";
// import UserData from "./UserData";

const Breadcrumb = props => {
  const {params, routes} = props;
  let path = "";
  console.log("routes!!!", routes)
  const cleanRoutes = routes
    .slice(1)
    .filter(r => r.path)
    .map(r => {
      path += `/${r.path}`;
      const pathComponents = path.split("/").map(pc => {
        if (pc.includes(":")) {
          return params[pc.replace(":", "")];
        }
        return pc;
      });

      return {
        fullpath: pathComponents.join("/"),
        path: r.path.split("/:")[0]
      };
    });
  return (
    <ul className="pt-breadcrumbs">
      {cleanRoutes.map((r, i) =>
        <li key={i}>
          { i === cleanRoutes.length - 1
            ? <span className="pt-breadcrumb pt-breadcrumb-current">{r.path}</span>
            : <Link className="pt-breadcrumb" to={r.fullpath}>{r.path}</Link>}
        </li>
      )}
    </ul>
  );
};

class Settings extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    // if (!this.props.user && !this.props.loading) {
    //   browserHistory.push("/login");
    // }
    // if (this.props.deleted) {
    //   browserHistory.push("/login");
    // }
  }

  deleteCompany = () => {
    this.props.deleteCompany(this.props.user.company_id);
  }

  render() {
    const {user, loading, location, params, routes} = this.props;
    const {pathname: path} = location;

    if (!user || loading) {
      return <div>loading...</div>;
    }

    return (
      <div className="settings">
        <Sidebar>

          <h2>Account Overview</h2>
          <p className="user-email">
            <span>Email</span>
            {user.email}
          </p>

          <button type="button" className="pt-button">
            Change Password
            <span className="pt-icon-standard pt-icon-key pt-align-right"></span>
          </button>

        </Sidebar>
        <div className="center-content form-wrapper">
          <div className="form">
            {/* <UserData /> */}
            <Breadcrumb params={params} routes={routes} />
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  deleteCompany: id => {
    dispatch(deleteCompany(id));
  },
  authenticateAndFetchCompany: () => {
    dispatch(authenticateAndFetchCompany());
  }
});

const mapStateToProps = state => ({
  user: state.authentication.user,
  loading: state.authentication.loading,
  error: state.authentication.error
});

export default connect(mapStateToProps)(Settings);
