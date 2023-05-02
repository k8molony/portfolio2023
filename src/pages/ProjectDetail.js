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
  console.log(projectDetails);
  useEffect(() => {
    let index = Number(params.name) - 1;
    setProjectDetail(ProjectsJSON[index]);
  }, [params]);

  return (
    <Card className="project-module">
      <Card.Img variant="top" type="fluid" src={projectDetails.imagePath} />
      <Card.Body>
        <Card.Title>{projectDetails.Title}</Card.Title>
        <div className="projectDetails_desc">
          <p>{projectDetails.desc}</p>
        </div>
        <div className="extra-container">
          {projectDetails.video && <ChatAppVideo />}
        </div>
        {projectDetails.caseStudy && <CaseStudy />}
        <Link to={`/projects`}>
          <Button onClick={() => {}} variant="light">
            Back
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
