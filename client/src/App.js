import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import AppNavbar from "./compontents/layout/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./compontents/pages/Home";
import About from "./compontents/pages/About";
import NotFound from "./compontents/pages/NotFound";
import Register from "./compontents/auth/Register";
import Login from "./compontents/auth/Login";
import Alerts from "./compontents/layout/Alerts";

import ContactState from "./context/contact/ContactState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";

import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <div className="app">
              <AppNavbar />
              <div className="p-3">
                <Alerts />
                <Routes>
                  <Route
                    exact
                    path="/"
                    Component={Home}
                  />
                  <Route
                    exact
                    path="/about"
                    Component={About}
                  />
                  <Route
                    exact
                    path="/register"
                    Component={Register}
                  />
                  <Route
                    exact
                    path="/login"
                    Component={Login}
                  />
                  <Route
                    path="*"
                    Component={NotFound}
                  />
                </Routes>
              </div>
            </div>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
};

export default App;
