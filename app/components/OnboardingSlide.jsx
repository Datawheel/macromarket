import React from "react";
import {connect} from "react-redux";


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.params);
  }

  render() {
    return (
      <div>
        <h1>Hello!</h1>
      </div>
    );
  }
}

export default connect()(App);
