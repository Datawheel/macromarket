import React from "react";
import "./Dropdown.css";
export function arrowRenderer() {
  return (
    <span className="chevron bottom"></span>
  );
}

export function productOptionRenderer(option) {
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
  const colorName = `color-${id}`;

  return (
    <div>
      <div className={`colored-wrapper product-selected-wrapper`}>
        <div className={`${colorName} icon-wrapper`}>
          <img className="product_icon" src={`/images/product_icon/hs_${id}.png`}></img>
        </div>
        <div>
          <p>{option.label}</p>
        </div>
      </div>
    </div>
  )
}

let continents = true;
export function countryInputChange(inputValue) {
  continents = inputValue && inputValue.length
    ? false
    : true;
}

export function countryOptionRenderer(option, i, x) {
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
      {continents && option.first
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
  )
}
export function countryValueRenderer(value) {

  const id = value.value;
  const continentId = value.value.slice(0,2);
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
      <div className={`country-selected-wrapper colored-wrapper`}>
        <div>
          <p>{value.label}</p>
        </div>
      </div>
    </div>
  )
}
