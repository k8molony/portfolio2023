import React from "react";
import { useState, useEffect } from "react";
import { Container, Button, Row, Col, Card, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProjectsJSON from "../json/projects.json";
import "./Projects.css";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(ProjectsJSON);
  }, []);

  return (
    <Row>
      {projects?.map((project) => (
        <Col key={project.id}>
          <CardGroup>
            <Card className="project-card">
              <Card.Img variant="top" type="fluid" src={project.thumbnail} />
              <Card.Body>
                <Card.Title>{project.Title}</Card.Title>
                <div className="project_programs">
                  <span className="project_line_value">{project.programs}</span>
                </div>

                <div className="project_link">
                  <span className="project_label"></span>
                  <Link
                    to={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="link">{project.title}</Button>
                  </Link>
                </div>

                <div className="github_link">
                  <span className="project_label"></span>
                  <Link
                    to={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="link">Github Repository</Button>
                  </Link>
                </div>

                <div style={{ marginTop: "12px" }}>
                  <Link to={`/projects/${project.id}`}>
                    <Button className="button-info" variant="outline" size="sm">
                      More info
                    </Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      ))}
    </Row>
  );
}
