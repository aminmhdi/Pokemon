import React from "react";
import { Card, CardBody, Row, Col } from "react-bootstrap";

export const About = () => {
  return (
    <Card>
      <CardBody>
        <Row>
          <Col lg={12}>
            <h1>
              <p>About this application</p>
            </h1>
          </Col>
          <Col lg={12}>
            <p>App to search movies for simplilearn course</p>
          </Col>
          <Col lg={12}>
            Developed by:{" "}
            <a href="https://www.linkedin.com/in/aminmohamadi/">
              Amin Mohammadi
            </a>
          </Col>
          <Col lg={12}>
            <p>Version 1.0</p>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default About;
