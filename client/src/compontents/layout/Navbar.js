import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import ContactContext from "../../context/contact/contactContext";

const AppNavbar = ({ title }) => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearContacts } = contactContext;

  const onLogout = () => {
    logout();
    clearContacts();
  };

  const authLinks = (
    <Fragment>
      <li className="nav-item">
        <div className="nav-link">{user && user.name}</div>
      </li>
      <li className="nav-item">
        <a
          className="nav-link cursor-pointer"
          onClick={onLogout}
          href="#!"
        >
          <FontAwesomeIcon icon={faSignOut} /> Logout
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li className="nav-item">
        <Link
          to="/register"
          className="nav-link"
        >
          Register
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/login"
          className="nav-link"
        >
          Login
        </Link>
      </li>
    </Fragment>
  );

  return (
    <Navbar
      bg="light"
      expand="md"
      className="px-4"
    >
      <Navbar.Brand className="pe-4">
        <Link
          to="/"
          className="nav-link"
        >
          <FontAwesomeIcon icon={faVideo} /> {title}
        </Link>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link
              to="/about"
              className="nav-link"
            >
              About
            </Link>
          </li>
          {isAuthenticated ? authLinks : guestLinks}
        </ul>
      </Navbar.Collapse>
    </Navbar>
  );
};

AppNavbar.propTypes = {
  title: PropTypes.string.isRequired
};

AppNavbar.defaultProps = {
  title: "Movies App"
};

export default AppNavbar;
