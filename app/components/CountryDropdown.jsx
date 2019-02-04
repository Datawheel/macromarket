import React, {Component} from "react";
import {Select} from "@blueprintjs/select";
import {Button, MenuItem, Icon} from "@blueprintjs/core";
import "components/Dropdown.css";

class CountryDropdown extends Component {

  render() {
    const {handleSelection, selectedItem, data} = this.props;

    const selected = selectedItem ? selectedItem : data[0];

    return <div className="selector">
      <Select
        items={data}
        filterable={true}
        className="filter-selector"
        itemPredicate={this.props.filterItem}
        itemRenderer={e => {
          const s = selected.name === e.name;
          return <MenuItem
            className={s ? "is-selected bp3-dark" : "bp3-dark"}
            text={<div className="option">
              <div className="country"><img className="flag" src={`/images/flags/country_${e.id}.png`} />{e.name}</div>
              {s && <Icon icon="small-tick" />}</div>}
            onClick={() => handleSelection(e)}
          />;
        }}
        noResults={<MenuItem disabled={true} text={"No results."} />}
        onItemSelect={handleSelection}
        onActiveItemChange={handleSelection}
        popoverProps={{className: "bp3-dark"}}
        resetOnSelect={true}
        resetOnQuery={true}
      >
        {/* children become the popover target; render value here */}
        <Button text={<div className="option"><div className="country"><img className="flag" src={`/images/flags/country_${selected.id}.png`} />{selected.name}</div></div>} rightIcon="chevron-down" />
      </Select>
    </div>;
  }
}

export default CountryDropdown;
