import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";

const Register = () => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
    if (error === "User already exists") {
      setAlert(error);
      clearErrors();
    }

    // eslint-disable-next-line
  }, [error, isAuthenticated]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setAlert("Please enter required fields");
    } else if (password !== password2) {
      setAlert("Passwords do not match");
    } else {
      register({
        name,
        email,
        password
      });
    }
  };

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Register</span>
      </h1>
      <hr />
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label
            htmlFor="name"
            className="form-label"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={name}
            onChange={onChange}
            required
          ></input>
        </div>
        <div className="mb-3">
          <label
            htmlFor="email"
            className="form-label"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={email}
            onChange={onChange}
            required
          ></input>
        </div>
        <div className="mb-3">
          <label
            htmlFor="password"
            className="form-label"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={password}
            onChange={onChange}
            required
          ></input>
        </div>
        <div className="mb-3">
          <label
            htmlFor="password2"
            className="form-label"
          >
            Confirm Password
          </label>
          <input
            type="password"
            name="password2"
            className="form-control"
            value={password2}
            onChange={onChange}
            required
            minLength="6"
          ></input>
        </div>
        <div className="py-3 d-grid gap-2">
          <input
            type="submit"
            value="Register"
            className="btn btn-primary btn-block"
          ></input>
        </div>
      </form>
    </div>
  );
};

export default Register;
