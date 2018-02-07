import React from "react";
import {connect} from "react-redux";
import EditProducts from "../pages/admin/EditProducts";
import {setOnboardingCompany, updateSlideOverlay} from "../actions/onboardingActions";

class OnboardingProducts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <EditProducts/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  company: state.onboarding.companyId,
  user: state.auth.user
});

const mapDispatchToProps = dispatch => ({
  setOnboardingCompany: companyId => {
    dispatch(setOnboardingCompany(companyId));
  },
  updateSlideOverlay: slideNumber => {
    dispatch(updateSlideOverlay(slideNumber));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(OnboardingProducts);
