import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { AuthContextProvider } from "./context/AuthContext.js";
import App from "./App.jsx";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <AuthContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>
);
