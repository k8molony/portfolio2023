import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Contact.css";

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/107c00d0-bd32-11ed-9193-d9c3535809f7";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <>
      <div className="contact-container">
        <p>I would love to hear from you!</p>
        <p>
          Reach me at&nbsp;
          <a href="mailto:molony.katy@gmail.com">
            {" "}
            molony(dot)katy(at)gmail(dot)com
          </a>
        </p>
        <p>Or fill out the form below:</p>
      </div>

      <Form
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
        target="_blank"
      >
        <Form.Group className="mb-3 pt-10" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Your name" required />
        </Form.Group>

        <Form.Group className="mb-3 pt-0" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Email" required />
        </Form.Group>

        <Form.Group className="mb-3 pt-0" controlId="formMessage">
          <Form.Label>Your message:</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Button className="message-button" type="submit">
          Send a message
        </Button>
      </Form>
    </>
  );
};

export default ContactForm;
