import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import welcomePic from "../assets/welcomePic.png";
import "./Welcome.css";

function Welcome() {
  const [loading, setLoading] = useState(false);
  const [welcome, setWelcome] = useState({});

  useEffect(() => {
    setWelcome(welcome);
    setLoading(false);
  }, [welcome]);

  return (
    <Container className="Welcome-container" fluid>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <>
          <Row>
            <h1>Hi, I’m Katy Molony!</h1>
            <h2>I create beautiful, functional websites.</h2>
          </Row>
          <Row className="Welcome-text">
            <Col className="Welcome-blurb">
              <div>
                <Image src={welcomePic} alt={welcome.name} />
                <p>
                  I've always had an interest in technology but never thought I
                  could actually code until I suddenly found myself teaching
                  online. I was a High School French teacher, and due to the
                  global pandemic, I suddenly had to figure out the best way to
                  keep my students interested through a screen. Our district
                  used the Learning Management System (LMS) Canvas, which has a
                  lot of simple things to do, but to make it even better, it
                  allows you to go into the code. I started playing with that,
                  learning some simple HTML, and realized that there were a lot
                  of similarities between learning that and learning a foreign
                  language. Suddenly, coding seemed so completely doable! I
                  enrolled in an online bootcamp with CareerFoundry and the rest
                  is history!
                </p>
                <p>
                  I have a natural analytical ability to make things that are
                  difficult to understand understood, whether it is verbally, on
                  paper, or through an application. That served me well as a
                  high school teacher and serves me well now as a programmer. I
                  enjoy making technology more accessible and understandable for
                  everyone.
                </p>
              </div>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
}

export default Welcome;
