import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import List from "../components/List";
import Link from "../components/Link";
import Laptop from "../assets/Laptop.png";
import Autism from "../assets/autism.svg";
import Hiking from "../assets/hiking.svg";
import Hobbies from "../assets/Hobbies.png";
import "./Profile.css";

function Profile({ userName }) {
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({});
  useEffect(() => {
    async function fetchData() {
      const profile = await fetch(`https://api.github.com/users/${userName}`);
      const result = await profile.json();
      if (result) {
        setProfile(result);
        setLoading(false);
      }
    }
    fetchData();
  }, [userName]);

  const items = [
    { field: "Location", value: profile.location },
    {
      field: "GitHub",
      value: <Link url={profile.html_url} title={profile.html_url} />,
    },
    {
      field: "Repos",
      value: <Link url={profile.repos_url} title={profile.repos_url} />,
    },
  ];

  return (
    <div>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <Container fluid className="Profile-container">
          <Row>
            <h1>Tech Skills:</h1>
            <Col>
              <ul>
                <li>JavaScript, TypeScript</li>
                <li>HTML, CSS</li>
                <li>React, React Native, Angular</li>
                <li>Node.js, JSON, JQuery, NPM</li>
                <li>Bootstrap</li>
                <li>Scrum/Agile</li>
                <li>AWS</li>
              </ul>
            </Col>
            <Col lg="8">
              <img
                className="Profile-deco"
                src={Laptop}
                alt="laptop with fake code"
              />
            </Col>
          </Row>
          <h1>Life Skills:</h1>
          <Row>
            <Col>
              <img
                className="Profile-deco"
                src={Autism}
                alt="autism infinity sign"
              />
            </Col>
            <Col className="Profile-text">
              <p>
                As the parent of an autistic teenager, I try my best to help him
                navigate the world and increase acceptance for neurodiversity
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="Profile-text">
              <p>
                My silly husband and I love getting out into nature, although we
                don't get the chance to go nearly as often as we'd like!
              </p>
            </Col>
            <Col>
              <img
                className="Profile-deco"
                src={Hiking}
                alt="My husband and I at Tory's Den in Hanging Rock State Park, NC"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <img
                className="Profile-deco"
                src={Hobbies}
                alt="A collage of a tee-shirt that says Hello Darkness my old friend, a teal and purple mandala I'm crocheting, a lego set of flowers, a yellow and brown sunflower I crocheted, a red tee shirt with two hands around a uterus that says No country for old men, and a hooded scarf I made with multicolored yarn."
              />
            </Col>
            <Col className="Profile-text">
              <p>
                In my free time, I have lots of hobbies. I consider myself a
                maker. I love to make things, but I like having guidelines. I
                crochet, I play the flute, I love making tee-shirts and
                stickers, and my favorite thing for gifts is to include a
                handmade card!
              </p>
            </Col>
          </Row>
          <Row>
            <img
              className="Profile-avatar"
              src={profile.avatar_url}
              alt={profile.name}
            />
            <List items={items} />
          </Row>
        </Container>
      )}
    </div>
  );
}

export default Profile;
