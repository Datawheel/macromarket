import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router";
import {isAuthenticated} from "@datawheel/canon-core";
import Sidebar from "../../components/Sidebar";
import PropTypes from "prop-types";
import "./Admin.css";
import "./Settings.css";

const prettify = name =>
  name.replace(/-/g, " ").replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());

const Breadcrumb = props => {
  const {params, routes} = props;
  let path = "";
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
        path: prettify(r.path.split("/:")[0])
      };
    });

  return (
    <ul className="bp3-breadcrumbs">
      {cleanRoutes.map((r, i) =>
        <li key={i}>
          { i === cleanRoutes.length - 1
            ? <span className="bp3-breadcrumb bp3-breadcrumb-current">{r.path}</span>
            : <Link className="bp3-breadcrumb" to={r.fullpath}>{r.path}</Link>}
        </li>
      )}
    </ul>
  );
};

class Settings extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.isAuthenticated();
  }

  componentDidUpdate() {
    const {router} = this.context;
    const {user, loading} = this.props.auth;
    if (!user && !loading) {
      router.push("/login");
    }
  }

  deleteCompany = () => {
    this.props.deleteCompany(this.props.user.company_id);
  }

  render() {
    const {loading, user} = this.props.auth;
    const {location, params, routes} = this.props;
    const {pathname: path} = location;

    if (loading || !user) {
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

          <Link to="/settings/change-password" role="button" className="bp3-button bp3-icon-lock">
            Change Password
          </Link>
          <br />

          {user.role === 2
            ? <Link to="/settings/stats" role="button" className="bp3-button bp3-icon-timeline-line-chart">
              View Stats
            </Link>
            : null}

        </Sidebar>
        <div className="center-content form-wrapper">
          <div className="form">
            <Breadcrumb params={params} routes={routes} />
            <div>{this.props.children}</div>
          </div>
        </div>
      </div>
    );
  }
}

Settings.contextTypes = {
  router: PropTypes.object
};

const mapDispatchToProps = dispatch => ({
  isAuthenticated: () => {
    dispatch(isAuthenticated());
  }
});

export default connect(state => ({auth: state.auth}), mapDispatchToProps)(Settings);
