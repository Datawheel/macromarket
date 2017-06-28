import React from "react";
import {connect} from "react-redux";
import {Link, browserHistory} from "react-router";
import NavBar from "./NavBar.jsx";
import Search from "./Search.jsx";
import Footer from "./Footer.jsx";
import "./App.css";
import Helmet from 'react-helmet';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Helmet title="About" meta={[{
            property: 'viewport',
            content: 'width=device-width, initial-scale=1.0'
          }
        ]}/>
        <NavBar location={this.props.location}></NavBar>
        <div className="main-content">
          {this.props.children}
          <Footer></Footer>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({searchActive: state.searchActive});

const mapDispatchToProps = dispatch => ({
  activateSearch: activeState => {
    dispatch({type: "ACTIVATE_SEARCH", data: activeState});
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
