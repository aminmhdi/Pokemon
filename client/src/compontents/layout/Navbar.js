import React from "react";
import PropTypes from "prop-types";
import { Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from "@awesome.me/kit-KIT_CODE/icons";

const AppNavbar = ({ title, icon }) => {
  return (
    <Navbar className="navbar-expand-lg navbar-light bg-light">
      <a
        className="navbar-brand px-4"
        href="/"
      >
        <FontAwesomeIcon icon={byPrefixAndName.fas["fa-address-book"]} />{" "}
        {title}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a
              className="nav-link"
              href="/"
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="/about"
            >
              About
            </a>
          </li>
        </ul>
      </div>
    </Navbar>
  );
};

AppNavbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

AppNavbar.defaultProps = {
  title: "Contact Keeper",
  icon: "fas fa-id-card-alt"
};

export default AppNavbar;
