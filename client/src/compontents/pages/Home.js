import React, { useContext, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";
import ContactFilter from "../contacts/ContactFilter";
import AuthContext from "../../context/auth/authContext";

export const Home = () => {
  const authContext = useContext(AuthContext);
  const { loadUser } = authContext;
  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="grid-2">
      <Row>
        <Col md={6}>
          <ContactForm />
        </Col>
        <Col md={6}>
          <ContactFilter />
          <Contacts />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
