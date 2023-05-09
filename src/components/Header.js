import "./Header.css";
import React from "react";
import { Nav } from "react-bootstrap";
import { Link as RouterLink } from "react-router-dom";

function Header({ logo }) {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>
        <RouterLink to="/" style={{ textDecoration: "none", color: "black" }}>
          Katy Molony
        </RouterLink>
      </h1>
      <Nav justify>
        <Nav.Item>
          <RouterLink
            to="/profile"
            className="App-link"
            style={{ textDecoration: "none" }}
          >
            About me
          </RouterLink>
        </Nav.Item>
        <Nav.Item>
          <RouterLink
            to="/projects"
            className="App-link"
            style={{ textDecoration: "none" }}
          >
            Projects
          </RouterLink>
        </Nav.Item>
        <Nav.Item>
          <RouterLink
            to="/resume"
            className="App-link"
            style={{ textDecoration: "none" }}
          >
            Resumé
          </RouterLink>
        </Nav.Item>
        <Nav.Item>
          <RouterLink
            to="/contact"
            className="App-link"
            style={{ textDecoration: "none" }}
          >
            Contact
          </RouterLink>
        </Nav.Item>
      </Nav>
    </header>
  );
}

export default Header;
