import React from "react";

export default class ProductWithId extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return <p>{this.props.params.productWithId}</p>;
  }

}
