import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import store from "./redux/store";
import "./css/theme.scss";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <div className="App"></div>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
