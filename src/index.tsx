import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// eslint-disable-next-line import-helpers/order-imports
import { PersistGate } from "redux-persist/integration/react";

import "./index.css";

// eslint-disable-next-line import-helpers/order-imports
import { BrowserRouter } from "react-router-dom";

import { App } from "./App";
import { store, persistor } from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,

  document.getElementById("root")
);
