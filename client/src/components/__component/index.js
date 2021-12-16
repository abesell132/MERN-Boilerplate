import React, { Component } from "react";
import "./index.scss";

class MyComponent extends Component {
  render() {
    return <div id="ComponentID"></div>;
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, {
  //    Redux Action Declations Go Here
})(MyComponent);
