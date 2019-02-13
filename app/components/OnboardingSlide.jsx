import React from "react";
import {connect} from "react-redux";
import OnboardingProducts from "components/OnboardingProducts";
import OnboardingGetStarted from "components/OnboardingGetStarted";
import OnboardingCompany from "components/OnboardingCompany";
import OnboardingSuccess from "components/OnboardingSuccess";
import {setOnboardingCompany, updateSlideOverlay} from "actions/onboardingActions";
import {Intent, Tab, Tabs} from "@blueprintjs/core";

class OnboardingSlide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addNewCompany: true,
      company: null,
      currentTab: "getting-started",
      loginSubmitted: false
    };
  }

  componentWillReceiveProps(nextProps) {
    const {auth} = nextProps;
    const {loginSubmitted} = this.state;
    if (loginSubmitted && auth.msg === "LOGIN_SUCCESS") {
      this.handleTabChange("add-company");
      this.setState({loginSubmitted: false});
    }
    if (loginSubmitted && auth.msg === "SIGNUP_SUCCESS") {
      this.handleTabChange("add-company");
      this.setState({loginSubmitted: false});
    }
  }

  productTab = () => {
    const toast = this.context.toast.current;
    toast.show({message: "You must select or create a company to continue.", intent: Intent.DANGER});
  }

  handleTabChange = newTab => this.setState({currentTab: newTab})

  render() {
    const {currentTab} = this.state;
    return <div className="slider-wrapper">
      <button className="close" onClick={this.props.toggleOverlay}></button>
      <div className="logo-wrapper">
        <img className="mm-logo" src="/images/macro-market-logo-yellow.png"/>
      </div>
      <Tabs className="onboarding-tabs" id="onboarding-tabs" onChange={this.handleTabChange} selectedTabId={currentTab}>
        <Tab id="getting-started"
          title="Getting Started"
          panel={<OnboardingGetStarted
            product={this.props.product}
            toggleOverlay={this.props.toggleOverlay}
            loginSuccess={() => this.handleTabChange("add-company")}
            loginSubmitted={() => this.setState({loginSubmitted: true})}
          />}
        />
        <Tab id="add-company" title="Company" panel={<OnboardingCompany selectCompany={() => this.handleTabChange("add-prods")} />} />
        <Tab id="add-prods" title="Add Products" panel={<OnboardingProducts saveTrades={() => this.handleTabChange("complete")}/>} />
        <Tab id="complete" title="Complete" panel={<OnboardingSuccess/>} />
      </Tabs>
    </div>;
  }
}

const mapDispatchToProps = dispatch => ({
  updateSlideOverlay: slideNumber => {
    dispatch(updateSlideOverlay(slideNumber));
  },
  setOnboardingCompany: companyId => {
    dispatch(setOnboardingCompany(companyId));
  }
});

const mapStateToProps = state => ({auth: state.auth, products: state.data.products, user: state.auth.user});

export default connect(mapStateToProps, mapDispatchToProps)(OnboardingSlide);

// {/* <div className={`slide-container slide-container-${this.props.slideNumber}`}>
//   <div className="slide slide-0">
//     <div className="logo-wrapper">
//       <img className="mm-logo" src="/images/icons/logos/macro-market.svg"></img>
//       <img src="/images/icons/logos/orange-market-logo.svg"></img>
//     </div>
//     <OnboardingGetStarted product={this.props.product} toggleOverlay={this.props.toggleOverlay} />
//   </div>
//   <div className="slide slide-1" >
//     <OnboardingCompany/>
//   </div>
//   <div className="slide slide-2">
//     <OnboardingProducts/>
//   </div>
//   <div className="slide slide-3">
//     <OnboardingSuccess product={this.props.product}/>
//   </div>
// </div> */}
