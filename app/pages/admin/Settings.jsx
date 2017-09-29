import React from "react";
import {connect} from "react-redux";
import {Link, browserHistory} from "react-router";
import {isAuthenticated} from "datawheel-canon";
import {deleteCompany} from "../../actions/userActions";
import Sidebar from "../../components/Sidebar";
import "./Admin.css";
import "./Settings.css";
// import UserData from "./UserData";

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

  // componentDidMount() {
  //   this.props.isAuthenticated();
  // }

  componentDidUpdate() {
    const {user, loading} = this.props.auth;
    if (!user && !loading) {
      browserHistory.push("/login");
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

          <Link to="/settings/change-password" role="button" className="pt-button pt-icon-lock">
            Change Password
            <span className="pt-icon-standard pt-icon-key pt-align-right"></span>
          </Link>

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

// const mapDispatchToProps = dispatch => ({
//   deleteCompany: id => {
//     dispatch(deleteCompany(id));
//   },
//   authenticateAndFetchCompany: () => {
//     dispatch(authenticateAndFetchCompany());
//   }
// });
// const mapDispatchToProps = dispatch => ({
//   isAuthenticated: () => {
//     dispatch(isAuthenticated());
//   }
// });
//
// const mapStateToProps = state => ({
//   user: state.authentication.user,
//   loading: state.authentication.loading,
//   error: state.authentication.error
// });
//
// export default connect(mapStateToProps)(Settings);

const mapDispatchToProps = dispatch => ({
  isAuthenticated: () => {
    dispatch(isAuthenticated());
  }
});

export default connect(state => ({auth: state.auth}), mapDispatchToProps)(Settings);
