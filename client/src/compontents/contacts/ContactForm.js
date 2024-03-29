import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";
import { Button, Row, Col } from "react-bootstrap";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const { addContact, current, clearCurrent, updateContact } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "personal"
      });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal"
  });

  const { name, email, phone, type } = contact;

  const onChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <Row>
        <Col
          lg={12}
          className="mb-2"
        >
          <h2 className="text-primary">{current ? "Edit" : "Add"}</h2>
        </Col>
        <Col
          lg={12}
          className="mb-2"
        >
          <input
            className="form-control"
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={onChange}
          />
        </Col>
        <Col
          lg={12}
          className="mb-2"
        >
          <input
            className="form-control"
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={onChange}
          />
        </Col>
        <Col
          lg={12}
          className="mb-2"
        >
          <input
            className="form-control"
            type="text"
            placeholder="Phone"
            name="phone"
            value={phone}
            onChange={onChange}
          />
        </Col>
        <Col
          lg={12}
          className="mb-2"
        >
          <span>Type: </span>{" "}
          <input
            className="radio-input"
            type="radio"
            name="type"
            value="personal"
            checked={type === "personal"}
            onChange={onChange}
          />{" "}
          Personal{" "}
          <input
            className="radio-input"
            type="radio"
            name="type"
            value="professional"
            checked={type === "professional"}
            onChange={onChange}
          />{" "}
          Professional
        </Col>
        <Col
          lg={12}
          className="mb-2"
        >
          <div className="d-grid gap-2">
            <Button
              type="submit"
              className="btn btn-primary"
            >
              Save
            </Button>
            {current && (
              <Button
                type="button"
                value="Save"
                className="btn btn-block btn-light"
                onClick={clearAll}
              >
                Clear
              </Button>
            )}
          </div>
        </Col>
      </Row>
    </form>
  );
};

export default ContactForm;
