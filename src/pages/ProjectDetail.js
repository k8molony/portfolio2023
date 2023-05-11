import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import ProjectsJSON from "../json/projects.json";
import ChatAppVideo from "../components/ChatAppVideo";
import CaseStudy from "../components/CaseStudy";
import "./ProjectDetail.css";

export default function ProjectDetail(props) {
  let params = useParams();
  const [projectDetails, setProjectDetail] = useState({});
  useEffect(() => {
    let index = Number(params.name) - 1;
    setProjectDetail(ProjectsJSON[index]);
  }, [params]);

  return (
    <Card className="project-module">
      <Card.Body>
        <Card.Title>{projectDetails.title}</Card.Title>
        <div className="projectDetails_desc">
          <p>{projectDetails.desc}</p>
        </div>
        <div className="extra-container">
          {projectDetails.video && <ChatAppVideo />}
          {projectDetails.caseStudy && <CaseStudy />}
        </div>
        <div className="projectDetails_img">
          <Card.Img
            variant="top"
            type="fluid"
            src={projectDetails.imagePath}
            alt="project home screen"
          />
          <Card.Img
            variant="top"
            type="fluid"
            src={projectDetails.imagePath2}
            alt="project detail"
          />
        </div>
        <Link to={`/projects`}>
          <Button
            className="back-button"
            onClick={() => {}}
            variant="outline"
            size="sm"
          >
            Back
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
