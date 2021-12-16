import React, { Component } from "react";
import "./index.scss";

class MyPage extends Component {
  render() {
    return <div id="PageID"></div>;
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, {
  //    Redux Action Declations Go Here
})(MyPage);
