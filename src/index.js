import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { RecoilRoot } from "recoil";

import "./index.css";
import App from "./App";
import store from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
