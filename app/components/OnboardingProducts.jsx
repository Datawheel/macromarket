import React from "react";
import {connect} from "react-redux";
import EditProducts from "components/OnboardingEditProducts";
import {setOnboardingCompany, updateSlideOverlay} from "actions/onboardingActions";
import api from "helpers/api.js";

async function getCompany(slug) {
  const companyResponse = await api.get(`api/companies/${slug}`);
  return companyResponse.data;
}

class OnboardingProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      company: null
    };
  }

  async componentDidMount() {
    const {companySlug} = this.props;
    const company = await getCompany(companySlug);
    this.setState({company});
  }

  async componentWillReceiveProps(nextProps) {
    if (nextProps.companySlug !== this.props.companySlug) {
      const company = await getCompany(nextProps.companySlug);
      this.setState({company});
    }
  }

  render() {
    const {company} = this.state;
    const {product} = this.props;

    return (
      <div>
        <EditProducts onboardingCompany={company} onboardingProduct={product} companySlug={this.props.companySlug} saveTrades={this.props.saveTrades} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  companySlug: state.onboarding.companySlug,
  product: state.onboarding.product,
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
