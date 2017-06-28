import React from "react";
import Sidebar from "components/Sidebar";
import {Link} from "react-router";
import {connect} from "react-redux";
import {fetchCompany} from "../actions/companyActions";
import {fetchProfileTradesByCompany} from "../actions/tradesActions";
import {browserHistory} from "react-router";
import "./Detailed.css";
import CompanyHeader from "../components/CompanyHeader";
class CompanyWithId extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const id = this.props.params.companyWithId;
    if (id.slice(0, 3) === "ca_") {
      this.props.fetchCompany(id);
      this.props.fetchProfileTradesByCompany(id);
    } else {
      this.props.fetchCompany(id);
      this.props.fetchProfileTradesByCompany(id);
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.props.params.companyWithId !== newProps.params.companyWithId) {
      const id = newProps.params.companyWithId;
      this.props.fetchCompany(id);
      this.props.fetchProfileTradesByCompany(id);
      this.shouldUpdate = false;
    }
  }

  render() {
    const {company, loading, error, trades} = this.props;

    if (loading || !company) {
      return (
        <div className="detailed-content-wrapper company">
          <Sidebar></Sidebar>
          <div className="center-content">
            <div className="header-image-wrapper">
              <div className="background-image">
                <div className="image-overlay-wrapper">
                  <div className="image-overlay"></div>
                  <div className="text-wrapper"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="detailed-content-wrapper">
          <h2>Error</h2>
          <p>Please refresh the page.</p>
        </div>
      );
    }



    const profileImage = {
      backgroundImage: `url(${company.profile_image})`,
      opacity: 1
    };


    const connectamericas = this.props.params.companyWithId.slice(0, 3) === "ca_";

    return (
      <div className="detailed-content-wrapper company">
        <Sidebar>
          <div className="profile-info">
            <div className="profile-image-wrapper">
              <div className="profile-image background-image" style={profileImage}></div>
            </div>
            <img className="icon" src="/images/icons/icon-company-white.svg"/>
            <h3>{company.name}</h3>
          </div>
          {this.props.trades
            ? <div className="products">
                <div className="imports">
                  <div className="section-wrapper">
                    <h5>Products Imported</h5>
                    <div className="yellow-line"></div>
                    {trades.imports
                      ? <div>{trades.imports.map((trade, index) => {
                        const id = trade.id.slice(0, 2);
                        return (
                          <Link key={index} to={`/product/${trade.id}`}>
                            <div className="product-wrapper">
                              <div className={`icon-wrapper color-${id}`}>
                                <img src={`/images/product_icon/hs_${id}.png`}></img>
                              </div>
                              <div className="colored-wrapper">
                                <div className={`darker-color color-${id}`}></div>
                                <p>{trade.name}</p>
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  : null}
                  </div>
                </div>
                <div className="exports">
                  <div className="section-wrapper">
                    <h5>Products Exported</h5>
                    <div className="yellow-line"></div>
                    {trades.exports
                      ? <div>{trades.exports.map((trade, index) => {
                        const id = trade.id.slice(0, 2);
                        return (
                          <Link key={index} to={`/product/${trade.id}`}>
                            <div className="product-wrapper">
                              <div className={`icon-wrapper color-${id}`}>
                                <img src={`/images/product_icon/hs_${id}.png`}></img>
                              </div>
                              <div className="colored-wrapper">
                                <div className={`darker-color color-${id}`}></div>
                                <p>{trade.name}</p>
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  : null}
                  </div>
                </div>
                <div className="coverage">
                  <div className="section-wrapper">
                    <h5>Coverage Area</h5>
                    <div className="yellow-line"></div>
                    {trades.countries
                      ? <div>
                          {trades.countries.map((country, index) => {
                            const continentId = country.id.slice(0, 2);
                            const colorName = `color-${country.continent.toLowerCase().replace(" ", "-")}`;
                            return (
                              <Link key={index} to={`/country/${country.id}`}>
                                <div className="product-wrapper">
                                  <div className={`icon-wrapper ${colorName}`}>
                                    <img src={`/images/flags/country_${continentId}.png`}></img>
                                  </div>
                                  <div className="colored-wrapper">
                                    <div className={`darker-color ${colorName}`}></div>
                                    <p>{country.name}</p>
                                  </div>
                                </div>
                              </Link>
                            );
                          })}</div>
                      : null}
                  </div>
                </div>
                {company.company_email
                ? <a href={`mailto:${company.company_email}`}>
                <button><img className="button-icon" src="/images/icons/icon-mail.svg"/>Get in Touch</button></a> : null}
              </div>
            : null}
        </Sidebar>
        <div className="center-content">
          <CompanyHeader company={company} profileImage={profileImage}  connectamericas={connectamericas}/>
          <div className="description-wrapper">
            <h3>Company Description</h3>
            <p>{company.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCompany: id => {
    dispatch(fetchCompany(id));
  },
  fetchProfileTradesByCompany: id => {
    dispatch(fetchProfileTradesByCompany(id));
  }
});

const mapStateToProps = state => ({
  company: state.companyProfile.company,
  loading: state.companyProfile.loading,
  error: state.companyProfile.error || null,
  trades: state.trades.profileTrades,
  tradesLoading: state.trades.loading,
  tradesError: state.trades.error
});

export default connect(mapStateToProps, mapDispatchToProps)(CompanyWithId);
