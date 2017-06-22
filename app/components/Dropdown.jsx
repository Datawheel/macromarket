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

  countryOptionRenderer(option, i, x) {
    if (option.value === "all") {
      return (
        <div>
          <div className={`colored-wrapper`}>
            <p className="all">{option.label}</p>
          </div>
        </div>
      )
    }

    const id = option.value;
    const continentId = id.slice(0, 2);
    const colorName = `color-${option.continent.toLowerCase().replace(" ", "-")}`;

    return (
      <div className="country-dropdown">
        {option.first
          ? <div className={`${option.continent.toLowerCase()}-wrapper continent-wrapper`}>
              <div className={`${colorName} colored-wrapper dropdown-item`}>
                <div className={`${colorName} icon-wrapper`}>
                  <div className={`${colorName} darker-color`}></div>
                  <img src={`/images/flags/country_${continentId}.png`}/></div>
                <div className="continent-name">
                  <p>{option.continent}</p>
                </div>
              </div>
            </div>
          : null}
        <div className={`colored-wrapper`}>
          <div className={`icon-wrapper`}>
            <img className="product_icon" src={`/images/flags/country_${id}.png`}></img>
          </div>
          <div className="country-name-wrapper">
            <p>{option.label}</p>
          </div>
        </div>
      </div>
    );
  }

  countryValueRenderer(value) {
    const id = value.value;
    const continentId = value.value.slice(0, 2);
    const colorName = `color-${value.continent.toLowerCase().replace(" ", "-")}`;
    return (
      <div>
        <div className={`${value.continent.toLowerCase()}-wrapper continent-selected-wrapper`}>
          <div className={`${colorName} colored-wrapper dropdown-item`}>
            <div className={`${colorName} icon-wrapper`}>
              <div className={`${colorName}`}></div>
              <img src={`/images/flags/country_${continentId}.png`}/></div>
          </div>
        </div>
        <div>
          <p className="product-selected">{value.label}</p>
        </div>
      </div>
    );
  }

  render() {
    const options = this.props.options;
    return (
      <div className="select-dropdown-wrapper">

        <Select valueRenderer={this.props.type === "products"
          ? this.productValueRenderer.bind(this)
          : this.countryValueRenderer.bind(this)} optionClassName={"dropdown-option"} optionRenderer={this.props.type === "products"
          ? this.productOptionRenderer.bind(this)
          : this.countryOptionRenderer.bind(this)} arrowRenderer={this.arrowRenderer} clearable={false} name="form-field-name" value={this.props.value} options={options} onChange={this.props.select}/>
      </div>
    );
  }
}
