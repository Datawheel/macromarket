import React from "react";
import {connect} from "react-redux";


class OnboardingSuccess extends React.Component {


  render() {


    return (
      <div className="slide-inner">
        <h2>Congrats Your Company has been Listed!</h2>
        <p className="description-text">
          Select one of your companies to be listed under product.
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(OnboardingSuccess);
