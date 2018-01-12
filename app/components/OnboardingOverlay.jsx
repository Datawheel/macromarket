import React from "react";
import {connect} from "react-redux";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div><p>Sup Sabrina! :)</p></div>
    );
  }
}

export default connect()(App);
