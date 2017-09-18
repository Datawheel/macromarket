import React from "react";
import "./TradeEdit.css";
import {Button, Dialog, Intent} from "@blueprintjs/core";
import CountrySelection from "./CountrySelection";

class TradeEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmDeleteOpen: false
    };
  }

  toggleConfirmDelete = () => {
    this.setState({confirmDeleteOpen: !this.state.confirmDeleteOpen})
  }

  render() {
    const {confirmDeleteOpen} = this.state;
    const {countries: allCountries, trade, selectDestinations, selectOrigins, deleteProduct} = this.props;

    return (
      <div className="trade">
        <div className="trade-product">
          {`${trade.product.name} (${trade.product.id_hs92})`}
        </div>
        <div className="trade-dest">
          <CountrySelection
            countries={trade.destinations}
            allCountries={allCountries}
            selectCountry={countries => selectDestinations(countries, trade.product.id)}
          />
        </div>
        <div className="trade-origin">
          <CountrySelection
            countries={trade.origins}
            allCountries={allCountries}
            selectCountry={countries => selectOrigins(countries, trade.product.id)}
          />
        </div>
        <div className="trade-controls">
          <button type="button" className="pt-button pt-minimal" onClick={this.toggleConfirmDelete}>
            <span className="pt-icon-standard pt-icon-delete"></span>
            <Dialog
              isOpen={confirmDeleteOpen}
              onClose={this.toggleConfirmDelete}
            >
              <div className="pt-dialog-body">
                {`Are you sure you want to remove '${trade.product.name}' and all of its associated origin and destination countries? This action cannot be undone.`}
              </div>
              <div className="pt-dialog-footer">
                <div className="pt-dialog-footer-actions">
                  <Button
                    onClick={this.toggleConfirmDelete}
                    text="Cancel" />
                  <Button
                    intent={Intent.DANGER}
                    onClick={() => {
                      deleteProduct(trade.product);
                      this.toggleConfirmDelete();
                    }}
                    text="Delete"
                  />
                </div>
              </div>
            </Dialog>
          </button>
        </div>
      </div>
    );
  }
}
export default TradeEdit;
