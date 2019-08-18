import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";

// call Redux
import { createStore } from "redux";
import reducers from "./modules"
import { Provider } from "react-redux";

// create store
const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
