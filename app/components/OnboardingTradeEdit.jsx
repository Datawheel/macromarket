import React from "react";
import {connect} from "react-redux";
import "./OnboardingTradeEdit.css";
import {Button, Dialog, Intent} from "@blueprintjs/core";
import ProductSearch from "pages/admin/ProductSearch";
import CountrySelection from "pages/admin/CountrySelection";

class TradeEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmDeleteOpen: false
    };
  }

  toggleConfirmDelete = () => {
    this.setState({confirmDeleteOpen: !this.state.confirmDeleteOpen});
  }

  render() {
    const {confirmDeleteOpen} = this.state;
    const {countries: allCountries, products, trade, selectProduct,
      selectDestinations, selectOrigins, deleteProduct} = this.props;

    return (
      <tr className="trade onboarding-trade-edit">
        <td className="trade-product">
          {
            trade.product
              ? <span>{`${trade.product.name} (${trade.product.id_hs92})`}</span>
              : <ProductSearch products={products} selectProduct={selectProduct} onboardingPopup={true} />
          }
        </td>
        <td className="trade-dest">
          {
            trade.product && allCountries && trade.destinations
              ? <CountrySelection
                countries={trade.destinations}
                allCountries={allCountries}
                selectCountry={countries => selectDestinations(countries, trade.product.id)}
                onboardingPopup={true}
              />
              : null
          }
        </td>
        <td className="trade-origin">
          {
            trade.product && allCountries && trade.origins
              ? <CountrySelection
                countries={trade.origins}
                allCountries={allCountries}
                selectCountry={countries => selectOrigins(countries, trade.product.id)}
                onboardingPopup={true}
              />
              : null
          }
        </td>
        <td className="trade-controls">
          {
            trade.product
              ? <button type="button" className="bp3-button bp3-minimal" onClick={this.toggleConfirmDelete}>
                <span className="bp3-icon-standard bp3-icon-delete"></span>
                <Dialog
                  isOpen={confirmDeleteOpen}
                  onClose={this.toggleConfirmDelete}
                >
                  <div className="bp3-dialog-body">
                    {`Are you sure you want to remove '${trade.product.name}' and all of its associated origin and destination countries? This action cannot be undone.`}
                  </div>
                  <div className="bp3-dialog-footer">
                    <div className="bp3-dialog-footer-actions">
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
              : null
          }
        </td>
      </tr>
    );
  }
}

const mapStateToProps = state => ({
  products: state.data.products
});

export default connect(mapStateToProps)(TradeEdit);
