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
          <h2>Tech Skills:</h2>
          <Row className="Profile-row-info">
            <Col sm={12} md={6}>
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
            <Col sm={12} md={6}>
              <img
                className="Profile-deco"
                src={Laptop}
                alt="laptop with fake code"
              />
            </Col>
          </Row>
          <h2>Life Skills:</h2>
          <Row className="Profile-row-info">
            <Col sm={12} md={6}>
              <img
                className="Profile-deco"
                src={Autism}
                alt="autism infinity sign"
              />
            </Col>
            <Col className="Profile-text" sm={12} md={6}>
              <p>
                As the parent of an autistic teenager, I try my best to help him
                navigate the world and increase acceptance for neurodiversity.
                We like to go to the pool, solve mysteries, and play Dungeons
                and Dragons together!
              </p>
            </Col>
          </Row>
          <Row className="Profile-row-info">
            <Col className="Profile-text" sm={12} md={6}>
              <p>
                My silly husband and I love getting out into nature, although we
                don't get the chance to go nearly as often as we'd like!
                Although I walk local trails daily, when we get a chance we like
                to go up to Hanging Rock State Park which is just a short 40
                minute drive away. It's even better when we get the chance to
                camp for a night or two!
              </p>
            </Col>
            <Col sm={12} md={6}>
              <img
                className="Profile-deco"
                src={Hiking}
                alt="My husband and I at Tory's Den in Hanging Rock State Park, NC"
              />
            </Col>
          </Row>
          <Row className="Profile-row-info">
            <Col sm={12} md={6}>
              <img
                className="Profile-deco"
                src={Hobbies}
                alt="A collage of a tee-shirt that says Hello Darkness my old friend, a teal and purple mandala I'm crocheting, a lego set of flowers, a yellow and brown sunflower I crocheted, a red tee shirt with two hands around a uterus that says No country for old men, and a hooded scarf I made with multicolored yarn."
              />
            </Col>
            <Col className="Profile-text" sm={12} md={6}>
              <p>
                In my free time, I have lots of hobbies. I consider myself a
                maker. I love to make things, but I like having guidelines. I
                crochet with a pattern, I play the flute with sheet music, I
                love making tee-shirts and stickers out of designs I have
                purchased, and my favorite thing for gifts is to include a
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
