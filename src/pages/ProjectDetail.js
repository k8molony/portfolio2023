import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import ProjectsJSON from "../json/projects.json";
import ChatAppVideo from "../components/ChatAppVideo";

export default function ProjectDetail(props) {
  let params = useParams();
  const [projectDetails, setProjectDetail] = useState({});
  console.log(projectDetails);
  useEffect(() => {
    let index = Number(params.name) - 1;
    setProjectDetail(ProjectsJSON[index]);
  }, [params]);
  // useEffect(() => {
  //   setProjectDetail({
  //     title: props.title,
  //     index: props.index,
  //     imagePath: props.imagePath,
  //     desc: props.desc,
  //   });
  // }, [props.desc, props.imagePath, props.index, props.title]);

  return (
    <Card className="project-module">
      <img
        src={`${projectDetails.imagePath}`}
        alt={`${projectDetails.title} screenshot`}
      />
      <h3>
        <Link to={projectDetails.index}>{projectDetails.title}</Link>
      </h3>
      <p>{projectDetails.desc}</p>
      <Link
        className="project-link"
        to={`/project-page/${projectDetails.index}`}
      >
        see project
      </Link>

      {projectDetails.video && <ChatAppVideo />}

      <Link to={`/projects`}>
        <Button onClick={() => {}} variant="light">
          Back
        </Button>
      </Link>
    </Card>
  );
}
