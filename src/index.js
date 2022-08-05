import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
// import { HashRouter } from "react-router-dom";

//persist
import { PersistGate } from 'redux-persist/integration/react'
import { configureStorage } from "./reduxStore/configureStore";
const { store, persistor } = configureStorage();


ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
