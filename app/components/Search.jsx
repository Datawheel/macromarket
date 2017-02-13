import React from "react";
import {Link} from "react-router";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      searchTerm: ""
    }
  }

  submit = () => {
    this.setState({searchTerm: this.state.input});
  }

  handleChange = (event) => {
    this.setState({input: event.target.value})
  }

  render() {
    return (
      <div className="search-container">
        <div className="search-wrapper">
          <label>Search
          </label>
          <input value={this.state.input} onChange={this.handleChange} type="text"></input>
          <button onClick={this.submit}>submit</button>
        </div>
        <div className="result-wrapper">
          {this.state.searchTerm}
        </div>
      </div>
    );
  }
}
