import React from "react";
import { useState, useEffect } from "react";
import { Button, Row, Col, Card, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProjectsJSON from "../json/projects.json";

export default function Projects() {
  // const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(ProjectsJSON);
    // setLoading(false);
    console.log();
  }, []);

  return (
    <Row>
      {projects?.map((project) => (
        <Col key={project.id}>
          <CardGroup>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" type="fluid" src={project.imagePath} />
              <Card.Body>
                <Card.Title>{project.Title}</Card.Title>
                {/* <Card.Text> */}
                <div className="project_description">
                  <span className="project_label">Description: </span>
                  <span className="project_line_value">{project.desc}</span>
                </div>

                <div className="project_link">
                  <span className="project_label"></span>
                  <Link to={project.link}>
                    <Button variant="link">{project.title}</Button>
                  </Link>
                </div>

                <div className="github_link">
                  <span className="project_label"></span>
                  <Link to={project.repo}>
                    <Button variant="link">Github Repository</Button>
                  </Link>
                </div>
                {/* </Card.Text> */}
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      ))}
    </Row>
  );
}
