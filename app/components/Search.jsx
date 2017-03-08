import React from "react";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      searchTerm: "",
      filters: [],
      hover: ""
    };
  }

  mouseOver = filter => {
    console.log(this.state.hover);
    this.setState({hover: filter});
    console.log(this.state.hover);
  }

  mouseOut = () => {
    this.setState({hover: ""});
  }

  submit = () => {
    this.setState({searchTerm: this.state.input});
  }

  handleChange = event => {
    this.setState({input: event.target.value});
  }

  selectFilter = filter => {
    if (!this.state.filters.includes(filter)) {
      this.state.filters.push(filter);
    } else {
      const index = this.state.filters.indexOf(filter);
      this.state.filters.splice(index, 1);
    }
    this.forceUpdate();
  }

  render() {
    return (
      <div className="content-wrapper">
        <div className="search-container">
          <div className="search-wrapper">
            <input placeholder="Search" className="search-input" value={this.state.input} onChange={this.handleChange} type="text"></input>
            <img className="search-icon" src="./assets/icons/icon-search-white.svg"></img>
            <div className="filter-wrapper">
              <p className="label">FILTER</p>
              <div className="filter-icons-wrapper">
                <div onMouseOut={this.mouseOut} onMouseOver={this.mouseOver.bind(this, "place")} onClick={this.selectFilter.bind(this, "place")} className="filter-icon-wrapper">
                  <div className={this.state.hover === "place"
                    ? "arrow-box place tool-tip visible"
                    : "arrow-box place tool-tip"}>
                    <p>place</p>
                  </div>
                  {this.state.filters.includes("place")
                    ? <img src="./assets/icons/icon-place-yellow.svg"/>
                    : <img src="./assets/icons/icon-place-black.svg"/>
                  }
                </div>
                <div onMouseOut={this.mouseOut} onMouseOver={this.mouseOver.bind(this, "product")} onClick={this.selectFilter.bind(this, "product")} className="filter-icon-wrapper">
                  <div className={this.state.hover === "product"
                    ? "arrow-box tool-tip product visible"
                    : "arrow-box product tool-tip"}>
                    <p>product</p>
                  </div>
                  {this.state.filters.includes("product")
                    ? <img src="./assets/icons/icon-product-yellow.svg"/>
                    : <img src="./assets/icons/icon-product-black.svg"/>}
                </div>
                <div onMouseOut={this.mouseOut} onMouseOver={this.mouseOver.bind(this, "company")} onClick={this.selectFilter.bind(this, "company")} className="filter-icon-wrapper">
                  <div className={this.state.hover === "company"
                    ? "arrow-box company tool-tip visible"
                    : "arrow-box company tool-tip"}>
                    <p>company</p>
                  </div>
                  {this.state.filters.includes("company")
                    ? <img src="./assets/icons/icon-company-yellow.svg"/>
                    : <img src="./assets/icons/icon-company-black.svg"/>}
                </div>
                <div onMouseOut={this.mouseOut} onMouseOver={this.mouseOver.bind(this, "transport")} onClick={this.selectFilter.bind(this, "transport")} className="filter-icon-wrapper">
                  <div className={this.state.hover === "transport"
                    ? "arrow-box transport tool-tip visible"
                    : "arrow-box transport tool-tip"}>
                    <p>transportation</p>
                  </div>
                  {this.state.filters.includes("transport")
                    ? <img src="./assets/icons/icon-transport-yellow.svg"/>
                    : <img src="./assets/icons/icon-transport-black.svg"/>}
                </div>
                <div className="filter-icon-wrapper">
                  <p className={this.state.filters.length === 0
                    ? "selected"
                    : null}>all</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="result-wrapper">
          {this.state.searchTerm}
        </div>
      </div>
    );
  }
}
