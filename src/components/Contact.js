import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Particle from "./Particle";

function Contact() {
  return (
    <Container fluid className="contact-section py-5 mt-5">
      <Particle />
      <Container>
        <h1 className="contact-heading text-center mb-4 purple">
          Get in Touch
        </h1>
        <p className="text-center text-light mb-5">
          Feel free to reach out to me by filling out the form below.
        </p>
        <Row className="justify-content-center">
          <Col md={7} lg={6}>
            <Form className="p-4 rounded shadow bg-dark bg-opacity-75">
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label className="text-light">Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  className="bg-light"
                />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label className="text-light">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  className="bg-light"
                />
              </Form.Group>

              <Form.Group controlId="formMessage" className="mb-4">
                <Form.Label className="text-light">Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Enter your message"
                  className="bg-light"
                />
              </Form.Group>

              <div className="d-grid">
                <Button
                  variant="primary"
                  type="submit"
                  className="purple-button"
                >
                  Submit
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
