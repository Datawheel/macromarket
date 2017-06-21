import React from "react";
import "./Dropdown.css";
import Select from "react-select";

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  arrowRenderer() {
    return (
      <span className="chevron bottom"></span>
    );
  }

  productValueRenderer(value) {
    const id = value.value;
    const colorName = `color-${id}`;
    return (
      <div>
        <div className={`colored-wrapper`}>
          <div className={`${colorName} product-selected-wrapper icon-wrapper`}>
            <img className="product_icon" src={`/images/product_icon/hs_${id}.png`}></img>
          </div>
          <div>
            <p className="product-selected">{value.label}</p>
          </div>
        </div>
      </div>
    )
  }

  productOptionRenderer(option) {
    if (option.value === "all") {
      return (
        <div>
          <div className={`colored-wrapper`}>
            <p className="all">{option.label}</p>
          </div>
        </div>
      );
    }

    const id = option.value;
    const colorName = `color-${id}`;

    return (
      <div>
        <div className={`colored-wrapper`}>
          <div className={`${colorName} icon-wrapper`}>
            <img className="product_icon" src={`/images/product_icon/hs_${id}.png`}></img>
          </div>
          <div>
            <p>{option.label}</p>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const options = this.props.options;
    return (
      <div>
        <Select valueRenderer={this.productValueRenderer} optionClassName={"dropdown-option"} optionRenderer={this.productOptionRenderer} arrowRenderer={this.arrowRenderer} clearable={false} searchable={false} name="form-field-name" value={this.props.value} options={options} onChange={this.props.select}/>
      </div>
    );
  }
}
