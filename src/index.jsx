import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./contexts/ContextProvider";
// import { registerLicense } from '@syncfusion/ej2-base';

import App from "./App";

import "./index.css";

// Registering Syncfusion license key
// registerLicense('License Key');

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
);
